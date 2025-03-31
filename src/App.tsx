import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Clock, CreditCard, Banknote } from 'lucide-react';
import { ImageCarousel } from './assets/components/ImageCarousel';
import photo from './assets/images/Moi.jpeg';
import cabinet1 from './assets/images/cabinet/cabinet1.jpeg';
import cabinet2 from './assets/images/cabinet/cabinet2.jpeg';
import cabinet3 from './assets/images/cabinet/cabinet3.jpeg';
import cabinet4 from './assets/images/cabinet/cabinet4.jpeg';
import cabinet5 from './assets/images/cabinet/cabinet5.jpeg';
import doctolib from './assets/images/banniere_linkedin_psychologue.jpg';
import logo from './assets/images/logo.png';
import psi from './assets/images/psi.png';
import { ContactForm } from './assets/components/ContactForm';

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
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif text-amber-900">Valentine VOTAVA</h1>
              <img
                src={psi}
                alt="Symbôle Psi"
                className="w-[25px] h-[25px] object-cover ml-3"
              />
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#accueil" className={`nav-link ${activeSection === 'accueil' ? 'text-amber-800' : ''}`}>Accueil</a>
              <a href="#presentation" className={`nav-link ${activeSection === 'presentation' ? 'text-amber-800' : ''}`}>Qui suis-je</a>
              <a href="#tarifs" className={`nav-link ${activeSection === 'tarifs' ? 'text-amber-800' : ''}`}>Tarifs</a>
              <a href="#cabinet" className={`nav-link ${activeSection === 'cabinet' ? 'text-amber-800' : ''}`}>Le Cabinet</a>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'text-amber-800' : ''}`}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

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
                  Actuellement, je fais partie du projet Cab’Atypique, qui soutient les familles face aux complexités des troubles du neurodéveloppement. En parallèle, je poursuis des formations en psychotrauma, en autisme, ainsi qu’en santé naturelle, pour explorer des alternatives et enrichir ma pratique clinique. Je conçois et mets en place des projets innovants, tels que la thérapie par le jeu vidéo ou la création d'une association pour favoriser le lien social en ligne aux divers besoins de mes patients.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif text-amber-900 mb-4">Formation</h3>
                  <ul className="space-y-3">
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

        {/* Tarifs */}
        <section id="tarifs" className="section-fade py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Tarifs des Consultations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Première consultation</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2">55€</p>
                <p className="text-neutral-600">Consultation initiale pour adultes</p>
              </div>
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Consultation de suivi</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2">50€</p>
                <p className="text-neutral-600">Consultations régulières pour adultes</p>
              </div>
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Enfant / Adolescent</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2">60€</p>
                <p className="text-neutral-600">Première consultation</p>
              </div>
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Enfant / Adolescent - Suivi</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2">55€</p>
                <p className="text-neutral-600">Consultations de suivi</p>
              </div>
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Tarif étudiant / Faibles revenus</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2">40€</p>
                <p className="text-neutral-600">Sur présentation d'un justificatif</p>
              </div>
              <div className="price-card">
                <h3 className="text-xl text-amber-800 mb-3">Tarif solidaire</h3>
                <p className="text-3xl font-semibold text-amber-900 mb-2"></p>
                <p className="text-neutral-600">Pour les personnes en situation de grande précarité financière (bénéficiaires de minima sociaux
                  comme le RSA, l'ASS ou autres aides sociales)</p>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-amber-800 mb-4">Téléconsultation</h3>
              <p className="text-neutral-700 mb-4">
                Les téléconsultations sont possibles.
              </p>
              <h3 className="text-xl text-amber-800 mb-4">Remboursements</h3>
                <p className="text-neutral-700 mb-4">
                  Consultation non remboursée par l'Assurance Maladie
                </p>
              <div className="flex items-center space-x-8 mt-6 pt-6 border-t border-amber-100">
                <h4 className="text-lg text-amber-800">Moyens de paiement acceptés:</h4>
                <div className="flex space-x-4">
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
        <section id="cabinet" className="section-fade py-20 bg-white">
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
                    <p className="text-neutral-700">Lundi - Vendredi: 9h00 - 19h00</p>
                  </div>
                  <p className="text-neutral-600 mt-6">
                    Dans un cadre calme et chaleureux, conçu pour favoriser l’écoute et la détente, je vous accueillerai avec le sourire. Petite précision : le cabinet se trouve à l'étage, sans ascenseur, mais les escaliers sont accessibles !
                  </p>
                </div>
              </div>
              <ImageCarousel images={cabinetImages} />
            </div>
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
                    <p className="text-neutral-700">06 65 14 92 39</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-amber-700 mr-3" />
                    <p className="text-neutral-700">contact@votava-psychologue.fr</p>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center">© 2024 Valentine VOTAVA - Psychologue Clinicienne - Psychothérapeute - RPPS 10009489849</p>
        </div>
      </footer>
    </div>
  );
}

export default App;