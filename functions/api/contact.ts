/**
 * Cloudflare Pages Function : envoi du formulaire de contact via Resend.
 *
 * La clé API vit uniquement côté serveur (variable d'environnement Cloudflare
 * Pages `RESEND_API_KEY`, sans préfixe VITE_) et n'est jamais exposée au navigateur.
 */

interface Env {
  RESEND_API_KEY: string;
}

interface EventContext {
  request: Request;
  env: Env;
}

const FROM_ADDRESS = 'no-reply@votava-psychologue.fr';
const TO_ADDRESS = 'contact@votava-psychologue.fr';

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  message: 5000,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

type Field = keyof typeof MAX_LENGTHS;

function readField(payload: Record<string, unknown>, field: Field): string | null {
  const value = payload[field];
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_LENGTHS[field]) return null;
  return trimmed;
}

export const onRequestPost = async (context: EventContext): Promise<Response> => {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return jsonResponse({ error: 'Service indisponible.' }, 500);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse({ error: 'Requête invalide.' }, 400);
  }

  if (payload === null || typeof payload !== 'object') {
    return jsonResponse({ error: 'Requête invalide.' }, 400);
  }

  const name = readField(payload, 'name');
  const email = readField(payload, 'email');
  const message = readField(payload, 'message');

  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return jsonResponse({ error: 'Champs invalides ou manquants.' }, 400);
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: TO_ADDRESS,
        reply_to: email,
        subject: 'Message reçu depuis votre site internet',
        html: `
          <h2>Nouveau message de ${safeName}</h2>
          <p><strong>De:</strong> ${safeName} (${safeEmail})</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error('Resend API error', response.status, await response.text());
      return jsonResponse({ error: "Impossible d'envoyer le message." }, 502);
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return jsonResponse({ error: "Impossible d'envoyer le message." }, 502);
  }

  return jsonResponse({ ok: true }, 200);
};
