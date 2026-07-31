import { ArrowDown, ArrowUp } from 'lucide-react';

const QUADRANTS = [
  { label: 'Actions engagées', tone: 'positive' },
  { label: 'Valeurs', tone: 'positive' },
  { label: 'Évitement', tone: 'difficult' },
  { label: 'Pensées, émotions, sensations difficiles', tone: 'difficult' },
] as const;

/**
 * La matrice ACT : ce vers quoi on avance (en haut) et ce que l'on cherche
 * à fuir (en bas), de part et d'autre d'un même axe.
 */
export function ActMatrix() {
  return (
    <figure className="my-2 rounded-2xl border border-amber-100 bg-amber-50/70 p-6">
      <div className="flex flex-col items-center gap-2">
        <p className="font-serif text-amber-900 text-center">Ce qui compte pour moi</p>
        <ArrowUp className="w-4 h-4 text-amber-700" aria-hidden="true" />
      </div>

      <div className="my-4 grid grid-cols-2 overflow-hidden rounded-xl border border-amber-200 bg-white">
        {QUADRANTS.map(({ label, tone }, index) => (
          <div
            key={label}
            className={`p-4 sm:p-6 text-center text-sm sm:text-base ${
              index % 2 === 0 ? 'border-r border-amber-200' : ''
            } ${index < 2 ? 'border-b border-amber-200' : ''} ${
              tone === 'positive' ? 'font-semibold text-amber-900' : 'text-stone-500'
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <ArrowDown className="h-4 w-4 text-stone-400" aria-hidden="true" />
        <figcaption className="text-center text-stone-500">Ce que j'essaie de fuir</figcaption>
      </div>
    </figure>
  );
}
