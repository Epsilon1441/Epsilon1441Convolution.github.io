let slideIndex = 0; // Iniciar en el primer slide

function mostrarSlides() {
    const slides = document.querySelectorAll('.slide'); // Seleccionar todos los slides
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none'; // Mostrar el slide actual
    });
}

function cambiarSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n; // Cambiar el índice del slide

    // Asegurarse de que el índice está dentro del rango
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Si es mayor que el número de slides, volver al primer slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Si es menor que 0, ir al último slide
    }

    mostrarSlides(); // Mostrar el slide correspondiente
}

// Mostrar el primer slide al cargar la página
mostrarSlides();








