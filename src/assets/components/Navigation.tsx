import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, AlertTriangle } from 'lucide-react';
import psi from '../images/psi.png';
import { BLOG_URL, NAV_ITEMS } from '../../constants';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // La barre ne se détache du fond qu'une fois le défilement amorcé
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-b border-amber-100 bg-amber-50/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a
            href="#accueil"
            className="flex items-center gap-3 rounded-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={psi} alt="" className="h-6 w-6 object-contain" aria-hidden="true" />
            <span className="whitespace-nowrap font-serif text-lg text-amber-900 sm:text-xl">
              Valentine Votava
            </span>
          </a>

          {/* Navigation large écran */}
          <div className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link text-sm whitespace-nowrap ${
                  activeSection === id ? 'nav-link-active' : ''
                }`}
              >
                {label}
              </a>
            ))}

            <span className="mx-2 h-5 w-px bg-amber-200" aria-hidden="true" />

            <a
              href="#urgences"
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-sm text-red-700 transition-colors hover:bg-red-50"
            >
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Urgences
            </a>

            <a href={BLOG_URL} className="btn btn-secondary btn-sm ml-2 whitespace-nowrap">
              Blog
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Bouton menu petit écran */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 rounded-full p-2.5 text-amber-900 transition-colors hover:bg-amber-100 xl:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Panneau de navigation petit écran */}
      {isMenuOpen && (
        <div
          id="menu-mobile"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-amber-100 bg-amber-50 xl:hidden"
        >
          <div className="container py-5">
            <ul className="space-y-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 transition-colors ${
                      activeSection === id
                        ? 'bg-white font-semibold text-amber-900 shadow-soft'
                        : 'text-stone-600 hover:bg-white/70'
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
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-red-700 transition-colors hover:bg-red-50"
                >
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  Urgences et contacts utiles
                </a>
              </li>
            </ul>

            <div className="mt-5 flex flex-col gap-3 border-t border-amber-200/70 pt-5">
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary">
                Prendre rendez-vous
              </a>
              <a href={BLOG_URL} onClick={() => setIsMenuOpen(false)} className="btn btn-secondary">
                Le blog
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
