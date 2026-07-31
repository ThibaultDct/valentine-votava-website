import { AlertTriangle, ExternalLink, Stethoscope, Siren, LifeBuoy, ShieldAlert, HeartHandshake } from 'lucide-react';

interface PhoneNumber {
  display: string;
  note?: string;
}

interface Contact {
  name: string;
  numbers?: PhoneNumber[];
  description?: string;
}

interface ContactGroup {
  title: string;
  icon: typeof Stethoscope;
  critical?: boolean;
  contacts: Contact[];
}

/** "0 980 980 930" -> "0980980930", pour le lien tel: */
const toTelHref = (display: string) => `tel:${display.replace(/\s/g, '')}`;

const GROUPS: ContactGroup[] = [
  {
    title: 'En première intention',
    icon: Stethoscope,
    contacts: [
      {
        name: 'Votre médecin traitant',
        description:
          'Il peut évaluer votre situation, vous orienter vers les professionnels adaptés et coordonner votre prise en charge.',
      },
    ],
  },
  {
    title: 'Urgences vitales',
    icon: Siren,
    critical: true,
    contacts: [
      { name: 'SAMU', numbers: [{ display: '15' }], description: 'Urgence médicale.' },
      {
        name: 'Police / Gendarmerie',
        numbers: [{ display: '17' }],
        description: 'Si vous êtes en danger ou victime de violences.',
      },
      { name: 'Sapeurs-pompiers', numbers: [{ display: '18' }], description: "Secours d'urgence." },
      {
        name: "Numéro d'urgence européen",
        numbers: [{ display: '112' }],
      },
      {
        name: "Urgence par SMS",
        numbers: [{ display: '114' }],
        description:
          "Notamment pour les personnes sourdes, malentendantes ou dans l'impossibilité de parler.",
      },
    ],
  },
  {
    title: 'Crise suicidaire',
    icon: LifeBuoy,
    critical: true,
    contacts: [
      {
        name: 'Numéro national de prévention du suicide',
        numbers: [{ display: '3114' }],
        description: 'Écoute, soutien et orientation 24h/24 et 7j/7, gratuit et confidentiel.',
      },
    ],
  },
  {
    title: 'Violences',
    icon: ShieldAlert,
    contacts: [
      {
        name: 'Violences Femmes Info',
        numbers: [{ display: '3919' }],
        description: 'Écoute, information et orientation.',
      },
      {
        name: 'Allô Enfance en danger',
        numbers: [{ display: '119' }],
        description: 'Pour toute situation de danger concernant un enfant.',
      },
      {
        name: 'France Victimes',
        numbers: [{ display: '116 006' }],
        description: "Soutien, information et accompagnement des victimes d'infractions.",
      },
    ],
  },
  {
    title: 'Addictions',
    icon: HeartHandshake,
    contacts: [
      { name: 'Alcool Info Service', numbers: [{ display: '0 980 980 930' }] },
      {
        name: 'Drogues Info Service',
        numbers: [
          { display: '0 800 23 13 13', note: 'poste fixe' },
          { display: '01 70 23 13 13', note: 'mobile' },
        ],
      },
      { name: 'Joueurs Info Service', numbers: [{ display: '09 74 75 13 13' }] },
    ],
  },
];

export function EmergencyContacts() {
  return (
    <div className="max-w-5xl mx-auto">
      <p className="text-neutral-700 text-center max-w-2xl mx-auto">
        En cas d'urgence ou si votre sécurité, ou celle d'un proche, est en danger, ne restez pas
        seul(e). Les services ci-dessous sont disponibles pour vous orienter et vous accompagner.
      </p>

      {/* Le message le plus important de la section : il passe en premier */}
      <div className="mt-8 rounded-lg border-l-4 border-red-500 bg-red-50 p-6">
        <div className="flex gap-4">
          <AlertTriangle className="w-6 h-6 flex-shrink-0 text-red-600" aria-hidden="true" />
          <div className="space-y-3">
            <p className="font-semibold text-red-900">
              Mon cabinet ne propose pas de permanence d'urgence.
            </p>
            <p className="text-neutral-700">
              Si vous ressentez un risque de passage à l'acte, si vous avez des idées suicidaires
              envahissantes ou si l'état psychique d'un proche vous inquiète fortement, rendez-vous
              sans attendre aux urgences du CHU ou du centre hospitalier le plus proche, ou
              contactez le{' '}
              <a href="tel:15" className="font-semibold text-red-800 underline underline-offset-2">
                15
              </a>{' '}
              ou le{' '}
              <a href="tel:3114" className="font-semibold text-red-800 underline underline-offset-2">
                3114
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {GROUPS.map(({ title, icon: Icon, critical, contacts }) => (
          <section
            key={title}
            className={`bg-white rounded-lg shadow-md p-6 ${critical ? 'md:col-span-2' : ''}`}
          >
            <h3 className="flex items-center gap-3 font-serif text-xl text-amber-900">
              <Icon
                className={`w-5 h-5 flex-shrink-0 ${critical ? 'text-red-600' : 'text-amber-700'}`}
                aria-hidden="true"
              />
              {title}
            </h3>

            <ul className={`mt-5 space-y-4 ${critical ? 'sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0' : ''}`}>
              {contacts.map(({ name, numbers, description }) => (
                <li key={name} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  {numbers && (
                    <span className="flex flex-wrap sm:flex-col items-start gap-2 sm:w-36 sm:flex-shrink-0">
                      {numbers.map(({ display, note }) => (
                        <span key={display} className="flex flex-col items-start">
                          <a
                            href={toTelHref(display)}
                            className={`inline-block rounded px-2.5 py-1 font-semibold tabular-nums whitespace-nowrap transition-colors ${
                              critical
                                ? 'bg-red-100 text-red-800 hover:bg-red-200'
                                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                            }`}
                          >
                            {display}
                          </a>
                          {note && <span className="mt-0.5 pl-0.5 text-xs text-neutral-500">{note}</span>}
                        </span>
                      ))}
                    </span>
                  )}
                  <span className="min-w-0">
                    <strong className="font-semibold text-neutral-800">{name}</strong>
                    {description && <span className="block text-sm text-neutral-600">{description}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Psycom */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h3 className="font-serif text-xl text-amber-900">Besoin d'une écoute spécifique ?</h3>
        <p className="mt-3 text-neutral-700">
          Il existe de nombreuses lignes d'écoute gratuites, anonymes et confidentielles selon votre
          situation : jeunes, étudiants, addictions, violences, deuil, proches, LGBTQIA+, maladies,
          aidants…
        </p>
        <p className="mt-3 text-neutral-700">
          Psycom a pour mission de recenser les ressources disponibles afin de faciliter la
          recherche d'aide pour des problèmes de santé mentale. Sa rubrique «&nbsp;S'orienter&nbsp;»
          rassemble un guide des lignes d'écoute, un guide des associations et de nombreuses autres
          ressources, pour vous ou pour un proche.
        </p>
        <a
          href="https://www.psycom.org/sorienter/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-amber-700 px-5 py-2.5 text-white transition-colors hover:bg-amber-800"
        >
          Consulter le guide Psycom
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
