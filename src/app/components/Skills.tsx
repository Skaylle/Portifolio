import { motion } from 'motion/react';
import { Code2, Database, Palette, Settings, MessageSquare, Users, Clock, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


const skillsColumns = [
  {
    icon: <Settings className="mx-auto mb-2 text-cyan-400" size={32} />, // Backend
    title: 'Backend',
    items: [
      'PHP',
      'Laravel',
      'Zend Framework',
      'Symfony',
    ],
  },
  {
    icon: <Code2 className="mx-auto mb-2 text-cyan-400" size={32} />, // Frontend
    title: 'Frontend',
    items: [
      'AngularJS',
      'Vue.js / Vue 3',
      'React',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    icon: <Database className="mx-auto mb-2 text-cyan-400" size={32} />, // Banco de Dados
    title: 'Banco de Dados',
    items: [
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Oracle',
      'Doctrine ORM',
    ],
  },
  {
    icon: <Settings className="mx-auto mb-2 text-cyan-400" size={32} />, // DevOps & Tools
    title: 'DevOps & Tools',
    items: [
      'Docker',
      'Docker Compose',
      'Git / SVN',
      'Linux',
    ],
  },
];

export function Skills() {
  const { t } = useLanguage();
  
  const softSkills = [
    {
      icon: MessageSquare,
      titleKey: 'skills.communication',
      descKey: 'skills.communication.desc'
    },
    {
      icon: Users,
      titleKey: 'skills.teamwork',
      descKey: 'skills.teamwork.desc'
    },
    {
      icon: Clock,
      titleKey: 'skills.time',
      descKey: 'skills.time.desc'
    },
    {
      icon: Lightbulb,
      titleKey: 'skills.problem',
      descKey: 'skills.problem.desc'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsColumns.map((col, idx) => (
              <div key={col.title} className="bg-white/90 dark:bg-slate-900/80 rounded-xl p-8 text-center shadow-md flex flex-col items-center">
                {col.icon}
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{col.title}</h3>
                <ul className="space-y-2 text-left w-full">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-gray-200">
                      <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Mantido abaixo, se desejar exibir */}
        <div className="max-w-6xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {t('skills.soft')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Icon className="text-cyan-400 mb-4" size={32} />
                    <h4 className="text-white font-bold mb-2">{t(skill.titleKey)}</h4>
                    <p className="text-gray-400 text-sm">{t(skill.descKey)}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}