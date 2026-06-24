export interface ProjectFeature {
  titulo: string;
  descripcion: string;
}

export interface ProjectLocalized {
  titulo: string;
  desc: string;                // Descripción corta para la tarjeta
  detalle: string;             // Descripción larga para el detalle
  parrafoDestacado?: string;   // Párrafo especial que resalta frente a 'detalle'
  features?: ProjectFeature[]; // Características técnicas o puntuales
  linkText: string;            // Texto del botón en la tarjeta
}

export interface Project {
  id: string;
  es: ProjectLocalized;
  en: ProjectLocalized;
  tags: string[];              // Etiquetas tecnológicas
  imagen: string;              // Imagen de portada (tarjeta y hero)
  imagenDetalle?: string;      // Imagen secundaria para la vista de detalle
  urlViva?: string;            // Enlace al sitio en vivo
  pdf?: string;                // Enlace al PDF/Caso de estudio
}

export interface ResolvedProject {
  id: string;
  titulo: string;
  desc: string;
  detalle: string;
  parrafoDestacado?: string;
  features?: ProjectFeature[];
  tags: string[];
  imagen: string;
  imagenDetalle?: string;
  urlViva?: string;
  pdf?: string;
  linkText: string;
}
