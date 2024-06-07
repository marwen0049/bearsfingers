document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        const serviceType = card.classList[1]; // Obtenez la deuxième classe qui identifie le type de service
        const image = card.querySelector('.service-image');
        switch (serviceType) {
            case 'graphic-design':
                image.style.animation = 'vibrate-graphic-design 0.3s infinite'; // Animation spécifique pour le design graphique
                break;
            case 'branding':
                image.style.animation = 'vibrate-branding 0.3s infinite'; // Animation spécifique pour le branding
                break;
            // Ajoutez d'autres cas pour d'autres types de services si nécessaire
            default:
                image.style.animation = 'vibrate 0.3s infinite'; // Animation par défaut
        }
    });
    card.addEventListener('mouseout', () => {
        const image = card.querySelector('.service-image');
        image.style.animation = 'move 2s infinite alternate'; // Réinitialisez l'animation lorsqu'on quitte le survol
    });
});
