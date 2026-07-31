import { PinterestIcon } from './BrandIcons';
import { PINTEREST_URL } from '../../constants';

/**
 * Prolongement de la boîte à outils : les ressources partagées sur Pinterest.
 */
export function PinterestResources() {
  return (
    <div className="mt-10 bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <span
          className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center"
          aria-hidden="true"
        >
          <PinterestIcon className="w-6 h-6 text-amber-700" />
        </span>

        <div className="flex-1">
          <h4 className="font-serif text-xl text-amber-900">Des outils à emporter</h4>
          <p className="mt-2 text-neutral-700">
            Je partage sur Pinterest des supports et des exercices à consulter librement, entre
            deux séances ou simplement par curiosité.
          </p>
        </div>

        <a
          href={PINTEREST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#E60023] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#AD081B]"
        >
          <PinterestIcon className="w-5 h-5" />
          Voir mes tableaux
        </a>
      </div>
    </div>
  );
}
