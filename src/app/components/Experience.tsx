import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();
    const experiences = [
      {
        id: 1,
        title: 'Engenheiro de Software II',
        company: 'SoftExpert Software S.A',
        period: '2024 – Atual',
        description: [
          'Desenvolvimento e manutenção de sistema corporativo legado em PHP',
          'Implementação de melhorias evolutivas e correções em ambiente produtivo',
          'Atuação com Symfony no back-end e React no front-end',
          'Integração e manutenção em bancos SQLServer, PostgreSQL e Oracle',
          'Análise e correção de problemas críticos reportados por clientes',
          'Versionamento com GitLab e atuação em ambiente corporativo de grande porte'
        ],
        technologies: ['PHP', 'Symfony', 'React', 'SQLServer', 'PostgreSQL', 'Oracle', 'GitLab']
      },
      {
        id: 2,
        title: 'Programador',
        company: 'Websis Tecnologia e Sistemas',
        period: '2019 – 2024',
        description: [
          'Desenvolvimento e manutenção de sistemas web corporativos',
          'Atuação com PHP utilizando Zend 2, Symfony 4 e Laravel 9',
          'Desenvolvimento de funcionalidades com Vue 3 e React',
          'Criação e manutenção de consultas SQL e procedures',
          'Integração com bancos SQLServer e PostgreSQL',
          'Participação em melhorias de performance e correções estruturais'
        ],
        technologies: ['PHP', 'Zend 2', 'Symfony 4', 'Laravel 9', 'Vue 3', 'React', 'SQLServer', 'PostgreSQL']
      },
      {
        id: 3,
        title: 'Analista Programador',
        company: 'Softmais Tecnologia',
        period: '2018 – 2019',
        description: [
          'Desenvolvimento e manutenção de sistemas web em PHP',
          'Utilização do framework Yii2',
          'Modelagem e manutenção de banco MySQL e SQLServer'
        ],
        technologies: ['PHP', 'Yii2', 'MySQL', 'SQLServer']
      },
      {
        id: 4,
        title: 'Analista Programador',
        company: 'Sempre Tecnologia',
        period: '2017 – 2018',
        description: [
          'Desenvolvimento e manutenção de sistemas web',
          'Utilização do ScriptCase 8 e 9',
          'Atuação com MySQL e PostgreSQL'
        ],
        technologies: ['ScriptCase 8', 'ScriptCase 9', 'MySQL', 'PostgreSQL']
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
                        {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Briefcase size={16} />
                        <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                      <span>{exp.period}</span>
                  </div>
                </div>

                  <ul className="text-gray-300 mb-4 list-disc list-inside space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

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