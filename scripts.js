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
