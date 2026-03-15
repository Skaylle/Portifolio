import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-cyan-400">
            Portfólio
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.about')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experiencias')}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.experience')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.skills')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.projects')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.contact')}
              </button>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              className="text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.about')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experiencias')}
                className="block text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.experience')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.skills')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projetos')}
                className="block text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.projects')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contato')}
                className="block text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {t('nav.contact')}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}