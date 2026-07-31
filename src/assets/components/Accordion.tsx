import React, { useId, useState } from 'react';
import { Plus } from 'lucide-react';

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
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        isOpen ? 'border-amber-200 shadow-lift' : 'border-amber-100 shadow-soft hover:border-amber-200'
      }`}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="group flex w-full items-center justify-between gap-5 p-6 text-left md:p-7"
        >
          <span>
            <span className="block font-serif text-lg text-amber-900 md:text-xl">{title}</span>
            {subtitle && <span className="mt-1.5 block text-sm text-stone-500">{subtitle}</span>}
          </span>

          <span
            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? 'rotate-45 bg-amber-800 text-amber-50'
                : 'bg-amber-100 text-amber-800 group-hover:bg-amber-200'
            }`}
            aria-hidden="true"
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="animate-fade-up space-y-5 px-6 pb-7 md:px-7"
        >
          <span className="mb-6 block h-px bg-amber-100" aria-hidden="true" />
          {children}
        </div>
      )}
    </div>
  );
}
