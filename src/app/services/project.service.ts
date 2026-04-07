import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private misProyectos: Project[] = [
    {
      id: 'bienestar-inteligente',
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
      imagen: 'bienestar_1.jpg', 
      imagenDetalle: 'bienestar_2.jpg',
      urlViva: 'https://bienestar-inteligente.netlify.app/#',
      pdf: 'bienestar_int.pdf',
      tags: ['Angular', 'Tailwind', 'Netlify', 'UX/UI'],
      linkText: 'Ver Proyecto'
    },
    {
      id: 'cafeteria',
      titulo: 'Guía de Cafeterías (UX/UI)',
      desc: 'Investigación exhaustiva de UX y diseño de UI para una guía móvil que ayuda a los entusiastas a encontrar café de especialidad.',
      detalle: 'Investigación profunda de usuarios, creación de wireframes de alta fidelidad y pruebas de usabilidad. Este proyecto se centra en resolver la necesidad de los entusiastas del café de especialidad para encontrar lugares únicos mediante una interfaz intuitiva y minimalista.',
      parrafoDestacado: 'Enfoque centrado en el usuario, diseñado específicamente para mejorar la experiencia de descubrimiento mediante un exhaustivo trabajo de UX Research y prototipado rápido centrados en las necesidades de la comunidad cafetera.',
      features: [
        { titulo: 'User Research', descripcion: 'Entrevistas en profundidad y análisis de competencia para descubrir los puntos de dolor de los consumidores reales.' },
        { titulo: 'Arquitectura de la Información', descripcion: 'Estructuración de navegación simplificada para facilitar la búsqueda por ubicación y grado de especialidad.' },
        { titulo: 'Wireframing & UI', descripcion: 'Desarrollo de un sistema de diseño propio y pantallas de alta fidelidad completamente interactivas en Figma.' },
        { titulo: 'Usability Testing', descripcion: 'Validación de flujos de interacción con usuarios para iterar y perfeccionar la experiencia final.' }
      ],
      imagen: 'cafeporahi.jpg',
      imagenDetalle: 'cafeporahi_2.jpg',
      tags: ['Figma', 'UX Research', 'Prototyping'],
      linkText: 'Ver Caso de Estudio'
    },
    {
      id: 'tesis',
      titulo: 'Agencia de Viajes',
      desc: 'Plataforma integral de reservas de viajes desarrollada como tesis final para la UTN.',
      detalle: 'Proyecto de tesis final para el título de Técnico Universitario en Programación en la UTN. Se trata de una solución integral diseñada para la gestión turística, con integraciones de API en tiempo real y una interfaz de usuario (UI/UX) adaptable. El proceso de desarrollo siguió la metodología ágil Scrum, centrándose en la recopilación de requisitos según el estándar IEEE 830 para las Especificaciones de Requisitos de Software (SRS).',
      parrafoDestacado: 'Desarrollado como un proyecto integral de grado académico, se aplicaron y cumplieron estrictamente los estándares de la industria del software para garantizar escalabilidad y robustez.',
      features: [
        { titulo: 'Arquitectura SPA', descripcion: 'Construcción inteligente utilizando Angular para proveer transiciones entre pantallas inmediatas sin recargar la página entera.' },
        { titulo: 'Metodologías Ágiles', descripcion: 'Dirección exitosa del desarrollo basada en Scrum, organizando entregables y adaptabilidad constante.' },
        { titulo: 'Estándar IEEE 830', descripcion: 'Sólida documentación y gestión tanto de requerimientos funcionales como no funcionales.' },
        { titulo: 'Diseño Responsivo', descripcion: 'Interfaz multi-dispositivo y de apariencia profesional sustentada totalmente en las utilidades visuales modernas de Tailwind CSS.' }
      ],
      imagen: 'utn-viajes-hero.jpg', 
      imagenDetalle: 'viajes_2.jpg',
      pdf: 'tesis-utn.pdf',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      linkText: 'Ver Proyecto'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.misProyectos;
  }

  getProjectById(id: string): Project | undefined {
    return this.misProyectos.find(p => p.id === id);
  }
}
