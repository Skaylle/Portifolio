import { motion } from 'motion/react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    // export function Projects() {
    //   const projects = [
    //     {
    //       titleKey: 'projects.p1.title',
    //       descKey: 'projects.p1.desc',
    //       code: 'https://github.com/skaylle/figma-image-fallback',
    //       demo: 'https://figma-image-fallback.vercel.app/',
    //       image: '/figma-fallback.png',
    //     },
    //     {
    //       titleKey: 'projects.p2.title',
    //       descKey: 'projects.p2.desc',
    //       code: 'https://github.com/skaylle/portfolio',
    //       demo: 'https://skaylle.dev/',
    //       image: '/portfolio.png',
    //     },
    //     {
    //       titleKey: 'projects.p3.title',
    //       descKey: 'projects.p3.desc',
    //       code: 'https://github.com/skaylle/nextjs-blog',
    //       demo: 'https://nextjs-blog-skaylle.vercel.app/',
    //       image: '/nextjs-blog.png',
    //     },
    //   ];
    //
    //   return (
    //     <section id="projects" className="py-16">
    //       <div className="container mx-auto px-4">
    //         <div className="mb-12 text-center">
    //             {/* {t('projects.title')}  // Comentado para futura implementação */}
    //             {t('projects.subtitle')}
    //         </div>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //           {projects.map((project, index) => (
    //             <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col">
    //               <img
    //                 src={project.image}
    //                 alt={t(project.titleKey)}
    //                 className="w-full h-48 object-cover object-top"
    //                 loading="lazy"
    //               />
    //               <div className="p-6 flex flex-col flex-1">
    //                 <h3 className="text-xl font-semibold mb-2">{t(project.titleKey)}</h3>
    //                 <p className="text-muted-foreground mb-4 flex-1">{t(project.descKey)}</p>
    //                 <div className="flex gap-4 mt-auto">
    //                   <a
    //                     href={project.code}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
    //                   >
    //                     {t('projects.code')}
    //                   </a>
    //                   <a
    //                     href={project.demo}
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors"
    //                   >
    //                     {t('projects.demo')}
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //         <div className="mt-8 text-center">
    //           <a
    //             href="https://github.com/skaylle?tab=repositories"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="inline-block px-6 py-3 bg-muted text-muted-foreground rounded hover:bg-muted/80 transition-colors"
    //           >
    //             {t('projects.more')}
    //           </a>
    //         </div>
    //       </div>
    //     </section>
    //   );
    // }
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <Github size={18} />
                    {t('projects.code')}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ExternalLink size={18} />
                    {t('projects.demo')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Folder size={20} />
            {t('projects.more')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}