document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        const serviceType = card.classList[1]; // Obtenez la deuxième classe qui identifie le type de service
        const image =
