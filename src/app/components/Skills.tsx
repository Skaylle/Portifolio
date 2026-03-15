import { motion } from 'motion/react';
import { Code2, Database, Palette, Settings, MessageSquare, Users, Clock, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const technicalSkills = [
  { name: 'React & Next.js', level: 90, icon: Code2 },
  { name: 'TypeScript', level: 85, icon: Code2 },
  { name: 'Node.js & Express', level: 80, icon: Settings },
  { name: 'SQL & NoSQL', level: 75, icon: Database },
  { name: 'UI/UX Design', level: 70, icon: Palette },
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
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {t('skills.technical')}
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="text-cyan-400" size={20} />
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="ml-auto text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
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