document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    console.log("DOM entièrement chargé");

    if (hamburgerMenu) {
        console.log("Bouton hamburger trouvé");

        hamburgerMenu.addEventListener('click', function() {
            console.log("Bouton hamburger cliqué");
            mobileMenu.classList.toggle('open');
        });
    } else {
        console.log("Bouton hamburger non trouvé");
    }
});
