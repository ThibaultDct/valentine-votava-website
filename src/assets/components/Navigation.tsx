import { useEffect, useState } from 'react';
import { Menu, X, ExternalLink, AlertTriangle } from 'lucide-react';
import psi from '../images/psi.png';
import { BLOG_URL, NAV_ITEMS } from '../../constants';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fermer le menu à la touche Échap, et empêcher le défilement de l'arrière-plan
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#accueil" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-xl sm:text-2xl font-serif text-amber-900 whitespace-nowrap">Valentine VOTAVA</h1>
            <img src={psi} alt="Symbôle Psi" className="w-[25px] h-[25px] object-cover ml-3" />
          </a>

          {/* Navigation large écran */}
          <div className="hidden xl:flex items-center">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link !px-2.5 text-sm whitespace-nowrap ${activeSection === id ? 'text-amber-800' : ''}`}
              >
                {label}
              </a>
            ))}

            <span className="mx-2 h-5 w-px bg-amber-200" aria-hidden="true" />

            <a
              href="#urgences"
              className="flex items-center gap-1.5 px-2.5 py-2 text-sm text-red-700 hover:text-red-800 transition-colors whitespace-nowrap"
            >
              <AlertTriangle className="w-4 h-4" aria-hidden="true" />
              Urgences
            </a>

            <a
              href={BLOG_URL}
              className="ml-2 flex items-center gap-1.5 rounded-full border border-amber-700 px-4 py-1.5 text-sm text-amber-800 hover:bg-amber-700 hover:text-white transition-colors whitespace-nowrap"
            >
              Blog
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Bouton menu petit écran */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="xl:hidden p-2 -mr-2 text-amber-900 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Panneau de navigation petit écran */}
      {isMenuOpen && (
        <div
          id="menu-mobile"
          className="xl:hidden border-t border-amber-100 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 transition-colors hover:bg-amber-50 ${
                      activeSection === id ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-neutral-700'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#urgences"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-red-700 transition-colors hover:bg-red-50"
                >
                  <AlertTriangle className="w-4 h-4" aria-hidden="true" />
                  Urgences et contacts utiles
                </a>
              </li>
            </ul>

            <a
              href={BLOG_URL}
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-amber-700 px-4 py-3 text-amber-800 transition-colors hover:bg-amber-700 hover:text-white"
            >
              Blog
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
