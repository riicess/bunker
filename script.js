document.addEventListener('DOMContentLoaded', () => {
    // Redirect to "home" if the current path is the root
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        window.location.replace('/home');
    }
});
