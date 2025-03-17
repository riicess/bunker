document.addEventListener('DOMContentLoaded', () => {
    // Redirect to "home" if the current path is the root or the root of the "bunker" directory
    if (window.location.pathname === '/' || window.location.pathname === '' || window.location.pathname === '/bunker' || window.location.pathname === '/bunker/') {
        window.location.replace('/bunker/home');
    }

    const scrolldown = document.getElementById('scrolldown');
    const hiddenMenu = document.getElementById('hiddenMenu');
    let holdTimeout;

    scrolldown.addEventListener('mousedown', () => {
        holdTimeout = setTimeout(() => {
            hiddenMenu.classList.add('active');
        }, 1000); // 1 second hold to show the menu
    });

    scrolldown.addEventListener('mouseup', () => {
        clearTimeout(holdTimeout);
    });

    scrolldown.addEventListener('mouseleave', () => {
        clearTimeout(holdTimeout);
    });
});
