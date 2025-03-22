document.addEventListener('DOMContentLoaded', () => {
    // Redirect to "home" if the current path is the root or the root of the "bunker" directory
    if (window.location.pathname === '/' || window.location.pathname === '' || window.location.pathname === '/bunker' || window.location.pathname === '/bunker/') {
        window.location.replace('/bunker/home');
    }

    const menuButton = document.getElementById('menuButton');
    const hiddenMenu = document.getElementById('hiddenMenu');

    menuButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from bubbling to document
        hiddenMenu.classList.toggle('show');
    });

    // Close the menu if clicking outside
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !hiddenMenu.contains(event.target)) {
            hiddenMenu.classList.remove('show');
        }
    });
});
