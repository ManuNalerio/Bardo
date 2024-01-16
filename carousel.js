$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // El ancho máximo de pantalla en el que se aplicarán los cambios (ajusta según tus necesidades)
                settings: {
                    slidesToShow: 2, // Cambia el número de elementos mostrados en dispositivos móviles
                }
            },
            {
                breakpoint: 480, // Otro ancho máximo de pantalla en el que se aplicarán cambios adicionales (ajusta según tus necesidades)
                settings: {
                    slidesToShow: 2, // Cambia el número de elementos mostrados en pantallas más pequeñas
                }
            }
        ]
      });
      
  });
 