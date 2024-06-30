$(document).ready(function() {
    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });

    // Dark Mode Toggle
    $("#dark-mode-toggle").click(function() {
        $("body").toggleClass("dark-mode");
        $(this).find("i").toggleClass("fa-moon fa-sun");
    });

    // Hamburger Menu Toggle
    $("#hamburger-menu").click(function() {
        $("nav ul.main-menu").slideToggle();
    });

    // Initialize Snowfall Effect
    $(document).snowfall({
        flakeCount: 100,        // Number of snowflakes
        flakeColor: '#FFFFFF',  // Color of snowflakes
        flakeIndex: 999999,     // z-index for snowflakes
        minSize: 1,             // Minimum size of snowflakes
        maxSize: 3,             // Maximum size of snowflakes
        minSpeed: 1,            // Minimum speed of snowflakes
        maxSpeed: 3             // Maximum speed of snowflakes
    });
});
