document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('nav-mobile');

    hamburger.addEventListener('click', () => {
        navMobile.classList.toggle('open');
    });
});
