$(document).ready(function() {
    // Charger le header et le footer
    $('#header').load('header.html', function() {
        // Ajout des événements après le chargement du header
        // Basculer le mode sombre
        $('.dark-mode-toggle').on('click', function() {
            $('body').toggleClass('dark-mode');
            $('header').toggleClass('dark-mode');
            var icon = $(this).find('i');
            if ($('body').hasClass('dark-mode')) {
                icon.removeClass('fa-moon').addClass('fa-sun');
            } else {
                icon.removeClass('fa-sun').addClass('fa-moon');
            }
        });

        // Afficher le menu en cliquant sur le logo sur les mobiles et tablettes
        $('.logo').on('click', function() {
            if ($(window).width() <= 768) {
                $('nav ul').toggleClass('active');
            }
        });

        // Cacher le menu si on clique en dehors de celui-ci
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.logo, nav').length) {
                if ($(window).width() <= 768) {
                    $('nav ul').removeClass('active');
                }
            }
        });
    });

    $('#footer').load('footer.html');

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
                $(this).css('transform
