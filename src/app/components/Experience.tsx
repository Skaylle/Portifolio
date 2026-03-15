import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: 1,
      titleKey: 'exp.job1.title',
      companyKey: 'exp.job1.company',
      periodKey: 'exp.job1.period',
      descKey: 'exp.job1.desc',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL']
    },
    {
      id: 2,
      titleKey: 'exp.job2.title',
      companyKey: 'exp.job2.company',
      periodKey: 'exp.job2.period',
      descKey: 'exp.job2.desc',
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript']
    },
    {
      id: 3,
      titleKey: 'exp.job3.title',
      companyKey: 'exp.job3.company',
      periodKey: 'exp.job3.period',
      descKey: 'exp.job3.desc',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git']
    }
  ];

  return (
    <section id="experiencias" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('exp.title')}
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-cyan-500/30 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>

              <div className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700/50 transition-colors">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {t(exp.titleKey)}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Briefcase size={16} />
                      <span>{t(exp.companyKey)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{t(exp.periodKey)}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{t(exp.descKey)}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-900 text-cyan-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}