import { useEffect, useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  CreditCard,
  Banknote,
  ArrowUpRight,
  AlertTriangle,
  ParkingCircle,
  Video,
  Receipt,
  CalendarX,
} from 'lucide-react';
import { ImageCarousel } from './assets/components/ImageCarousel';
import photo from './assets/images/Moi.jpeg';
import cabinet1 from './assets/images/cabinet/cabinet1.jpeg';
import cabinet2 from './assets/images/cabinet/cabinet2.jpeg';
import cabinet4 from './assets/images/cabinet/cabinet4.jpeg';
import cabinet5 from './assets/images/cabinet/cabinet5.jpeg';
import doctolib from './assets/images/banniere_linkedin_psychologue.jpg';
import { ContactForm } from './assets/components/ContactForm';
import { Navigation } from './assets/components/Navigation';
import { Hero } from './assets/components/Hero';
import { SectionHeading } from './assets/components/SectionHeading';
import { DiscordIcon, PinterestIcon } from './assets/components/BrandIcons';
import { BLOG_URL, DISCORD_INVITE_URL, PINTEREST_URL } from './constants';
import { Approaches } from './assets/components/Approaches';
import { Faq } from './assets/components/Faq';
import { TeenContact } from './assets/components/TeenContact';
import { EmergencyContacts } from './assets/components/EmergencyContacts';

const TRAINING = [
  { year: '2026', label: 'Hypnose thérapeutique (en cours)', org: 'Ipnosia' },
  { year: '2026', label: 'Inceste et abus sexuels', org: 'Formationspsy' },
  { year: '2025', label: 'Théorie polyvagale', org: 'Double Hélice' },
  {
    year: '2025',
    label: 'Psychotraumatologie : diagnostic, accompagnement, orientation',
    org: 'Double Hélice',
  },
  { year: '2025', label: 'LI-ICV', org: 'Double Hélice' },
  { year: '2025', label: 'ACT', org: 'A.P.P.E.A.' },
  {
    year: '2021',
    label: 'Master en psychologie : psychopathologie clinique du lien social et familial',
    org: "Université d'Angers",
  },
  { year: '2019', label: 'Licence de psychologie', org: "Université d'Angers" },
];

const PRICES = [
  {
    name: 'Consultation',
    price: '70 €',
    description: 'Consultations régulières pour enfants, adolescents et adultes.',
    featured: true,
  },
  {
    name: 'Tarif étudiant',
    price: '50 €',
    description: "Sur présentation d'un justificatif.",
  },
  {
    name: 'Tarif solidaire',
    price: 'Sur demande',
    description:
      'Pour les personnes en situation de grande précarité financière (bénéficiaires du RSA, de l\'ASS ou d\'autres minima sociaux).',
  },
];

const PRACTICAL = [
  {
    icon: Video,
    title: 'Téléconsultation',
    text: 'Les téléconsultations sont possibles, si vous êtes éloigné ou si vos horaires sont contraints.',
  },
  {
    icon: Receipt,
    title: 'Remboursements',
    text: "Consultation non remboursée par l'Assurance Maladie. Je ne fais pas partie du dispositif Mon soutien psy, mais certaines mutuelles peuvent en prendre une partie en charge sur présentation de la facture.",
  },
  {
    icon: CalendarX,
    title: 'Annulation et report',
    text: "Toute annulation ou demande de report doit être effectuée au moins 48 heures avant l'heure prévue de la séance. À défaut, la séance sera facturée dans son intégralité, sauf en cas de force majeure.",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const cabinetImages = [cabinet1, cabinet2, cabinet4, cabinet5, doctolib];

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    // Apparition : un seuil très bas, sinon une section plus haute que l'écran
    // n'atteint jamais le ratio demandé et resterait invisible pour toujours.
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -10% 0px' }
    );

    // Section active : on ne regarde qu'une bande étroite sous la navigation,
    // ce qui reste fiable quelle que soit la hauteur des sections.
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      revealObserver.observe(section);
      spyObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      spyObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-amber-900 focus:shadow-lift"
      >
        Aller au contenu
      </a>

      <Navigation activeSection={activeSection} />

      <main id="contenu">
        <Hero />

        {/* Qui suis-je */}
        <section
          id="presentation"
          aria-labelledby="titre-presentation"
          className="section-fade border-b border-amber-100 bg-white py-24 md:py-32"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <SectionHeading eyebrow="Qui suis-je" title="Une clinicienne, un parcours" id="titre-presentation" />

                  <div className="mt-10 overflow-hidden rounded-2xl border border-amber-100 shadow-lift">
                    <img
                      src={photo}
                      alt="Portrait de Valentine Votava"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-5 text-stone-600">
                  <p className="text-lg text-stone-700">
                    Forte d'une expérience en libéral et dans l'accompagnement éducatif et social, je
                    m'engage auprès des enfants, adolescents et adultes dans un cadre thérapeutique
                    bienveillant et authentique.
                  </p>
                  <p>
                    Mon parcours m'a permis de travailler avec des familles, des demandeurs d'emploi
                    et des publics confrontés à des défis variés, notamment le handicap, les troubles
                    anxieux, les troubles du neurodéveloppement ou encore les traumatismes psychiques.
                  </p>
                  <p>
                    Je poursuis des formations en psychotrauma, en autisme, ainsi qu'en santé
                    naturelle, pour explorer des alternatives et enrichir ma pratique clinique. Je
                    conçois et mets en place des projets innovants, tels que la thérapie par le jeu
                    vidéo ou la création d'une association pour favoriser le lien social en ligne aux
                    divers besoins de mes patients.
                  </p>
                </div>

                {/* Formation, en frise plutôt qu'en liste */}
                <div className="mt-12">
                  <h3 className="text-xl">Formation</h3>

                  <ol className="mt-6 list-none border-l border-amber-200">
                    {TRAINING.map(({ year, label, org }) => (
                      <li key={`${year}-${label}`} className="relative py-4 pl-8">
                        <span
                          className="absolute -left-[5px] top-[1.6rem] h-2.5 w-2.5 rounded-full border-2 border-amber-400 bg-white"
                          aria-hidden="true"
                        />
                        <p className="font-semibold tabular-nums text-amber-700">{year}</p>
                        <p className="mt-1 text-stone-700">{label}</p>
                        <p className="mt-0.5 text-sm text-stone-500">{org}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mon approche */}
        <section
          id="approche"
          aria-labelledby="titre-approche"
          className="section-fade relative overflow-hidden border-b border-amber-100 bg-amber-50 py-24 md:py-32"
        >
          <span
            className="psi-watermark pointer-events-none absolute -left-32 top-1/3 hidden lg:block"
            aria-hidden="true"
          />

          <div className="container relative">
            <SectionHeading
              eyebrow="Mon approche"
              title="Un accompagnement construit sur mesure"
              lead="Chaque situation appelle des outils différents. Voici la façon dont je travaille et les méthodes sur lesquelles je m'appuie."
              id="titre-approche"
            />

            <div className="mt-16">
              <Approaches />
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section
          id="tarifs"
          aria-labelledby="titre-tarifs"
          className="section-fade border-b border-amber-100 bg-white py-24 md:py-32"
        >
          <div className="container">
            <SectionHeading
              eyebrow="Tarifs"
              title="Tarifs des consultations"
              id="titre-tarifs"
            />

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {PRICES.map(({ name, price, description, featured }) => (
                <div
                  key={name}
                  className={`flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                    featured
                      ? 'bg-amber-900 text-amber-50 shadow-lift'
                      : 'card-interactive'
                  }`}
                >
                  <h3 className={`text-lg ${featured ? 'text-amber-100' : 'text-amber-800'}`}>
                    {name}
                  </h3>
                  <p
                    className={`mt-4 font-serif text-4xl ${
                      featured ? 'text-white' : 'text-amber-900'
                    }`}
                  >
                    {price}
                  </p>
                  <p className={`mt-4 text-sm ${featured ? 'text-amber-100/90' : 'text-stone-500'}`}>
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {PRACTICAL.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card p-6">
                  <h3 className="flex items-center gap-3 text-base">
                    <Icon className="h-5 w-5 flex-shrink-0 text-amber-700" aria-hidden="true" />
                    {title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-amber-100 bg-amber-50/70 px-6 py-5">
              <p className="text-sm font-semibold text-amber-900">Moyens de paiement acceptés</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-600">
                <span className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-amber-700" aria-hidden="true" />
                  Carte bancaire
                </span>
                <span className="flex items-center gap-2">
                  <Banknote className="h-4 w-4 text-amber-700" aria-hidden="true" />
                  Espèces
                </span>
                <span className="flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-amber-700" aria-hidden="true" />
                  Chèque
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Le Cabinet — mise en page inversée par rapport à « Qui suis-je » */}
        <section
          id="cabinet"
          aria-labelledby="titre-cabinet"
          className="section-fade border-b border-amber-100 bg-amber-50 py-24 md:py-32"
        >
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6 lg:order-2">
                <ImageCarousel images={cabinetImages} />
              </div>

              <div className="lg:col-span-6 lg:order-1">
                <SectionHeading
                  eyebrow="Le cabinet"
                  title="Un lieu calme, pensé pour l'écoute"
                  id="titre-cabinet"
                />

                <p className="mt-8 text-stone-600">
                  Dans un cadre calme et chaleureux, conçu pour favoriser l'écoute et la détente, je
                  vous accueillerai avec le sourire.
                </p>

                <dl className="mt-10 space-y-5">
                  <div className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-amber-900">Adresse</dt>
                      <dd className="text-stone-600">3 rue Claude Chappe, 44470 Carquefou</dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-amber-900">Horaires</dt>
                      <dd className="text-stone-600">Mardi au vendredi, 9h00 – 19h30</dd>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ParkingCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-700" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold text-amber-900">Stationnement</dt>
                      <dd className="text-stone-600">
                        Un parking est à disposition : garez-vous sur les places
                        «&nbsp;Cab'Atypique&nbsp;».
                      </dd>
                    </div>
                  </div>
                </dl>

                <p className="mt-8 rounded-xl border border-amber-200 bg-white/70 p-4 text-sm text-stone-600">
                  Petite précision : le cabinet se trouve à l'étage, sans ascenseur, mais les
                  escaliers sont accessibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="titre-faq"
          className="section-fade border-b border-amber-100 bg-white py-24 md:py-32"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <SectionHeading
                    eyebrow="Questions fréquentes"
                    title="Ce qu'on me demande souvent"
                    lead="Les questions qui reviennent le plus avant un premier rendez-vous."
                    id="titre-faq"
                  />
                </div>
              </div>

              <div className="lg:col-span-8">
                <Faq />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="titre-contact"
          className="section-fade border-b border-amber-100 bg-amber-50 py-24 md:py-32"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Contact"
                  title="Prendre rendez-vous"
                  lead="Pour un premier rendez-vous ou toute information complémentaire, écrivez-moi ou appelez-moi directement."
                  id="titre-contact"
                />

                <div className="mt-10 space-y-4">
                  <a
                    href="tel:0665149239"
                    className="card-interactive flex items-center gap-4 p-5"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100">
                      <Phone className="h-5 w-5 text-amber-800" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm text-stone-500">Téléphone</span>
                      <span className="block font-semibold text-amber-900">06 65 14 92 39</span>
                    </span>
                  </a>

                  <a
                    href="mailto:contact@votava-psychologue.fr"
                    className="card-interactive flex items-center gap-4 p-5"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100">
                      <Mail className="h-5 w-5 text-amber-800" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-stone-500">Email</span>
                      <span className="block break-all font-semibold text-amber-900">
                        contact@votava-psychologue.fr
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>

            <div className="mt-8">
              <TeenContact />
            </div>
          </div>
        </section>

        {/* Urgences et contacts utiles */}
        <section
          id="urgences"
          aria-labelledby="titre-urgences"
          className="section-fade bg-stone-100 py-24 md:py-32"
        >
          <div className="container">
            <header className="max-w-2xl">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-red-700">
                <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                Urgences
              </p>
              <h2 id="titre-urgences" className="mt-3 text-3xl md:text-4xl">
                Contacts utiles et numéros d'urgence
              </h2>
              <span className="rule mt-5 bg-red-300" aria-hidden="true" />
            </header>

            <div className="mt-12">
              <EmergencyContacts />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50">
        <div className="container py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-serif text-2xl text-amber-50">Valentine Votava</p>
              <p className="mt-2 text-sm text-amber-100/85">
                Psychologue clinicienne, Psychothérapeute
              </p>
              <p className="mt-6 text-sm text-amber-100/70">
                3 rue Claude Chappe
                <br />
                44470 Carquefou
              </p>
            </div>

            <nav aria-label="Liens de bas de page">
              <p className="font-serif text-lg text-amber-100">Le site</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#approche" className="text-amber-100/85 transition-colors hover:text-white">
                    Mon approche
                  </a>
                </li>
                <li>
                  <a href="#tarifs" className="text-amber-100/85 transition-colors hover:text-white">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-amber-100/85 transition-colors hover:text-white">
                    Questions fréquentes
                  </a>
                </li>
                <li>
                  <a href="#urgences" className="text-amber-100/85 transition-colors hover:text-white">
                    Urgences et contacts utiles
                  </a>
                </li>
                <li>
                  <a
                    href={BLOG_URL}
                    className="inline-flex items-center gap-1.5 text-amber-100/85 transition-colors hover:text-white"
                  >
                    Le blog
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <p className="font-serif text-lg text-amber-100">Me suivre</p>
              <div className="mt-4 flex items-center gap-3">
                {/* <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rejoindre le serveur Discord (nouvelle fenêtre)"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-800/70 text-amber-100 transition-colors hover:bg-amber-50 hover:text-amber-900"
                >
                  <DiscordIcon className="h-5 w-5" />
                </a> */}
                <a
                  href={PINTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir mes tableaux Pinterest (nouvelle fenêtre)"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-800/70 text-amber-100 transition-colors hover:bg-amber-50 hover:text-amber-900"
                >
                  <PinterestIcon className="h-5 w-5" />
                </a>
              </div>

              <a href="#contact" className="btn btn-sm mt-8 bg-amber-50 text-amber-900 hover:bg-white">
                Prendre rendez-vous
              </a>
            </div>
          </div>

          <p className="mt-14 border-t border-amber-800/70 pt-8 text-sm text-amber-100/70">
            © 2026 Valentine Votava — Psychologue clinicienne, Psychothérapeute — RPPS 10009489849
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
