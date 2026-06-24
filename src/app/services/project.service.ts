import { Injectable, inject, computed } from '@angular/core';
import { Project, ResolvedProject } from '../models/project.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private langService = inject(LanguageService);

  private misProyectos: Project[] = [
    {
      id: 'bienestar-inteligente',
      es: {
        titulo: 'Bienestar Inteligente',
        desc: 'Desarrollo integral de una Landing Page de alta conversión para el programa de formación vivencial Bienestar Inteligente.',
        detalle: 'Desarrollo de una Landing Page profesional para la Health Coach Silvina Calosso. El sitio incluye secciones de biografía, servicios de coaching, testimonios y una integración estratégica para la conversión de clientes. Se priorizó una estética limpia y una navegación intuitiva que refleje los valores de marca personal.',
        parrafoDestacado: 'A diferencia de sitios convencionales, se aplicó una filosofía de diseño editorial de alta gama, buscando ofrecer un "respiro digital" mediante el uso de aire visual y asimetrías orgánicas.',
        features: [
          { titulo: 'Psicología del Color', descripcion: 'Paleta basada en la naturaleza (verde bosque y tierra) para transmitir vitalidad y serenidad.' },
          { titulo: 'Glassmorphism', descripcion: 'Navegación translúcida con desenfoque de fondo para una sensación de ligereza.' },
          { titulo: 'Core Web Vitals', descripcion: 'Optimización de carga instantánea mediante el uso de JavaScript Vanilla y HTML5 semántico.' },
          { titulo: 'Micro-Conversiones', descripcion: 'Integración estratégica de CTAs con mensajes pre-configurados para WhatsApp.' }
        ],
        linkText: 'Ver Proyecto'
      },
      en: {
        titulo: 'Smart Wellness',
        desc: 'Comprehensive development of a high-converting Landing Page for the Bienestar Inteligente experiential training program.',
        detalle: 'Development of a professional Landing Page for Health Coach Silvina Calosso. The site includes biography, coaching services, testimonials, and strategic integration for client conversion. Clean aesthetics and intuitive navigation were prioritized to reflect personal brand values.',
        parrafoDestacado: 'Unlike conventional sites, a high-end editorial design philosophy was applied, seeking to offer a "digital breathing space" through the use of visual white space and organic asymmetries.',
        features: [
          { titulo: 'Color Psychology', descripcion: 'Nature-based palette (forest green and earth tones) to convey vitality and serenity.' },
          { titulo: 'Glassmorphism', descripcion: 'Translucent navigation with background blur for a feeling of lightness.' },
          { titulo: 'Core Web Vitals', descripcion: 'Instant load optimization through Vanilla JavaScript and semantic HTML5.' },
          { titulo: 'Micro-Conversions', descripcion: 'Strategic integration of CTAs with pre-configured messages for WhatsApp.' }
        ],
        linkText: 'View Project'
      },
      imagen: 'bienestar_1.jpg',
      imagenDetalle: 'bienestar_2.jpg',
      urlViva: 'https://bienestar-inteligente.netlify.app/#',
      pdf: 'bienestar_int.pdf',
      tags: ['Angular', 'Tailwind', 'Netlify', 'UX/UI']
    },
    {
      id: 'punto-cero',
      es: {
        titulo: 'Punto Cero',
        desc: 'Estudio de desarrollo web e IA aplicada orientado a crear plataformas, automatizaciones y soluciones digitales para profesionales de la salud',
        detalle: 'Desarrollo de la plataforma digital de Punto Cero, un estudio orientado a la creación de soluciones tecnológicas, automatización de procesos y productos digitales para profesionales independientes y pequeñas empresas. El sitio fue concebido no solo como una página institucional, sino como una demostración práctica de una metodología de trabajo centrada en la identificación de problemas reales, el diseño de experiencias digitales y la implementación de soluciones utilizando tecnologías modernas e inteligencia artificial.',
        parrafoDestacado: 'Diseñado con una filosofía de simplicidad, claridad visual y orientación a resultados, permitiendo comunicar servicios complejos de forma accesible para clientes sin perfil técnico.',
        features: [
          { titulo: 'Estrategia Digital', descripcion: 'Definición de propuesta de valor, posicionamiento y estructura de servicios orientados a transformación digital.' },
          { titulo: 'Diseño UX/UI', descripcion: 'Arquitectura de información enfocada en claridad, navegación intuitiva y experiencia centrada en el usuario.' },
          { titulo: 'Desarrollo Web Moderno', descripcion: 'Implementación utilizando Next.js y TypeScript para garantizar rendimiento, escalabilidad y mantenibilidad.' },
          { titulo: 'Integración de IA Aplicada', descripcion: 'Incorporación de metodologías de Prompt Engineering y herramientas de inteligencia artificial para acelerar procesos de desarrollo y validación de ideas.' },
          { titulo: 'Presentación de Casos Reales', descripcion: 'Integración de proyectos desarrollados para clientes y productos propios, mostrando resultados concretos y aplicaciones prácticas.' },
          { titulo: 'Enfoque Product-Oriented', descripcion: 'Construcción orientada a resolver problemas de negocio mediante tecnología, automatización y mejora continua.' },
          { titulo: 'Evolución Continua', descripcion: 'Plataforma concebida como un espacio dinámico para incorporar nuevos productos, servicios y casos de estudio a medida que el estudio crece.' }
        ],
        linkText: 'Ver Proyecto'
      },
      en: {
        titulo: 'Punto Cero',
        desc: 'Web development and applied AI studio aimed at creating platforms, automations, and digital solutions for healthcare professionals',
        detalle: 'Development of the Punto Cero digital platform, a studio focused on creating technological solutions, process automation, and digital products for independent professionals and small businesses. The site was conceived not only as an institutional page, but as a practical demonstration of a work methodology centered on identifying real problems, designing digital experiences, and implementing solutions using modern technologies and artificial intelligence.',
        parrafoDestacado: 'Designed with a philosophy of simplicity, visual clarity, and results orientation, allowing complex services to be communicated accessibly for clients without a technical profile.',
        features: [
          { titulo: 'Digital Strategy', descripcion: 'Definition of value proposition, positioning, and service structure oriented toward digital transformation.' },
          { titulo: 'UX/UI Design', descripcion: 'Information architecture focused on clarity, intuitive navigation, and user-centered experience.' },
          { titulo: 'Modern Web Development', descripcion: 'Implementation using Next.js and TypeScript to guarantee performance, scalability, and maintainability.' },
          { titulo: 'Applied AI Integration', descripcion: 'Incorporation of Prompt Engineering methodologies and artificial intelligence tools to accelerate development processes and validate ideas.' },
          { titulo: 'Real Case Studies', descripcion: 'Integration of projects developed for clients and in-house products, showing concrete results and practical applications.' },
          { titulo: 'Product-Oriented Approach', descripcion: 'Construction aimed at solving business problems through technology, automation, and continuous improvement.' },
          { titulo: 'Continuous Evolution', descripcion: 'Platform conceived as a dynamic space to incorporate new products, services, and case studies as the studio grows.' }
        ],
        linkText: 'View Project'
      },
      imagen: 'Punto_Cero_home.jpg',
      imagenDetalle: 'Punto_Cero_detalle.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'UX/UI', 'Branding Digital', 'IA Aplicada']
    },
    {
      id: 'consultingdesk',
      es: {
        titulo: 'ConsultingDesk',
        desc: 'Sistema integral de gestión profesional para psicólogos, diseñado para centralizar pacientes, agenda, seguimientos y evolución terapéutica.',
        detalle: 'Desarrollo de una plataforma web de gestión clínica diseñada para optimizar la administración profesional de psicólogos independientes. El sistema centraliza pacientes, agenda, seguimientos, alertas y evolución terapéutica en una única interfaz, permitiendo reducir tareas administrativas y mejorar la organización de la práctica profesional.',
        parrafoDestacado: 'Diseñado con un enfoque centrado en la productividad, la simplicidad de uso y la seguridad de la información, permitiendo que profesionales sin perfil técnico incorporen la herramienta a su flujo de trabajo diario con una curva de aprendizaje mínima.',
        features: [
          { titulo: 'Expediente Clínico', descripcion: 'Centralización de historias clínicas, notas de evolución y datos de contacto de forma segura.' },
          { titulo: 'Gestión del Ciclo Terapéutico', descripcion: 'Pipeline visual para seguimiento de pacientes desde admisión hasta alta terapéutica.' },
          { titulo: 'Agenda Inteligente', descripcion: 'Planificación visual de sesiones, evaluaciones y seguimientos.' },
          { titulo: 'Automatización de Alertas', descripcion: 'Generación automática de recordatorios y tareas según el estado terapéutico del paciente.' },
          { titulo: 'Arquitectura Full-Stack', descripcion: 'Implementación utilizando Next.js, TypeScript, Prisma ORM y Turso Database.' },
          { titulo: 'UX Centrada en Productividad', descripcion: 'Interfaz diseñada para minimizar clics y reducir la carga administrativa del profesional.' },
          { titulo: 'Desarrollo Asistido por IA', descripcion: 'Utilización de herramientas de IA para acelerar el desarrollo, resolución de incidencias y optimización de arquitectura.' },
          { titulo: 'Iteración Basada en Feedback', descripcion: 'Evolución continua del producto mediante pruebas reales y retroalimentación directa de usuarios finales.' }
        ],
        linkText: 'Ver Proyecto'
      },
      en: {
        titulo: 'ConsultingDesk',
        desc: 'Comprehensive professional management system for psychologists, designed to centralize patients, scheduling, follow-ups, and therapeutic progress.',
        detalle: 'Development of a clinical management web platform designed to optimize the professional administration of independent psychologists. The system centralizes patients, scheduling, follow-ups, alerts, and therapeutic progress in a single interface, reducing administrative tasks and improving practice organization.',
        parrafoDestacado: 'Designed with a focus on productivity, ease of use, and information security, allowing non-technical professionals to incorporate the tool into their daily workflow with a minimal learning curve.',
        features: [
          { titulo: 'Clinical Record', descripcion: 'Secure centralization of medical histories, progress notes, and contact details.' },
          { titulo: 'Therapeutic Cycle Management', descripcion: 'Visual pipeline for tracking patients from admission to therapeutic discharge.' },
          { titulo: 'Smart Schedule', descripcion: 'Visual planning of sessions, assessments, and follow-ups.' },
          { titulo: 'Alert Automation', descripcion: 'Automatic generation of reminders and tasks according to the patient\'s therapeutic status.' },
          { titulo: 'Full-Stack Architecture', descripcion: 'Implementation using Next.js, TypeScript, Prisma ORM, and Turso Database.' },
          { titulo: 'Productivity-Centered UX', descripcion: 'Interface designed to minimize clicks and reduce the professional\'s administrative burden.' },
          { titulo: 'AI-Assisted Development', descripcion: 'Use of AI tools to accelerate development, resolve incidents, and optimize architecture.' },
          { titulo: 'Feedback-Driven Iteration', descripcion: 'Continuous product evolution through real-world testing and direct feedback from end users.' }
        ],
        linkText: 'View Project'
      },
      imagen: 'crm_home.jpg',
      imagenDetalle: 'crm_dashboard.jpg',
      tags: ['Next.js', 'TypeScript', 'Prisma ORM', 'Turso Database', 'UX/UI', 'IA Aplicada']
    }
  ];

  // Computed signal mapping our raw project details to the active language
  projects = computed<ResolvedProject[]>(() => {
    const lang = this.langService.currentLang();
    return this.misProyectos.map(p => ({
      id: p.id,
      titulo: p[lang].titulo,
      desc: p[lang].desc,
      detalle: p[lang].detalle,
      parrafoDestacado: p[lang].parrafoDestacado,
      features: p[lang].features,
      tags: p.tags,
      imagen: p.imagen,
      imagenDetalle: p.imagenDetalle,
      urlViva: p.urlViva,
      pdf: p.pdf,
      linkText: p[lang].linkText
    }));
  });

  getProjects() {
    return this.projects;
  }

  getProjectById(id: string) {
    return computed(() => this.projects().find(p => p.id === id));
  }
}
