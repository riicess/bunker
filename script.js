document.addEventListener('DOMContentLoaded', () => {
    // Get radio buttons for tab navigation
    const homeRadio = document.getElementById('radio-1');
    const aboutRadio = document.getElementById('radio-2');

    // Set up arrow navigation
    const arrows = document.querySelectorAll('.arrow-down, .arrow-left, .arrow-right');
    
    // Add click event to all arrows
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            // Stop propagation to prevent card flipping when arrow is clicked
            e.stopPropagation();
            
            // Get target section and index from data attributes
            const targetSection = arrow.getAttribute('data-card-target');
            const targetIndex = parseInt(arrow.getAttribute('data-card-index'));
            
            // Get all cards in the section
            const sectionCards = document.querySelectorAll(`#${targetSection}-content .card`);
            
            // Add exit animation to current active card
            sectionCards.forEach(card => {
                if (card.classList.contains('card-active')) {
                    card.classList.add('card-exit');
                    
                    // Remove the exit and active classes after animation completes
                    setTimeout(() => {
                        card.classList.remove('card-active');
                        card.classList.remove('card-exit');
                    }, 300);
                }
            });
            
            // Direction-specific animations for the target card
            let entranceClass = '';
            if (arrow.classList.contains('arrow-left')) {
                entranceClass = 'card-enter-from-right';
            } else if (arrow.classList.contains('arrow-right')) {
                entranceClass = 'card-enter-from-left';
            } else {
                entranceClass = 'card-enter-from-bottom';
            }
            
            // Add entrance animation to target card after a slight delay
            setTimeout(() => {
                // Add entrance class based on arrow direction
                sectionCards[targetIndex].classList.add(entranceClass);
                
                // Add active class to target card
                sectionCards[targetIndex].classList.add('card-active');
                
                // Remove entrance class after animation completes
                setTimeout(() => {
                    sectionCards[targetIndex].classList.remove(entranceClass);
                }, 300);
                
                // Update arrow direction based on which card is active
                updateArrows(targetSection, targetIndex);
                
                // Show delayed arrows if needed
                if ((targetSection === 'home' && targetIndex === 2) || 
                    (targetSection === 'about' && targetIndex === 2)) {
                    setTimeout(() => {
                        const delayedArrow = sectionCards[targetIndex].querySelector('.delayed-arrow');
                        if (delayedArrow) {
                            delayedArrow.style.opacity = '1';
                            delayedArrow.style.transform = 'translateY(0)';
                        }
                    }, 500);
                }

                // Reset any flipped cards
                const cardInners = document.querySelectorAll('.card-inner');
                cardInners.forEach(inner => {
                    inner.style.transform = 'rotateY(0deg)';
                });
            }, 300);
        });
    });
    
    // Function to update arrow directions based on active card
    function updateArrows(section, activeIndex) {
        const sectionArrows = document.querySelectorAll(`#${section}-content .arrow-down, #${section}-content .arrow-left, #${section}-content .arrow-right`);
        const maxIndex = document.querySelectorAll(`#${section}-content .card`).length - 1;
        
        // Reset all arrows
        sectionArrows.forEach(arrow => {
            // Remove all directional classes first
            arrow.classList.remove('arrow-up', 'arrow-left', 'arrow-right', 'arrow-down');
            
            // Determine original direction class
            if (arrow.classList.contains('arrow-down') || arrow.classList.contains('arrow-up')) {
                arrow.classList.add('arrow-down');
                arrow.querySelector('i').className = 'fas fa-chevron-down';
            } else if (arrow.classList.contains('arrow-left')) {
                arrow.classList.add('arrow-left');
                arrow.querySelector('i').className = 'fas fa-chevron-left';
            } else if (arrow.classList.contains('arrow-right')) {
                arrow.classList.add('arrow-right');
                arrow.querySelector('i').className = 'fas fa-chevron-right';
            }
        });
        
        // If we're at the last card, set the arrow to point up (to first card)
        if (activeIndex === maxIndex) {
            const arrow = document.querySelector(`#${section}-content .card.card-active .arrow-down, 
                                                 #${section}-content .card.card-active .arrow-left,
                                                 #${section}-content .card.card-active .arrow-right`);
            if (arrow) {
                if (arrow.classList.contains('arrow-down')) {
                    arrow.classList.remove('arrow-down');
                    arrow.classList.add('arrow-up');
                    arrow.setAttribute('data-card-index', '0');
                    arrow.querySelector('i').className = 'fas fa-chevron-up';
                } else if (arrow.classList.contains('arrow-left')) {
                    arrow.classList.remove('arrow-left');
                    arrow.classList.add('arrow-right');
                    arrow.setAttribute('data-card-index', '0');
                    arrow.querySelector('i').className = 'fas fa-chevron-right';
                } else if (arrow.classList.contains('arrow-right')) {
                    arrow.classList.remove('arrow-right');
                    arrow.classList.add('arrow-left');
                    arrow.setAttribute('data-card-index', '0');
                    arrow.querySelector('i').className = 'fas fa-chevron-left';
                }
            }
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
            card.classList.remove('card-active', 'card-exit', 'card-enter-from-left', 'card-enter-from-right', 'card-enter-from-bottom');
        });
        
        // Add active class to first card
        sectionCards[0].classList.add('card-active');
        
        // Update arrows
        updateArrows(section, 0);
        
        // Reset any flipped cards
        const cardInners = document.querySelectorAll('.card-inner');
        cardInners.forEach(inner => {
            inner.style.transform = 'rotateY(0deg)';
        });
        
        // Reset any delayed arrows
        const delayedArrows = document.querySelectorAll('.delayed-arrow');
        delayedArrows.forEach(arrow => {
            arrow.style.opacity = '0';
            arrow.style.transform = 'translateY(20px)';
        });
    }
    
    // Prevent arrow click events from triggering card flips
    const cardInnerArrows = document.querySelectorAll('.card-inner .arrow-down, .card-inner .arrow-left, .card-inner .arrow-right');
    cardInnerArrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
    
    // Debug - log to console
    console.log("Enhanced script loaded with card flip animations and old arrow styles");
});