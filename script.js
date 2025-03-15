document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});