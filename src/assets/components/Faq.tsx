import { AccordionItem } from './Accordion';

const PSYCHOLOGIST_TYPES = [
  {
    name: 'Psychologue du travail',
    description:
      'Accompagne les difficultés liées au travail, comme le stress, le burn-out, le harcèlement ou la reconversion professionnelle.',
  },
  {
    name: 'Psychologue neuropsychologue',
    description:
      "Évalue et accompagne les difficultés des fonctions cognitives (mémoire, attention, langage…), ainsi que les personnes présentant une neuroatypie, comme un TDAH, un TSA ou d'autres troubles du neurodéveloppement.",
  },
  {
    name: 'Psychanalyste',
    description:
      "Propose un travail d'exploration de l'inconscient et des expériences passées pour mieux comprendre les difficultés actuelles.",
  },
  {
    name: 'Thérapie cognitivo-comportementale',
    description:
      'Aide à modifier les pensées et les comportements qui entretiennent la souffrance psychologique, avec des objectifs concrets.',
  },
  {
    name: 'Psychothérapeute',
    description:
      "Accompagne les difficultés psychologiques à l'aide de méthodes thérapeutiques adaptées à chaque personne.",
  },
];

const FIRST_CONSULTATION = [
  {
    audience: 'Adultes',
    text: "La première consultation est un temps d'échange où vous pouvez expliquer ce qui vous amène. Cet entretien me permet de faire votre connaissance, de comprendre votre situation et de définir ensemble vos besoins.",
  },
  {
    audience: 'Adolescents',
    text: "Je reçois généralement les parents et l'adolescent ensemble au début de la consultation, puis je réserve un temps d'échange avec l'adolescent seul afin de comprendre la demande de chacun. Si la situation le nécessite, l'adolescent peut être reçu seul dès le premier rendez-vous. Les séances suivantes se déroulent avec l'adolescent, avec des temps d'échange réguliers avec les parents si besoin.",
  },
  {
    audience: 'Enfants',
    text: "Je reçois d'abord les parents et l'enfant ensemble afin de comprendre les difficultés rencontrées, puis je réserve un temps pour l'enfant seul. Les séances suivantes se déroulent principalement avec l'enfant, tout en maintenant des échanges réguliers avec les parents. Si l'enfant en a besoin, sa prise en charge s'adapte à son rythme.",
  },
];

export function Faq() {
  return (
    <div className="space-y-4">
      <AccordionItem title="Comment se passe une première consultation de psychologie ?">
        <dl className="space-y-4">
          {FIRST_CONSULTATION.map(({ audience, text }) => (
            <div key={audience}>
              <dt className="font-semibold text-amber-900">{audience}</dt>
              <dd className="mt-1">{text}</dd>
            </div>
          ))}
        </dl>
      </AccordionItem>

      <AccordionItem title="Comment savoir de quel psychologue j'ai besoin ?">
        <dl className="space-y-4">
          {PSYCHOLOGIST_TYPES.map(({ name, description }) => (
            <div key={name}>
              <dt className="font-semibold text-amber-900">{name}</dt>
              <dd className="mt-1">{description}</dd>
            </div>
          ))}
        </dl>
      </AccordionItem>

      <AccordionItem title="À quelle fréquence a-t-on besoin de venir en consultation ?">
        <p>
          Il n'existe pas de fréquence idéale. Celle-ci est définie ensemble en fonction de vos
          besoins, de vos objectifs et de votre situation. Certaines personnes bénéficient d'un
          suivi hebdomadaire, tandis que d'autres préfèrent espacer davantage les séances.
        </p>
        <p>
          La psychothérapie demande également un temps d'intégration : entre deux rendez-vous, les
          réflexions, les émotions et les changements amorcés en séance continuent souvent leur
          chemin. Nous adapterons donc le rythme de l'accompagnement afin qu'il corresponde à votre
          temps psychique et à vos besoins, sans imposer une fréquence systématique.
        </p>
      </AccordionItem>

      <AccordionItem title="Est-ce qu'il y a des tarifs réduits ?">
        <p>
          Oui, principalement pour les étudiants : 50&nbsp;€ au lieu de 70&nbsp;€, sur présentation
          d'un justificatif. Un tarif solidaire existe également pour les personnes en situation de
          grande précarité financière.
        </p>
      </AccordionItem>

      <AccordionItem title="Les séances peuvent-elles être prises en charge ?">
        <p>
          Je ne fais pas partie du dispositif Mon soutien psy. Les consultations ne peuvent donc pas
          être prises en charge dans ce cadre. Cependant, certaines mutuelles peuvent en prendre une
          partie en charge : il faut leur envoyer la facture et vous renseigner directement auprès
          d'elles.
        </p>
      </AccordionItem>

      <AccordionItem title="Où est-ce que je me gare ?">
        <p>
          Le cabinet dispose d'un parking. Vous pouvez vous garer sur les places
          «&nbsp;Cab'Atypique&nbsp;».
        </p>
      </AccordionItem>

      <AccordionItem title="Quelle est la politique d'annulation et de report ?">
        <p>
          Toute annulation ou demande de report de rendez-vous doit être effectuée{' '}
          <strong>au moins 48 heures avant</strong> l'heure prévue de la séance. À défaut, la séance
          sera facturée dans son intégralité, sauf en cas de force majeure.
        </p>
      </AccordionItem>

      <AccordionItem title="Comment vérifier les qualifications d'un professionnel ?">
        <p>
          Le titre de psychologue est un titre réglementé et protégé par la loi. Pour l'utiliser, le
          professionnel doit être titulaire d'un diplôme reconnu par l'État et être enregistré
          auprès des autorités compétentes. Il dispose d'un numéro RPPS (anciennement numéro
          ADELI), que vous pouvez lui demander ou vérifier dans l'{' '}
          <a
            href="https://annuairesante.ameli.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 underline underline-offset-2 hover:text-amber-900"
          >
            Annuaire Santé
          </a>
          .
        </p>
        <p>
          En revanche, des appellations telles que thérapeute, psychopraticien, psychopédagogue,
          praticien en relation d'aide, coach de vie ou d'autres intitulés similaires ne
          correspondent pas, à elles seules, à un titre reconnu ou réglementé par l'État. Elles ne
          garantissent donc ni un niveau de formation universitaire en psychologie, ni un cadre
          légal d'exercice.
        </p>
      </AccordionItem>
    </div>
  );
}
