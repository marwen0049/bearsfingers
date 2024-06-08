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
