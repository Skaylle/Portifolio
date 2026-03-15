import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/Skaylle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/skaylle-barreto-256474131/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:skayllebarreto@outlook.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400 flex items-center gap-2">
              Feito com <Heart className="text-cyan-400" size={16} fill="currentColor" /> por Skaylle de Sousa Barreto
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Email: skayllebarreto@outlook.com<br />
              Telefone: (61) 99381-5525<br />
              Brasília, DF
            </p>
            <p className="text-gray-500 text-xs mt-2">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}