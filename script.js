document.addEventListener('DOMContentLoaded', () => {
    // Get radio buttons for tab navigation
    const homeRadio = document.getElementById('radio-1');
    const aboutRadio = document.getElementById('radio-2');

    // Set up arrow navigation
    const arrows = document.querySelectorAll('.arrow-down');
    
    // Add click event to all arrows
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            // Get target section and index from data attributes
            const targetSection = arrow.getAttribute('data-card-target');
            const targetIndex = parseInt(arrow.getAttribute('data-card-index'));
            
            // Get all cards in the section
            const sectionCards = document.querySelectorAll(`#${targetSection}-content .card`);
            
            // Remove active class from all cards
            sectionCards.forEach(card => {
                card.classList.remove('card-active');
            });
            
            // Add active class to target card
            sectionCards[targetIndex].classList.add('card-active');
            
            // Update arrow direction based on which card is active
            updateArrows(targetSection, targetIndex);
        });
    });
    
    // Function to update arrow directions based on active card
    function updateArrows(section, activeIndex) {
        const sectionArrows = document.querySelectorAll(`#${section}-content .arrow-down`);
        const maxIndex = sectionArrows.length - 1;
        
        // If we're at the last card, set the arrow to point up (to first card)
        if (activeIndex === maxIndex) {
            sectionArrows[activeIndex].classList.add('arrow-up');
            sectionArrows[activeIndex].setAttribute('data-card-index', '0');
            sectionArrows[activeIndex].querySelector('i').className = 'fas fa-chevron-up';
        } 
        // If we're at the first card, set the arrow to point down (to next card)
        else {
            sectionArrows[activeIndex].classList.remove('arrow-up');
            sectionArrows[activeIndex].setAttribute('data-card-index', (activeIndex + 1).toString());
            sectionArrows[activeIndex].querySelector('i').className = 'fas fa-chevron-down';
        }
    }
    
    // Handle tab switching
    homeRadio.addEventListener('change', () => {
        // Reset cards to first card when switching tabs
        resetCardsToFirst('home');
    });
    
    aboutRadio.addEventListener('change', () => {
        // Reset cards to first card when switching tabs
        resetCardsToFirst('about');
    });
    
    // Function to reset cards to first card
    function resetCardsToFirst(section) {
        const sectionCards = document.querySelectorAll(`#${section}-content .card`);
        
        // Remove active class from all cards
        sectionCards.forEach(card => {
            card.classList.remove('card-active');
        });
        
        // Add active class to first card
        sectionCards[0].classList.add('card-active');
        
        // Update arrows
        updateArrows(section, 0);
    }
    
    // Debug - log to console
    console.log("Script loaded");
});