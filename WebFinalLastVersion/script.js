/* Elementos que se usaran */
const banner = document.querySelector('header');
const nav = document.querySelector('nav');

/* Añade un evento al scroll */
window.addEventListener('scroll', () => {

    if (window.scrollY > 40) {

        /* Cambia la altura del banner */
        banner.style.height = '40px';
        nav.classList.add('scroll_activo');

    } else {

        /* Cambia la propiedad de altura al banner a la que tiene por defecto*/
        banner.style.height = '80px';

        /* Añade la clase de scroll activo al nav*/
        nav.classList.remove('scroll_activo');

    }

});









/* Sección de memes */

const slider = document.getElementById("slider");
/* Lo de los circulos debo añadirlo */

/* Lista de imagenes de la sección de memes */
/* Hay memes de videojuegos, programación y memes famosos. */

// Meme actual del diccionario

let numeroMeme = 0;



function cambiarMeme(direccion) {

    slider.style.transform = 'translateX(${-numeroMeme'
    

}


/* En el de famosos meto el de chill de cojones algunos */
/* Meto algunos del lol en el de videojuegos*/


/* Añadir selector de seccion de tipo de memes */



/* Suavizar cuando se mueven las cosas al hacer el scroll*/