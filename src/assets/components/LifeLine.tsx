const STEPS = ['Naissance', 'Enfance', 'Adolescence', 'Adulte', "Aujourd'hui"];

const dotClass = (isLast: boolean) =>
  `w-4 h-4 flex-shrink-0 rounded-full border-2 border-amber-600 ${
    isLast ? 'bg-amber-600' : 'bg-amber-50'
  }`;

const labelClass = (isLast: boolean) =>
  isLast ? 'font-semibold text-amber-900' : 'text-neutral-600';

/**
 * Illustration de la ligne de vie utilisée en ICV.
 * Le dernier repère est plein : c'est le point d'arrivée, le présent.
 *
 * Deux mises en page : verticale sur mobile, où cinq libellés côte à côte
 * seraient illisibles, et horizontale dès qu'il y a la place.
 */
export function LifeLine() {
  const halfColumn = 100 / STEPS.length / 2;

  return (
    <figure className="bg-amber-50 rounded-lg p-6 my-2">
      <figcaption className="text-sm font-semibold text-amber-800 mb-6">
        Exemple d'une ligne de vie
      </figcaption>

      {/* Mobile : déroulé vertical */}
      <ol className="sm:hidden relative list-none m-0 p-0 ml-[7px] border-l-2 border-amber-300">
        {STEPS.map((step, index) => (
          <li key={step} className="flex items-center gap-4 py-2 -ml-[9px] first:pt-0 last:pb-0">
            <span className={dotClass(index === STEPS.length - 1)} aria-hidden="true" />
            <span className={`text-sm ${labelClass(index === STEPS.length - 1)}`}>{step}</span>
          </li>
        ))}
      </ol>

      {/* À partir de sm : déroulé horizontal */}
      <div className="hidden sm:block relative">
        <div
          className="absolute top-[7px] h-0.5 bg-amber-300"
          style={{ left: `${halfColumn}%`, right: `${halfColumn}%` }}
          aria-hidden="true"
        />

        <ol className="relative flex list-none m-0 p-0">
          {STEPS.map((step, index) => (
            <li key={step} className="flex-1 flex flex-col items-center min-w-0">
              <span className={dotClass(index === STEPS.length - 1)} aria-hidden="true" />
              <span
                className={`mt-3 px-1 text-center text-xs md:text-sm leading-tight ${labelClass(
                  index === STEPS.length - 1
                )}`}
              >
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
