$(document).ready(function() {
    // Configuration du carrousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000, // Changer de slide toutes les 4 secondes
        autoplayHoverPause: true
    });

    // Animation des images de service
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            const image = card.querySelector('.service-image');
            image.style.animation = 'vibrate 0.3s infinite';
        });
        card.addEventListener('mouseout', () => {
            const image = card.querySelector('.service-image');
            image.style.animation = 'move 2s infinite alternate';
        });
    });

    // Animation des conteneurs au défilement
    $(window).on('scroll', function() {
        $('.container').each(function() {
            var containerTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            if (windowBottom > containerTop + 100) {
                $(this).css('transform', 'translateY(0)').css('opacity', '1');
            } else {
                $(this).css('transform', 'translateY(50px)').css('opacity', '0');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const numberOfSnowflakes = 50; // Nombre de flocons de neige
    const snowflakesContainer = document.getElementById('snowflakes-container');

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Taille aléatoire pour les flocons de neige
        const size = Math.random() * 5 + 5 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;

        // Position horizontale aléatoire
        snowflake.style.left = Math.random() * 100 + 'vw';

        // Durée aléatoire pour l'animation de chute
        const fallDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.animationDuration = fallDuration;

        // Délai aléatoire pour l'animation de chute
        const fallDelay = Math.random() * 5 + 's';
        snowflake.style.animationDelay = fallDelay;

        snowflakesContainer.appendChild(snowflake);
    }

    // Recréez les flocons de neige lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        snowflakesContainer.innerHTML = '';
        for (let i = 0; i < numberOfSnowflakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');

            const size = Math.random() * 5 + 5 + 'px';
            snowflake.style.width = size;
            snowflake.style.height = size;

            snowflake.style.left = Math.random() * 100 + 'vw';

            const fallDuration = Math.random() * 5 + 5 + 's';
            snowflake.style.animationDuration = fallDuration;

            const fallDelay = Math.random() * 5 + 's';
            snowflake.style.animationDelay = fallDelay;

            snowflakesContainer.appendChild(snowflake);
        }
    });
});

