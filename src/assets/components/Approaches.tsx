import { AccordionItem } from './Accordion';
import { LifeLine } from './LifeLine';
import { ActMatrix } from './ActMatrix';
import { PinterestResources } from './PinterestResources';

const HYPNOSIS_STEPS = [
  {
    step: 'Définir un objectif',
    text: 'nous déterminons ensemble ce que vous souhaitez travailler.',
  },
  {
    step: "L'induction",
    text: 'je vous guide pour focaliser progressivement votre attention.',
  },
  {
    step: 'La transe hypnotique',
    text: "c'est un état naturel de conscience modifiée, dans lequel votre attention est davantage tournée vers votre monde intérieur tout en restant conscient de ce qui vous entoure.",
  },
  {
    step: 'Les suggestions thérapeutiques',
    text: "je propose des pistes de changement en lien avec votre objectif (par exemple retrouver un sentiment d'apaisement, de sécurité ou de confiance). Vous restez libre d'y adhérer ou non.",
  },
  {
    step: 'Le retour',
    text: "vous revenez progressivement à un état d'éveil habituel.",
  },
];

export function Approaches() {
  return (
    <>
      {/* Ma formation de base — mise en page éditoriale, titre à gauche, texte à droite */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Ma formation de base</p>
            <h3 className="mt-3 text-2xl md:text-3xl">La psychothérapie</h3>
            <span className="rule mt-5" aria-hidden="true" />
            <p className="mt-6 text-stone-600">
              Un espace de parole, d'écoute et de réflexion, où vous avancez à votre rythme dans un
              cadre confidentiel.
            </p>
          </div>
        </div>

        <div className="space-y-5 text-stone-600 lg:col-span-7">
          <p>
            La psychothérapie est un accompagnement qui vise à mieux comprendre les difficultés que
            vous rencontrez, à apaiser votre souffrance et à retrouver un meilleur équilibre au
            quotidien. C'est un espace de parole, d'écoute et de réflexion, où vous pouvez avancer à
            votre rythme dans un cadre confidentiel et bienveillant.
          </p>
          <p>
            Contrairement aux idées reçues, consulter un psychologue ne signifie pas être
            «&nbsp;faible&nbsp;» ou «&nbsp;fou&nbsp;». Il est possible d'entreprendre une
            psychothérapie pour traverser une période difficile, mieux se connaître, faire face à un
            changement de vie ou traiter une souffrance psychique plus installée.
          </p>
          <p>
            Chaque psychothérapie est unique. Les objectifs sont définis ensemble et évoluent au fil
            des séances en fonction de vos besoins. Selon votre situation, j'utilise différentes
            approches thérapeutiques (psychothérapie intégrative, ACT, hypnose thérapeutique, ICV…)
            afin de vous proposer un accompagnement personnalisé.
          </p>
          <p>
            La durée d'une psychothérapie varie d'une personne à l'autre. Certaines difficultés
            peuvent être travaillées en quelques séances, tandis que d'autres nécessitent un
            accompagnement plus long. L'objectif est de vous aider à retrouver progressivement une
            plus grande autonomie.
          </p>
        </div>
      </div>

      {/* Ma boîte à outils */}
      <div className="mt-24 border-t border-amber-200/70 pt-16">
        <div className="max-w-2xl">
          <p className="eyebrow">Ma boîte à outils</p>
          <h3 className="mt-3 text-2xl md:text-3xl">Trois méthodes complémentaires</h3>
          <span className="rule mt-5" aria-hidden="true" />
          <p className="mt-6 text-stone-600">
            Je les mobilise selon votre situation et vos objectifs, toujours à l'intérieur d'une
            démarche psychothérapeutique.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <AccordionItem
            title="ICV — Intégration du Cycle de la Vie"
            subtitle="Traumatismes, difficultés d'attachement, souffrances émotionnelles"
          >
            <p>
              L'Intégration du Cycle de la Vie (ICV) est une méthode thérapeutique développée par
              Peggy Pace. Elle s'appuie sur les connaissances actuelles des neurosciences et est
              particulièrement indiquée dans la prise en charge des traumatismes, des difficultés
              d'attachement et de certaines souffrances émotionnelles.
            </p>
            <p>
              L'ICV repose sur la construction d'une ligne de vie, élaborée ensemble à partir de vos
              souvenirs, des premiers événements dont vous vous souvenez jusqu'à aujourd'hui. Au fil
              des séances, cette ligne de vie est relue afin d'aider le cerveau à intégrer que les
              événements douloureux appartiennent au passé et que le temps a continué à s'écouler.
            </p>

            <LifeLine />

            <p>
              Ce travail favorise la mise en lien de différents souvenirs, leur intégration et un
              apaisement progressif des réactions émotionnelles et corporelles qui peuvent rester
              présentes après un traumatisme.
            </p>
            <p>
              Une séance d'ICV dure généralement entre 1 heure et 1 heure 30, selon l'objectif
              thérapeutique. Contrairement à d'autres formes de psychothérapie, les échanges sont
              souvent plus brefs : le thérapeute guide la séance, tandis que le travail
              d'intégration se fait principalement au travers de la ligne de vie et de votre
              expérience intérieure.
            </p>
          </AccordionItem>

          <AccordionItem title="Hypnose thérapeutique" subtitle="Anxiété, douleurs, phobies, stress">
            <p>
              L'hypnose thérapeutique est un outil qui peut être utilisé dans l'accompagnement de
              nombreuses problématiques, comme l'anxiété, certaines douleurs, les phobies, le stress
              ou d'autres difficultés émotionnelles. Elle est toujours intégrée à une démarche
              psychothérapeutique et adaptée à votre objectif.
            </p>

            <p className="font-semibold text-amber-900">
              Une séance d'hypnose se déroule généralement en plusieurs étapes :
            </p>
            <ol className="list-none space-y-4">
              {HYPNOSIS_STEPS.map(({ step, text }, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span>
                    <strong className="font-semibold text-amber-900">{step}</strong> : {text}
                  </span>
                </li>
              ))}
            </ol>

            <p className="rounded-xl border border-amber-100 bg-amber-50/70 p-4">
              Contrairement aux idées reçues, <strong>vous ne perdez jamais le contrôle</strong>{' '}
              pendant une séance d'hypnose. Vous restez conscient de ce qui se passe, libre de
              parler, de bouger ou d'interrompre la séance si vous le souhaitez.
            </p>
            <p>
              L'efficacité de l'hypnose repose avant tout sur une relation de confiance entre le
              patient et le thérapeute, ainsi que sur une méthode adaptée à vos besoins. L'hypnose
              thérapeutique est très différente de l'hypnose de spectacle : son objectif est
              exclusivement le soin et le mieux-être.
            </p>
          </AccordionItem>

          <AccordionItem
            title="ACT — Thérapie d'Acceptation et d'Engagement"
            subtitle="Flexibilité psychologique, valeurs, pleine conscience"
          >
            <p>
              L'ACT (Acceptance and Commitment Therapy) est une approche issue des thérapies
              cognitivo-comportementales (TCC) de troisième vague. Elle repose sur l'idée que la
              souffrance fait naturellement partie de la vie et que chercher à éviter ou à contrôler
              systématiquement les émotions difficiles peut parfois les renforcer.
            </p>
            <p>
              L'objectif de l'ACT n'est donc pas de supprimer les pensées ou les émotions
              désagréables, mais d'apprendre à les accueillir avec davantage de souplesse. Cette
              approche permet de développer une plus grande flexibilité psychologique, afin de ne
              plus laisser nos peurs ou nos pensées diriger nos choix.
            </p>

            <p className="rounded-r-xl border-l-2 border-amber-400 bg-amber-50/70 py-3 pl-5 pr-4 italic">
              Par exemple, si une personne est mordue par un chien, elle peut en venir à penser que
              tous les chiens sont dangereux et commencer à les éviter systématiquement. L'ACT ne
              cherche pas à convaincre cette personne que cette pensée est fausse, mais à l'aider à
              prendre du recul par rapport à celle-ci afin qu'elle ne limite plus sa vie.
            </p>

            <ActMatrix />

            <p>
              Cette thérapie s'appuie notamment sur la pleine conscience, l'identification de vos
              valeurs et la mise en place d'actions engagées. En apprenant à mieux comprendre ce qui
              est important pour vous, vous pouvez avancer vers une vie plus riche de sens, même en
              présence d'émotions ou de pensées difficiles.
            </p>
          </AccordionItem>
        </div>

        <PinterestResources />
      </div>
    </>
  );
}
