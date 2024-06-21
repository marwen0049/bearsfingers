    <footer>
        <p>&copy; 2024 Big Bears Marketing Agency. Tous droits réservés.</p>
        <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true
            });

            $(window).on('scroll', function() {
                $('.container').each(function() {
                    if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                        $(this).css('transform', 'translateY(0)').css('opacity', '1');
                    }
                });
            });

            $('#dark-mode-toggle').click(function() {
                $('body').toggleClass('dark-mode');
                const icon = $(this).find('i');
                icon.toggleClass('fa-moon fa-sun');
            });
        });
    </script>
</body>
</html>
