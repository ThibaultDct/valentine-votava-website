import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Clock, CreditCard, Banknote, ExternalLink, AlertTriangle } from 'lucide-react';
import { ImageCarousel } from './assets/components/ImageCarousel';
import photo from './assets/images/Moi.jpeg';
import cabinet1 from './assets/images/cabinet/cabinet1.jpeg';
import cabinet2 from './assets/images/cabinet/cabinet2.jpeg';
import cabinet4 from './assets/images/cabinet/cabinet4.jpeg';
import cabinet5 from './assets/images/cabinet/cabinet5.jpeg';
import doctolib from './assets/images/banniere_linkedin_psychologue.jpg';
import { ContactForm } from './assets/components/ContactForm';
import { Navigation } from './assets/components/Navigation';
import { DiscordIcon, PinterestIcon } from './assets/components/BrandIcons';
import { BLOG_URL, DISCORD_INVITE_URL, PINTEREST_URL } from './constants';
import { Approaches } from './assets/components/Approaches';
import { Faq } from './assets/components/Faq';
import { TeenContact } from './assets/components/TeenContact';
import { EmergencyContacts } from './assets/components/EmergencyContacts';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const cabinetImages = [cabinet1, cabinet2, cabinet4, cabinet5, doctolib];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation activeSection={activeSection} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="accueil" className="section-fade min-h-[80vh] flex items-center bg-[url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="container mx-auto px-4 py-20 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg mx-4">
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Valentine VOTAVA</h1>
            <p className="text-xl text-amber-800 mb-8">Psychologue clinicienne, Psychothérapeute</p>
            <p className="text-lg text-neutral-700 max-w-2xl">
            Un espace d’écoute bienveillant et humain, où enfants, adolescents et adultes peuvent explorer leurs émotions et leur histoire. Une approche centrée sur la compréhension et le lien, pour avancer ensemble en toute authenticité.
            </p>
          </div>
        </section>

        {/* Présentation */}
        <section id="presentation" className="section-fade py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Qui suis-je ?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-neutral-700 mb-6">
                  Forte d’une expérience en libéral et dans l’accompagnement éducatif et social, je m’engage auprès des enfants, adolescents et adultes dans un cadre thérapeutique bienveillant et authentique. Mon parcours m’a permis de travailler avec des familles, des demandeurs d’emploi et des publics confrontés à des défis variés, notamment le handicap, les troubles anxieux, les troubles du neurodéveloppement ou encore les traumatismes psychiques.
                </p>
                <p className="text-neutral-700 mb-6">
                  Je poursuis des formations en psychotrauma, en autisme, ainsi qu’en santé naturelle, pour explorer des alternatives et enrichir ma pratique clinique. Je conçois et mets en place des projets innovants, tels que la thérapie par le jeu vidéo ou la création d'une association pour favoriser le lien social en ligne aux divers besoins de mes patients.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-amber-900 mb-4">Formation</h3>
                  <ul className="space-y-3">
                  <li className="flex items-start w-30">
                      <span className="text-amber-700 font-semibold">2026</span>
                      <p className="ml-4">
                      Inceste et abus sexuels - Formationspsy</p>
                    </li>
                    <li className="flex items-start w-30">
                      <span className="text-amber-700 font-semibold">2025</span>
                      <p className="ml-4">
                      Théorie polyvagale - Double Hélice</p>
                    </li>
                    <li className="flex items-start w-30">
                      <span className="text-amber-700 font-semibold">2025</span>
                      <p className="ml-4">
                      Psychotraumatologie : diagnostic, accompagnement, orientation - Double Hélice</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-700 font-semibold">2021</span>
                      <p className="ml-4">Master en psychologie: psychopathologie clinique du lien social et familial - Université d'Angers</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-700 font-semibold">2019</span>
                      <p className="ml-4">Licence de psychologie - Université d'Angers</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src={photo}
                  alt="Cabinet de consultation"
                  className="w-full h-[650px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mon approche */}
        <section id="approche" className="section-fade py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-amber-900 mb-4 text-center">Mon approche</h2>
            <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-16">
              Chaque accompagnement est construit sur mesure. Voici la façon dont je travaille et
              les méthodes sur lesquelles je m'appuie.
            </p>
            <Approaches />
          </div>
        </section>

        {/* Tarifs */}
        <section id="tarifs" className="section-fade py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Tarifs des Consultations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Consultation</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2">70€</p>
                <p className="text-neutral-600">Consultations régulières pour enfants et adultes</p>
              </div>
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Tarif étudiant</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2">50€</p>
                <p className="text-neutral-600">Sur présentation d'un justificatif</p>
              </div>
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Tarif solidaire</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2"></p>
                <p className="text-neutral-600">Pour les personnes en situation de grande précarité financière (bénéficiaires de minima sociaux
                  comme le RSA, l'ASS ou autres aides sociales)</p>
              </div>
            </div>
            <div className="mt-8 bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl text-amber-800 mb-4">Téléconsultation</h3>
              <p className="text-neutral-700 mb-4">
                Les téléconsultations sont possibles.
              </p>
              <h3 className="text-xl text-amber-800 mb-4">Remboursements</h3>
                <p className="text-neutral-700 mb-4">
                  Consultation non remboursée par l'Assurance Maladie. Je ne fais pas partie du
                  dispositif Mon soutien psy, mais certaines mutuelles peuvent prendre une partie
                  de la séance en charge sur présentation de la facture.
                </p>
              <h3 className="text-xl text-amber-800 mb-4">Annulation et report</h3>
                <p className="text-neutral-700 mb-4">
                  Toute annulation ou demande de report doit être effectuée au moins 48 heures avant
                  l'heure prévue de la séance. À défaut, la séance sera facturée dans son
                  intégralité, sauf en cas de force majeure.
                </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-6 pt-6 border-t border-amber-200">
                <h4 className="text-lg text-amber-800">Moyens de paiement acceptés:</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-neutral-700">
                    <CreditCard className="w-5 h-5 mr-2" />
                    <span>Carte bancaire</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <Banknote className="w-5 h-5 mr-2" />
                    <span>Espèces</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    <span>Chèque</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Cabinet */}
        <section id="cabinet" className="section-fade py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Le Cabinet</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="text-amber-700 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">3 rue Claude Chappe, 44470 CARQUEFOU</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-amber-700 mr-3 flex-shrink-0" />
                    <p className="text-neutral-700">Mardi - Vendredi: 9h00 - 19h30</p>
                  </div>
                  <p className="text-neutral-600 mt-6">
                    Dans un cadre calme et chaleureux, conçu pour favoriser l’écoute et la détente, je vous accueillerai avec le sourire. Petite précision : le cabinet se trouve à l'étage, sans ascenseur, mais les escaliers sont accessibles !
                  </p>
                  <p className="text-neutral-600">
                    Le cabinet dispose d'un parking : vous pouvez vous garer sur les places
                    «&nbsp;Cab'Atypique&nbsp;».
                  </p>
                </div>
              </div>
              <ImageCarousel images={cabinetImages} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-fade py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-amber-900 mb-4 text-center">Questions fréquentes</h2>
            <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
              Les questions qui reviennent le plus souvent avant un premier rendez-vous.
            </p>
            <Faq />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-fade py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Contact</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-neutral-700 mb-8">
                  Pour prendre rendez-vous ou pour toute information complémentaire,
                  n'hésitez pas à me contacter:
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="text-amber-700 mr-3" />
                    <a href="tel:0665149239" className="text-neutral-700 hover:text-amber-800 transition-colors">06 65 14 92 39</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-amber-700 mr-3" />
                    <a href="mailto:contact@votava-psychologue.fr" className="text-neutral-700 hover:text-amber-800 transition-colors">contact@votava-psychologue.fr</a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <TeenContact />
            </div>
          </div>
        </section>

        {/* Urgences et contacts utiles */}
        <section id="urgences" className="section-fade py-20 bg-neutral-100">
          <div className="container mx-auto px-4">
            <h2 className="flex items-center justify-center gap-3 text-3xl font-serif text-amber-900 mb-10 text-center">
              <AlertTriangle className="w-7 h-7 text-red-600 flex-shrink-0" aria-hidden="true" />
              Urgences et contacts utiles
            </h2>
            <EmergencyContacts />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-serif text-lg">Valentine VOTAVA</p>
              <p className="text-sm text-amber-200">Psychologue clinicienne, Psychothérapeute</p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <nav aria-label="Liens de bas de page" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href={BLOG_URL} className="flex items-center gap-1.5 text-amber-100 underline underline-offset-2 hover:text-white">
                  Blog
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a href="#faq" className="text-amber-100 underline underline-offset-2 hover:text-white">
                  Questions fréquentes
                </a>
                <a href="#urgences" className="text-amber-100 underline underline-offset-2 hover:text-white">
                  Urgences et contacts utiles
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rejoindre le serveur Discord (nouvelle fenêtre)"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-800 text-amber-100 transition-colors hover:bg-amber-50 hover:text-amber-900"
                >
                  <DiscordIcon className="w-5 h-5" />
                </a>
                <a
                  href={PINTEREST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir mes tableaux Pinterest (nouvelle fenêtre)"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-800 text-amber-100 transition-colors hover:bg-amber-50 hover:text-amber-900"
                >
                  <PinterestIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 pt-6 border-t border-amber-800 text-center text-sm text-amber-200">
            © 2024 Valentine VOTAVA - Psychologue Clinicienne - Psychothérapeute - RPPS 10009489849
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
