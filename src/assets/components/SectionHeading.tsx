interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Identifiant du <h2>, à référencer via aria-labelledby sur la section */
  id?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, lead, id, align = 'left' }: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <header className={isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>

      <h2 id={id} className="mt-3 text-3xl md:text-4xl">
        {title}
      </h2>

      <span className={`rule mt-5 ${isCentered ? 'mx-auto' : ''}`} aria-hidden="true" />

      {lead && <p className="mt-6 text-lg text-stone-600">{lead}</p>}
    </header>
  );
}
