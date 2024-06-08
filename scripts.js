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

    // Gestion du menu pour mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Gestion du thème
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (root.getAttribute('data-theme') === 'dark') {
            root.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            root.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Initialiser à nouveau le carrousel (si nécessaire)
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    // Gestion de l'affichage du menu en fonction de la taille de la fenêtre
    const adjustMenuDisplay = () => {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            navLinks.classList.contains('active') ? navLinks.style.display = 'flex' : navLinks.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            navLinks.style.display = 'flex';
        }
    };

    // Écouteurs d'événements pour ajuster le menu au redimensionnement et au chargement de la page
    window.addEventListener('resize', adjustMenuDisplay);
    window.addEventListener('load', adjustMenuDisplay);

    // Appeler immédiatement pour définir l'état initial correct
    adjustMenuDisplay();
});
