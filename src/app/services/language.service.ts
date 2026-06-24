import { Injectable, signal, computed } from '@angular/core';

export interface TranslationSchema {
  // Navigation
  about: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
  // Hero
  heroBadge: string;
  heroSub: string;
  heroBtnProjects: string;
  heroBtnContact: string;
  // About
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutStat1Val: string;
  aboutStat1Lbl: string;
  aboutStat2Val: string;
  aboutStat2Lbl: string;
  // Projects Section
  projectsTitle: string;
  // Skills
  skillsTitle: string;
  skillsSub: string;
  skillTypeScript: string;
  skillAngular: string;
  skillFigma: string;
  skillPrompting: string;
  skillHtmlCss: string;
  skillSql: string;
  skillGit: string;
  skillResearch: string;
  skillResponsive: string;
  skillBranding: string;
  // Experience
  expTitle: string;
  expDate1: string;
  expRole1: string;
  expCompany1: string;
  expDesc1: string;
  expDate2: string;
  expRole2: string;
  expCompany2: string;
  expDesc2: string;
  // Education
  eduTitle: string;
  eduDegree1: string;
  eduSchool1: string;
  eduDegree2: string;
  eduSchool2: string;
  eduCertTitle: string;
  eduCert1: string;
  eduCert1Meta: string;
  eduCert2: string;
  eduCert2Meta: string;
  // Contact
  contactTitle: string;
  contactSub: string;
  contactLoc: string;
  contactEmail: string;
  contactLinkedIn: string;
  // Project Detail Page
  detailBack: string;
  detailOverview: string;
  detailTechDoc: string;
  detailTechSub: string;
  detailPdfBtn: string;
  detailCloseBtn: string;
  // Footer
  footerText: string;
}

export const TRANSLATIONS: Record<'es' | 'en', TranslationSchema> = {
  es: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    experience: 'Experiencia',
    contact: 'Contacto',
    heroBadge: 'Abierto a nuevos proyectos',
    heroSub: 'Front-End Developer | UX/UI Designer | AI Prompt Engineer. Creando experiencias digitales fluidas con precisión técnica y creatividad.',
    heroBtnProjects: 'Ver Proyectos',
    heroBtnContact: 'Contacto',
    aboutTitle: 'Perfil multidisciplinario',
    aboutP1: 'Combinando el rigor técnico de la <span class="text-primary font-semibold">UTN</span> con la excelencia creativa de la <span class="text-primary font-semibold">Martín Malharro</span>, conecto el mundo de la ingeniería compleja con el diseño intuitivo.',
    aboutP2: 'Con <span class="text-slate-900 dark:text-white font-bold">17 años de experiencia en Prosegur</span>, aporto una responsabilidad inigualable, una mentalidad enfocada en la seguridad y una atención meticulosa al detalle en cada producto digital que construyo.',
    aboutStat1Val: '17+',
    aboutStat1Lbl: 'Logística de Valores',
    aboutStat2Val: 'UX/UI',
    aboutStat2Lbl: 'Especialista en Diseño',
    projectsTitle: 'Proyectos destacados',
    skillsTitle: 'Technical Stack',
    skillsSub: 'Herramientas y tecnologías que utilizo para dar vida a las ideas.',
    skillTypeScript: 'TypeScript',
    skillAngular: 'Angular',
    skillFigma: 'Figma',
    skillPrompting: 'AI Prompting',
    skillHtmlCss: 'HTML/CSS',
    skillSql: 'SQL',
    skillGit: 'Git/GitHub',
    skillResearch: 'UX Research',
    skillResponsive: 'Responsive',
    skillBranding: 'Branding',
    expTitle: 'Trayectoria Profesional',
    expDate1: '2007 - Presente',
    expRole1: 'Custodio de Unidad Blindada',
    expCompany1: 'Prosegur Argentina',
    expDesc1: '17 años de responsabilidad inquebrantable, gestionando entornos de alto riesgo y protocolos de seguridad física. Este rol forjó mi compromiso con la calidad y la atención meticulosa al detalle.',
    expDate2: '2012 - 2018',
    expRole2: 'Fundador / Director Creativo',
    expCompany2: 'Toy Soldier Shirts',
    expDesc2: 'Emprendimiento enfocado en el diseño personalizado y producción de indumentaria, gestionando tanto la dirección creativa como las operaciones comerciales.',
    eduTitle: 'Educación',
    eduDegree1: 'Técnico Universitario en Programación',
    eduSchool1: 'UTN (Universidad Tecnológica Nacional)',
    eduDegree2: 'Técnico en Diseño Gráfico',
    eduSchool2: 'EAV Martín Malharro',
    eduCertTitle: 'Certificaciones',
    eduCert1: 'Inteligencia artificial generativa para profesionales creativos',
    eduCert1Meta: 'LinkedIn Learning • 2025',
    eduCert2: 'Diseño para programación avanzado',
    eduCert2Meta: 'LinkedIn Learning • 2024',
    contactTitle: 'Hablemos',
    contactSub: 'Actualmente busco nuevas oportunidades en Desarrollo Front-End y Diseño UX/UI. Creemos algo grandioso juntos.',
    contactLoc: 'Mar del Plata, Argentina',
    contactEmail: 'diegosoto.mdp@email.com',
    contactLinkedIn: 'Perfil de LinkedIn',
    detailBack: 'Volver al Portafolio',
    detailOverview: 'Descripción general y metodología del proyecto',
    detailTechDoc: 'Tecnologías utilizadas y documentación',
    detailTechSub: 'Consulte los detalles técnicos completos y la documentación SRS.',
    detailPdfBtn: 'Abrir Caso de Estudio (PDF)',
    detailCloseBtn: 'Cerrar',
    footerText: 'Creado con pasión y precisión.'
  },
  en: {
    about: 'About me',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
    heroBadge: 'Open to new projects',
    heroSub: 'Front-End Developer | UX/UI Designer | AI Prompt Engineer. Creating seamless digital experiences with technical precision and creativity.',
    heroBtnProjects: 'View Projects',
    heroBtnContact: 'Contact',
    aboutTitle: 'Multidisciplinary Profile',
    aboutP1: 'Combining the technical rigor of <span class="text-primary font-semibold">UTN</span> with the creative excellence of <span class="text-primary font-semibold">Martín Malharro</span>, I connect the world of complex engineering with intuitive design.',
    aboutP2: 'With <span class="text-slate-900 dark:text-white font-bold">17 years of experience at Prosegur</span>, I bring unparalleled responsibility, a security-focused mindset, and meticulous attention to detail to every digital product I build.',
    aboutStat1Val: '17+',
    aboutStat1Lbl: 'Cash-in-Transit Logistics',
    aboutStat2Val: 'UX/UI',
    aboutStat2Lbl: 'Design Specialist',
    projectsTitle: 'Featured Projects',
    skillsTitle: 'Technical Stack',
    skillsSub: 'Tools and technologies I use to bring ideas to life.',
    skillTypeScript: 'TypeScript',
    skillAngular: 'Angular',
    skillFigma: 'Figma',
    skillPrompting: 'AI Prompting',
    skillHtmlCss: 'HTML/CSS',
    skillSql: 'SQL',
    skillGit: 'Git/GitHub',
    skillResearch: 'UX Research',
    skillResponsive: 'Responsive',
    skillBranding: 'Branding',
    expTitle: 'Professional Experience',
    expDate1: '2007 - Present',
    expRole1: 'Armored Car Guard / Custodian',
    expCompany1: 'Prosegur Argentina',
    expDesc1: '17 years of unwavering responsibility, managing high-risk environments and physical security protocols. This role forged my commitment to quality and meticulous attention to detail.',
    expDate2: '2012 - 2018',
    expRole2: 'Founder / Creative Director',
    expCompany2: 'Toy Soldier Shirts',
    expDesc2: 'Entrepreneurship focused on custom design and apparel production, managing both creative direction and business operations.',
    eduTitle: 'Education',
    eduDegree1: 'Associate Degree in Software Programming',
    eduSchool1: 'UTN (National Technological University)',
    eduDegree2: 'Graphic Design Technician',
    eduSchool2: 'EAV Martín Malharro',
    eduCertTitle: 'Certifications',
    eduCert1: 'Generative AI for Creative Professionals',
    eduCert1Meta: 'LinkedIn Learning • 2025',
    eduCert2: 'Advanced Design for Programming',
    eduCert2Meta: 'LinkedIn Learning • 2024',
    contactTitle: "Let's Talk",
    contactSub: 'I am currently looking for new opportunities in Front-End Development and UX/UI Design. Let\'s create something great together.',
    contactLoc: 'Mar del Plata, Argentina',
    contactEmail: 'diegosoto.mdp@email.com',
    contactLinkedIn: 'LinkedIn Profile',
    detailBack: 'Back to Portfolio',
    detailOverview: 'Project Overview & Methodology',
    detailTechDoc: 'Technologies Used & Documentation',
    detailTechSub: 'See full technical details and SRS documentation.',
    detailPdfBtn: 'Open Case Study (PDF)',
    detailCloseBtn: 'Close',
    footerText: 'Built with passion & precision.'
  }
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isBrowser = typeof window !== 'undefined';
  
  // Signal with current language, checking localStorage to persist setting
  currentLang = signal<'es' | 'en'>(
    (this.isBrowser && localStorage.getItem('lang') as 'es' | 'en') || 'es'
  );

  // Computed translations signal
  t = computed<TranslationSchema>(() => {
    return TRANSLATIONS[this.currentLang()];
  });

  setLanguage(lang: 'es' | 'en') {
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
    }
    this.currentLang.set(lang);
  }

  toggleLanguage() {
    const nextLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(nextLang);
  }
}
