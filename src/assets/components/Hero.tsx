import { ArrowRight, Clock, MapPin } from 'lucide-react';

/**
 * Héros typographique : pas de photo de banque d'images, le texte porte seul.
 * Le filigrane Psi et le dégradé chaud suffisent à habiller le bloc.
 */
export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="titre-accueil"
      className="relative overflow-hidden border-b border-amber-100 bg-gradient-to-b from-white via-amber-50 to-amber-50"
    >
      <span
        className="psi-watermark pointer-events-none absolute -right-16 -top-24 hidden md:block"
        aria-hidden="true"
      />

      <div className="container relative py-24 md:py-36">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow">Psychologue clinicienne · Psychothérapeute</p>

          <h1 id="titre-accueil" className="mt-6 text-5xl md:text-7xl">
            Valentine Votava
          </h1>

          <span className="rule mt-8" aria-hidden="true" />

          <p className="mt-8 max-w-prose text-xl leading-relaxed text-stone-600 md:text-2xl">
            Un espace d'écoute bienveillant et humain, où enfants, adolescents et adultes peuvent
            explorer leurs émotions et leur histoire.
          </p>

          <p className="mt-5 max-w-prose text-stone-600">
            Une approche centrée sur la compréhension et le lien, pour avancer ensemble en toute
            authenticité.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary">
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#approche" className="btn btn-secondary">
              Découvrir mon approche
            </a>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-amber-200/70 pt-8 text-sm">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 flex-shrink-0 text-amber-700" aria-hidden="true" />
              <dt className="sr-only">Adresse</dt>
              <dd className="text-stone-600">3 rue Claude Chappe, Carquefou</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 flex-shrink-0 text-amber-700" aria-hidden="true" />
              <dt className="sr-only">Horaires</dt>
              <dd className="text-stone-600">Mardi au vendredi, 9h – 19h30</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
