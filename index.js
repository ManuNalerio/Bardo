import { annotate } from "https://unpkg.com/rough-notation?module";

const saludo = document.querySelector('.texto-saludo');

const annotationSaludo = annotate(saludo, { 
  type: 'underline',
  color: 'yellow',
  animationDuration: 1500 // Duración de la animación en milisegundos
});

annotationSaludo.show();