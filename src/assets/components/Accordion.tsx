import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  /** Petite mention affichée sous le titre, dans la barre repliée */
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/**
 * Bloc dépliable autonome : chaque item gère son propre état, plusieurs
 * peuvent donc rester ouverts en même temps.
 */
export function AccordionItem({ title, subtitle, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="w-full flex items-start justify-between gap-4 text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-inset"
        >
          <span>
            <span className="block font-serif text-lg md:text-xl text-amber-900">{title}</span>
            {subtitle && <span className="block mt-1 text-sm text-neutral-500">{subtitle}</span>}
          </span>
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 mt-1 text-amber-700 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="px-6 pb-6 -mt-1 space-y-4 text-neutral-700"
        >
          {children}
        </div>
      )}
    </div>
  );
}
