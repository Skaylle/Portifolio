import { motion } from 'motion/react';
import { Code, Rocket, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-20 blur-xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595234235838-2fc8984bc651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3NzE5NjAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="relative rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.p2')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <Code className="mx-auto mb-2 text-cyan-400" size={32} />
                <p className="text-gray-300 font-medium">{t('about.clean')}</p>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <Rocket className="mx-auto mb-2 text-cyan-400" size={32} />
                <p className="text-gray-300 font-medium">{t('about.innovation')}</p>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <Users className="mx-auto mb-2 text-cyan-400" size={32} />
                <p className="text-gray-300 font-medium">{t('about.teamwork')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}