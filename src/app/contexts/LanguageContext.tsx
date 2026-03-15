import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.about': 'Sobre',
    'nav.experience': 'Experiências',
    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.name': 'Seu Nome Aqui',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.subtitle': 'Transformando ideias em código limpo e soluções digitais inovadoras',
    'hero.contact': 'Entre em Contato',
    'hero.download': 'Baixar Currículo',
    
    // About
    'about.title': 'Sobre Mim',
    'about.p1': 'Sou um desenvolvedor apaixonado por tecnologia e inovação, com experiência em criar soluções digitais que fazem a diferença. Minha jornada no desenvolvimento começou há alguns anos e desde então tenho me dedicado a aprender e evoluir constantemente.',
    'about.p2': 'Trabalho com as mais modernas tecnologias do mercado, sempre buscando as melhores práticas e padrões de código limpo. Adoro transformar ideias complexas em interfaces intuitivas e funcionais.',
    'about.clean': 'Código Limpo',
    'about.innovation': 'Inovação',
    'about.teamwork': 'Trabalho em Equipe',
    
    // Experience
    'exp.title': 'Experiência Profissional',
    'exp.job1.title': 'Desenvolvedor Full Stack Sênior',
    'exp.job1.company': 'Tech Company Inc.',
    'exp.job1.period': 'Jan 2023 - Presente',
    'exp.job1.desc': 'Lidero o desenvolvimento de aplicações web escaláveis usando React, Node.js e AWS. Implementei melhorias que aumentaram a performance em 40%.',
    'exp.job2.title': 'Desenvolvedor Front-End',
    'exp.job2.company': 'Digital Solutions',
    'exp.job2.period': 'Mar 2021 - Dez 2022',
    'exp.job2.desc': 'Desenvolvi interfaces responsivas e acessíveis para diversos clientes. Colaborei com equipes multidisciplinares em projetos ágeis.',
    'exp.job3.title': 'Desenvolvedor Júnior',
    'exp.job3.company': 'StartupXYZ',
    'exp.job3.period': 'Jun 2019 - Fev 2021',
    'exp.job3.desc': 'Participei do desenvolvimento de MVPs e features para produtos SaaS. Aprendi práticas de desenvolvimento ágil e trabalho em equipe.',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.technical': 'Habilidades Técnicas',
    'skills.soft': 'Soft Skills',
    'skills.communication': 'Comunicação',
    'skills.communication.desc': 'Habilidade de transmitir ideias claramente e colaborar efetivamente com equipes multidisciplinares.',
    'skills.teamwork': 'Trabalho em Equipe',
    'skills.teamwork.desc': 'Experiência em ambientes colaborativos, contribuindo para o sucesso coletivo.',
    'skills.time': 'Gestão de Tempo',
    'skills.time.desc': 'Capacidade de priorizar tarefas e cumprir prazos em ambientes dinâmicos.',
    'skills.problem': 'Resolução de Problemas',
    'skills.problem.desc': 'Abordagem analítica para identificar e resolver desafios técnicos complexos.',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Alguns dos projetos que desenvolvi ao longo da minha jornada',
    'projects.p1.title': 'E-Commerce Platform',
    'projects.p1.desc': 'Plataforma completa de e-commerce com carrinho de compras, pagamento integrado e painel administrativo.',
    'projects.p2.title': 'Task Management App',
    'projects.p2.desc': 'Aplicativo de gerenciamento de tarefas com sistema de colaboração em tempo real e notificações.',
    'projects.p3.title': 'Weather Dashboard',
    'projects.p3.desc': 'Dashboard interativo de previsão do tempo com gráficos e mapas integrados.',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.more': 'Ver Mais Projetos no GitHub',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Vamos conversar sobre seu próximo projeto',
    'contact.info': 'Informações de Contato',
    'contact.intro': 'Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.location.value': 'São Paulo, SP - Brasil',
    'contact.form.name': 'Nome',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'seu-email@example.com',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Sua mensagem...',
    'contact.form.captcha': 'Verificação de Segurança',
    'contact.form.captcha.answer': 'Sua resposta',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error.captcha': 'Resposta do CAPTCHA incorreta. Tente novamente.',
    'contact.error.rate': 'Por favor, aguarde antes de enviar outra mensagem.',
    
    // Footer
    'footer.made': 'Feito com',
    'footer.by': 'por Seu Nome',
    'footer.rights': '© 2026 Todos os direitos reservados',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Your Name Here',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'Transforming ideas into clean code and innovative digital solutions',
    'hero.contact': 'Get in Touch',
    'hero.download': 'Download Resume',
    
    // About
    'about.title': 'About Me',
    'about.p1': 'I am a developer passionate about technology and innovation, with experience in creating digital solutions that make a difference. My development journey started a few years ago and since then I have been dedicated to constantly learning and evolving.',
    'about.p2': 'I work with the most modern technologies on the market, always seeking best practices and clean code standards. I love transforming complex ideas into intuitive and functional interfaces.',
    'about.clean': 'Clean Code',
    'about.innovation': 'Innovation',
    'about.teamwork': 'Teamwork',
    
    // Experience
    'exp.title': 'Professional Experience',
    'exp.job1.title': 'Senior Full Stack Developer',
    'exp.job1.company': 'Tech Company Inc.',
    'exp.job1.period': 'Jan 2023 - Present',
    'exp.job1.desc': 'Leading the development of scalable web applications using React, Node.js and AWS. Implemented improvements that increased performance by 40%.',
    'exp.job2.title': 'Front-End Developer',
    'exp.job2.company': 'Digital Solutions',
    'exp.job2.period': 'Mar 2021 - Dec 2022',
    'exp.job2.desc': 'Developed responsive and accessible interfaces for various clients. Collaborated with multidisciplinary teams on agile projects.',
    'exp.job3.title': 'Junior Developer',
    'exp.job3.company': 'StartupXYZ',
    'exp.job3.period': 'Jun 2019 - Feb 2021',
    'exp.job3.desc': 'Participated in the development of MVPs and features for SaaS products. Learned agile development practices and teamwork.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.technical': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.communication': 'Communication',
    'skills.communication.desc': 'Ability to convey ideas clearly and collaborate effectively with multidisciplinary teams.',
    'skills.teamwork': 'Teamwork',
    'skills.teamwork.desc': 'Experience in collaborative environments, contributing to collective success.',
    'skills.time': 'Time Management',
    'skills.time.desc': 'Ability to prioritize tasks and meet deadlines in dynamic environments.',
    'skills.problem': 'Problem Solving',
    'skills.problem.desc': 'Analytical approach to identify and solve complex technical challenges.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of the projects I developed throughout my journey',
    'projects.p1.title': 'E-Commerce Platform',
    'projects.p1.desc': 'Complete e-commerce platform with shopping cart, integrated payment and administrative panel.',
    'projects.p2.title': 'Task Management App',
    'projects.p2.desc': 'Task management application with real-time collaboration system and notifications.',
    'projects.p3.title': 'Weather Dashboard',
    'projects.p3.desc': 'Interactive weather forecast dashboard with integrated charts and maps.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.more': 'See More Projects on GitHub',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': "Let's talk about your next project",
    'contact.info': 'Contact Information',
    'contact.intro': 'I am always open to new opportunities and collaborations. Feel free to get in touch!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.location.value': 'São Paulo, SP - Brazil',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your-email@example.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.captcha': 'Security Verification',
    'contact.form.captcha.answer': 'Your answer',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error.captcha': 'Incorrect CAPTCHA answer. Please try again.',
    'contact.error.rate': 'Please wait before sending another message.',
    
    // Footer
    'footer.made': 'Made with',
    'footer.by': 'by Your Name',
    'footer.rights': '© 2026 All rights reserved',
  },
  fr: {
    // Header
    'nav.about': 'À Propos',
    'nav.experience': 'Expériences',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Votre Nom Ici',
    'hero.title': 'Développeur Full Stack',
    'hero.subtitle': 'Transformer les idées en code propre et solutions numériques innovantes',
    'hero.contact': 'Me Contacter',
    'hero.download': 'Télécharger CV',
    
    // About
    'about.title': 'À Propos de Moi',
    'about.p1': "Je suis un développeur passionné par la technologie et l'innovation, avec une expérience dans la création de solutions numériques qui font la différence. Mon parcours de développement a commencé il y a quelques années et depuis lors, je me suis consacré à apprendre et à évoluer constamment.",
    'about.p2': "Je travaille avec les technologies les plus modernes du marché, en recherchant toujours les meilleures pratiques et les normes de code propre. J'adore transformer des idées complexes en interfaces intuitives et fonctionnelles.",
    'about.clean': 'Code Propre',
    'about.innovation': 'Innovation',
    'about.teamwork': "Travail d'Équipe",
    
    // Experience
    'exp.title': 'Expérience Professionnelle',
    'exp.job1.title': 'Développeur Full Stack Senior',
    'exp.job1.company': 'Tech Company Inc.',
    'exp.job1.period': 'Jan 2023 - Présent',
    'exp.job1.desc': "Direction du développement d'applications web évolutives utilisant React, Node.js et AWS. Mise en œuvre d'améliorations qui ont augmenté les performances de 40%.",
    'exp.job2.title': 'Développeur Front-End',
    'exp.job2.company': 'Digital Solutions',
    'exp.job2.period': 'Mar 2021 - Déc 2022',
    'exp.job2.desc': 'Développé des interfaces réactives et accessibles pour divers clients. Collaboré avec des équipes multidisciplinaires sur des projets agiles.',
    'exp.job3.title': 'Développeur Junior',
    'exp.job3.company': 'StartupXYZ',
    'exp.job3.period': 'Jui 2019 - Fév 2021',
    'exp.job3.desc': "Participé au développement de MVP et de fonctionnalités pour les produits SaaS. Appris les pratiques de développement agile et le travail d'équipe.",
    
    // Skills
    'skills.title': 'Compétences',
    'skills.technical': 'Compétences Techniques',
    'skills.soft': 'Compétences Interpersonnelles',
    'skills.communication': 'Communication',
    'skills.communication.desc': 'Capacité à transmettre des idées clairement et à collaborer efficacement avec des équipes multidisciplinaires.',
    'skills.teamwork': "Travail d'Équipe",
    'skills.teamwork.desc': 'Expérience dans des environnements collaboratifs, contribuant au succès collectif.',
    'skills.time': 'Gestion du Temps',
    'skills.time.desc': 'Capacité à hiérarchiser les tâches et à respecter les délais dans des environnements dynamiques.',
    'skills.problem': 'Résolution de Problèmes',
    'skills.problem.desc': 'Approche analytique pour identifier et résoudre des défis techniques complexes.',
    
    // Projects
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Certains des projets que j\'ai développés tout au long de mon parcours',
    'projects.p1.title': 'Plateforme E-Commerce',
    'projects.p1.desc': 'Plateforme e-commerce complète avec panier d\'achat, paiement intégré et panneau administratif.',
    'projects.p2.title': 'Application de Gestion de Tâches',
    'projects.p2.desc': 'Application de gestion de tâches avec système de collaboration en temps réel et notifications.',
    'projects.p3.title': 'Tableau de Bord Météo',
    'projects.p3.desc': 'Tableau de bord interactif de prévisions météorologiques avec graphiques et cartes intégrés.',
    'projects.code': 'Code',
    'projects.demo': 'Démo',
    'projects.more': 'Voir Plus de Projets sur GitHub',
    
    // Contact
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Parlons de votre prochain projet',
    'contact.info': 'Informations de Contact',
    'contact.intro': 'Je suis toujours ouvert aux nouvelles opportunités et collaborations. N\'hésitez pas à me contacter!',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.location.value': 'São Paulo, SP - Brésil',
    'contact.form.name': 'Nom',
    'contact.form.name.placeholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre-email@example.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Votre message...',
    'contact.form.captcha': 'Vérification de Sécurité',
    'contact.form.captcha.answer': 'Votre réponse',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé avec succès!',
    'contact.error.captcha': 'Réponse CAPTCHA incorrecte. Veuillez réessayer.',
    'contact.error.rate': 'Veuillez attendre avant d\'envoyer un autre message.',
    
    // Footer
    'footer.made': 'Fait avec',
    'footer.by': 'par Votre Nom',
    'footer.rights': '© 2026 Tous droits réservés',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
