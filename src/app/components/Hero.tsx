import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('hero.name')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {t('hero.title')}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="#contato"
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium"
            >
              {t('hero.contact')}
            </a>
            <a
              href="/Portifolio/Curriculo_Skaylle_Barreto.pdf"
              download
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors font-medium flex items-center gap-2"
            >
              <Download size={20} />
              {t('hero.download')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/Skaylle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/skaylle-barreto-256474131/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:skayllebarreto@outlook.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}