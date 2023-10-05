const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton'); // Agrega el botón "Atrás"

let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function updateNavigation() {
    if (currentSlideIndex === slides.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
    if (currentSlideIndex === 0) {
        prevButton.style.display = 'none'; // Ocultar el botón "Atrás" en el primer slide
    } else {
        prevButton.style.display = 'block'; // Mostrar el botón "Atrás" en otros slides
    }
}

function goToNextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
        updateNavigation();
    }
}

function goToPrevSlide() { // Función para retroceder al slide anterior
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
        updateNavigation();
    }
}

showSlide(currentSlideIndex);
updateNavigation();

nextButton.addEventListener('click', () => {
    goToNextSlide();
});

prevButton.addEventListener('click', () => { // Agregar evento para el botón "Atrás"
    goToPrevSlide();
});

// Agrega un evento de escucha de teclado al documento
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        // Tecla izquierda (código 37)
        // Agrega aquí la lógica para retroceder
        goToPrevSlide();
    } else if (event.keyCode === 39) {
        // Tecla derecha (código 39)
        // Agrega aquí la lógica para avanzar
        goToNextSlide();
    }
});
