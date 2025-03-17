function switchCard() {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    card1.style.opacity = '0';
    setTimeout(() => {
        card1.style.display = 'none';
        card2.style.display = 'flex';
        card2.style.transform = 'translate(-50%, -50%) scale(1)'; // Scale up to normal size
        setTimeout(() => {
            card2.style.opacity = '1';
        }, 10);
    }, 300);
}
