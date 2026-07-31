import { PinterestIcon } from './BrandIcons';
import { PINTEREST_URL } from '../../constants';

/**
 * Prolongement de la boîte à outils : les ressources partagées sur Pinterest.
 */
export function PinterestResources() {
  return (
    <div className="card mt-6 p-6 md:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <span
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100"
          aria-hidden="true"
        >
          <PinterestIcon className="h-6 w-6 text-amber-800" />
        </span>

        <div className="flex-1">
          <h3 className="text-xl">Des outils à emporter</h3>
          <p className="mt-2 text-stone-600">
            Je partage sur Pinterest des supports et des exercices à consulter librement, entre deux
            séances ou simplement par curiosité.
          </p>
        </div>

        <a
          href={PINTEREST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex-shrink-0 bg-[#E60023] text-white shadow-soft hover:bg-[#AD081B] hover:shadow-lift"
        >
          <PinterestIcon className="h-5 w-5" />
          Voir mes tableaux
        </a>
      </div>
    </div>
  );
}
