document.addEventListener('DOMContentLoaded', () => {
    // Get radio buttons and card containers
    const homeRadio = document.getElementById('radio-1');
    const aboutRadio = document.getElementById('radio-2');
    const homeCards = document.querySelector('.home-cards');
    const aboutCards = document.querySelector('.about-cards');

    // Add event listeners to radio buttons
    homeRadio.addEventListener('change', () => {
        if (homeRadio.checked) {
            // Show home cards, hide about cards
            homeCards.classList.add('active');
            aboutCards.classList.remove('active');
        }
    });

    aboutRadio.addEventListener('change', () => {
        if (aboutRadio.checked) {
            // Show about cards, hide home cards
            aboutCards.classList.add('active');
            homeCards.classList.remove('active');
        }
    });

    // Initialize the view based on which radio button is checked by default
    if (homeRadio.checked) {
        homeCards.classList.add('active');
        aboutCards.classList.remove('active');
    } else if (aboutRadio.checked) {
        aboutCards.classList.add('active');
        homeCards.classList.remove('active');
    }
});