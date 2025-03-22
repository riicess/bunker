document.addEventListener('DOMContentLoaded', () => {
    // Redirect to "home" if the current path is the root or the root of the "bunker" directory
    if (window.location.pathname === '/' || window.location.pathname === '' || window.location.pathname === '/bunker' || window.location.pathname === '/bunker/') {
        window.location.replace('/bunker/home');
    }

    const menuButton = document.getElementById('menuButton');
    const hiddenMenu = document.getElementById('hiddenMenu');

    menuButton.addEventListener('click', () => {
        hiddenMenu.classList.toggle('active');
    });
});
