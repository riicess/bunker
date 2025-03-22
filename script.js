document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const hiddenMenu = document.getElementById('hiddenMenu');

    menuButton.addEventListener('click', () => {
        hiddenMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !hiddenMenu.contains(event.target)) {
            hiddenMenu.classList.remove('show');
        }
    });
});
