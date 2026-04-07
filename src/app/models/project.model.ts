export interface ProjectFeature {
  titulo: string;
  descripcion: string;
}

export interface Project {
  id: string;
  titulo: string;
  desc: string;                // Descripción corta para la tarjeta
  detalle: string;             // Descripción larga para el detalle
  parrafoDestacado?: string;   // Párrafo especial que resalta frente a 'detalle'
  features?: ProjectFeature[]; // Características técnicas o puntuales
  tags: string[];              // Etiquetas tecnológicas
  imagen: string;              // Imagen de portada (tarjeta y hero)
  imagenDetalle?: string;      // Imagen secundaria para la vista de detalle
  linkText: string;            // Texto del botón en la tarjeta
  urlViva?: string;            // Enlace al sitio en vivo
  pdf?: string;                // Enlace al PDF/Caso de estudio
}
