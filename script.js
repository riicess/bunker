document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // Redirect to "home" if the current path is the root
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        window.location.replace('/home');
    }
});