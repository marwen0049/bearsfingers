$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000, // Change the duration of each slide (in milliseconds)
        nav: false,
        dots: true
    });

    // Animation au survol des cartes de service
    $('.service-card').hover(
        function() {
            $(this).addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).removeClass('animate__animated animate__pulse');
        }
    );

    // Animation des conteneurs au défilement
    $(window).scroll(function() {
        $('.container').each(function() {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });

    // Animation de neige en arrière-plan
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let width, height;
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const snowflakes = [];
    function createSnowflakes() {
        const amount = Math.floor(width / 10);
        for (let i = 0; i < amount; i++) {
            snowflakes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                opacity: Math.random(),
                speedX: Math.random() * 5,
                speedY: Math.random() * 3 + 2,
                radius: Math.random() * 4 + 1
            });
        }
    }
    createSnowflakes();

    function updateSnowflakes() {
        for (let flake of snowflakes) {
            flake.x += flake.speedX;
            flake.y += flake.speedY;

            if (flake.x > width) flake.x = 0;
            if (flake.y > height) flake.y = 0;
        }
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, width, height);
        for (let flake of snowflakes) {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.fill();
        }
    }

    function animate() {
        updateSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(animate);
    }
    animate();
});
