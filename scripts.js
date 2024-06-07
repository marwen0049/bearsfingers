$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    // Afficher la popup lorsque vous cliquez sur une image de service
    document.querySelectorAll('.service-image').forEach(image => {
        image.addEventListener('click', () => {
            const serviceType = image.parentElement.id;
            const popup = document.querySelector(`.${serviceType}-popup`);
            popup.style.display = 'block';
        });
    });

    // Fermer la popup lorsque vous cliquez en dehors du contenu
    document.querySelectorAll('.service-popup').forEach(popup => {
        popup.addEventListener('click', (event) => {
            if (!event.target.closest('.popup-content')) {
                popup.style.display = 'none';
            }
        });
    });

    // Animation de la souris sur les cartes de service
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
});
