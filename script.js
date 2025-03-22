document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const homeRadio = document.getElementById('radio-1');
    const aboutRadio = document.getElementById('radio-2');
    const homeContent = document.getElementById('home-content');
    const aboutContent = document.getElementById('about-content');

    // Add event listeners to radio buttons
    homeRadio.addEventListener('change', () => {
        homeContent.classList.add('active');
        aboutContent.classList.remove('active');
    });

    aboutRadio.addEventListener('change', () => {
        aboutContent.classList.add('active');
        homeContent.classList.remove('active');
    });

    // Set initial state
    if (homeRadio.checked) {
        homeContent.classList.add('active');
        aboutContent.classList.remove('active');
    } else if (aboutRadio.checked) {
        aboutContent.classList.add('active');
        homeContent.classList.remove('active');
    }

    // Debug - log to console
    console.log("Script loaded");
    console.log("Home radio checked:", homeRadio.checked);
    console.log("About radio checked:", aboutRadio.checked);
});