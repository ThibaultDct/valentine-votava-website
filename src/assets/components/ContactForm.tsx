import React, { useState } from 'react';
import { Send } from 'lucide-react';

const fieldClass =
  'w-full rounded-xl border border-amber-200 bg-amber-50/40 px-4 py-3 text-stone-800 transition-colors placeholder:text-stone-400 focus:border-amber-600 focus:bg-white focus:outline-none';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 md:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-amber-900">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={100}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-amber-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={254}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-amber-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={5000}
          rows={5}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full">
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer'}
        {status !== 'sending' && <Send className="h-4 w-4" aria-hidden="true" />}
      </button>

      <p aria-live="polite" className="min-h-[1.5rem] text-center text-sm">
        {status === 'success' && (
          <span className="text-emerald-700">Votre message a bien été envoyé. À très bientôt.</span>
        )}
        {status === 'error' && (
          <span className="text-red-700">
            Une erreur est survenue. Vous pouvez aussi m'écrire directement à
            contact@votava-psychologue.fr
          </span>
        )}
      </p>
    </form>
  );
}
