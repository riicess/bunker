document.addEventListener('DOMContentLoaded', () => {
    // Get radio buttons for tab navigation
    const projectsRadio = document.getElementById('radio-3');
    const homeRadio = document.getElementById('radio-1');
    const aboutRadio = document.getElementById('radio-2');
    const skillsRadio = document.getElementById('radio-4');

    // Apply proper arrow styles to all arrows initially
    applyArrowStyles();

    // Set up arrow navigation
    const arrows = document.querySelectorAll('.arrow-down, .arrow-left, .arrow-right, .arrow-up');
    
    // Add click event to all arrows
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            // Stop propagation to prevent card flipping when arrow is clicked
            e.stopPropagation();
            
            // Get target section and index from data attributes
            const targetSection = arrow.getAttribute('data-card-target');
            const targetIndex = parseInt(arrow.getAttribute('data-card-index'));
            
            // Handle section switching
            if (targetSection === 'home' && arrow.classList.contains('arrow-right')) {
                projectsRadio.checked = true;
            } else if (targetSection === 'about' && arrow.classList.contains('arrow-right')) {
                skillsRadio.checked = true;
            }

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
                showDelayedArrow(targetSection, targetIndex);

                // Reset any flipped cards
                const cardInners = document.querySelectorAll('.card-inner');
                cardInners.forEach(inner => {
                    inner.style.transform = 'rotateY(0deg)';
                });

                // Reapply arrow styles after card change
                applyArrowStyles();
            }, 300);
        });
    });
    
    // Update arrow click handler
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const targetSection = arrow.getAttribute('data-card-target');
            const targetIndex = parseInt(arrow.getAttribute('data-card-index'));
            
            // Handle section switching with correct direction
            if (arrow.classList.contains('arrow-right')) {
                if (targetSection === 'home') {
                    projectsRadio.checked = true;
                } else if (targetSection === 'about') {
                    skillsRadio.checked = true;
                }
            } else if (arrow.classList.contains('arrow-left')) {
                if (targetSection === 'home') {
                    projectsRadio.checked = true;
                } else if (targetSection === 'about') {
                    skillsRadio.checked = true;
                }
            }
            
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
                showDelayedArrow(targetSection, targetIndex);

                // Reset any flipped cards
                const cardInners = document.querySelectorAll('.card-inner');
                cardInners.forEach(inner => {
                    inner.style.transform = 'rotateY(0deg)';
                });

                // Reapply arrow styles after card change
                applyArrowStyles();
            }, 300);
        });
    });

    // Fix for arrow navigation
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetSection = arrow.getAttribute('data-card-target');
            const targetIndex = parseInt(arrow.getAttribute('data-card-index'));
            const sectionCards = document.querySelectorAll(`#${targetSection}-content .card`);
            sectionCards.forEach(card => card.classList.remove('card-active'));
            sectionCards[targetIndex].classList.add('card-active');
            applyArrowStyles();
        });
    });

    // Fix for hover-related issues - Update to handle expand animation
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Remove any existing transitions
            card.style.transition = 'all 0.3s ease';
            card.classList.add('expanded');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('expanded');
        });
    });

    // Remove the old flip card event listeners
    const oldFlipCards = document.querySelectorAll('.flip-card-inner');
    oldFlipCards.forEach(card => {
        card.style.transform = 'none';
    });

    // Remove flip card related event listeners
    document.querySelectorAll('.expandable-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Add click handlers for expandable cards
    document.querySelectorAll('.expandable-card, .fancy-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.title').textContent;
            const subtitle = card.querySelector('p:not(.title)')?.textContent || '';
            
            const overlay = document.createElement('div');
            overlay.className = 'card-overlay';
            overlay.innerHTML = `
                <div class="overlay-content">
                    <h2 style="color: #00ffcc; font-size: 24px;">${title}</h2>
                    <p style="color: #f0f0f0; margin-top: 20px;">${subtitle}</p>
                    <div class="skill-icons">
                        <div class="skill-icon">
                            <img src="icons/html.png" alt="HTML">
                            <div class="skill-tooltip">HTML: Building web structure</div>
                        </div>
                        <div class="skill-icon">
                            <img src="icons/css.png" alt="CSS">
                            <div class="skill-tooltip">CSS: Styling and animations</div>
                        </div>
                        <div class="skill-icon">
                            <img src="icons/js.png" alt="JavaScript">
                            <div class="skill-tooltip">JavaScript: Interactive features</div>
                        </div>
                    </div>
                    <div class="close-overlay">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            `;
            
            document.body.appendChild(overlay);
            requestAnimationFrame(() => overlay.classList.add('active'));
            
            overlay.querySelector('.close-overlay').addEventListener('click', () => {
                overlay.classList.remove('active');
                setTimeout(() => overlay.remove(), 300);
            });
        });
    });

    // Function to apply consistent styling to all arrows
    function applyArrowStyles() {
        // Select all arrows
        const allArrows = document.querySelectorAll('.arrow-down, .arrow-left, .arrow-right, .arrow-up');
        
        allArrows.forEach(arrow => {
            // First remove any position-specific inline styles that might interfere
            arrow.style.position = '';
            arrow.style.bottom = '';
            arrow.style.left = '';
            arrow.style.right = '';
            arrow.style.top = '';
            arrow.style.transform = '';
            
            // Make sure each arrow has the right icon
            const iconElement = arrow.querySelector('i');
            if (iconElement) {
                if (arrow.classList.contains('arrow-down')) {
                    iconElement.className = 'fas fa-chevron-down';
                } else if (arrow.classList.contains('arrow-up')) {
                    iconElement.className = 'fas fa-chevron-up';
                } else if (arrow.classList.contains('arrow-left')) {
                    iconElement.className = 'fas fa-chevron-left';
                } else if (arrow.classList.contains('arrow-right')) {
                    iconElement.className = 'fas fa-chevron-right';
                }
            }
        });
    }
    
    // Function to update arrow directions based on active card
    function updateArrows(section, activeIndex) {
        const sectionArrows = document.querySelectorAll(`#${section}-content .arrow-down, #${section}-content .arrow-left, #${section}-content .arrow-right, #${section}-content .arrow-up`);
        const maxIndex = document.querySelectorAll(`#${section}-content .card`).length - 1;
        
        // Reset all arrows - keep their original classes
        sectionArrows.forEach(arrow => {
            // Determine and maintain original direction class
            let originalDirection = '';
            if (arrow.classList.contains('arrow-down')) originalDirection = 'down';
            else if (arrow.classList.contains('arrow-up')) originalDirection = 'up';
            else if (arrow.classList.contains('arrow-left')) originalDirection = 'left';
            else if (arrow.classList.contains('arrow-right')) originalDirection = 'right';
            
            // Reset to original direction
            arrow.className = `arrow-${originalDirection}`;
            
            // Reset delayed-arrow class if it had one
            if (originalDirection === 'left' || originalDirection === 'right') {
                if (arrow.hasAttribute('data-delayed')) {
                    arrow.classList.add('delayed-arrow');
                }
            }
            
            // Set proper icon
            let iconClass = 'fas fa-chevron-';
            switch(originalDirection) {
                case 'down': iconClass += 'down'; break;
                case 'up': iconClass += 'up'; break;
                case 'left': iconClass += 'left'; break;
                case 'right': iconClass += 'right'; break;
            }
            
            // Update icon
            const iconElement = arrow.querySelector('i');
            if (iconElement) {
                iconElement.className = iconClass;
            }
        });
        
        // If we're at the last card, update arrow direction
        if (activeIndex === maxIndex) {
            const arrow = document.querySelector(`#${section}-content .card.card-active .arrow-down, 
                                                 #${section}-content .card.card-active .arrow-left,
                                                 #${section}-content .card.card-active .arrow-right`);
            if (arrow) {
                if (arrow.classList.contains('arrow-down')) {
                    arrow.classList.remove('arrow-down');
                    arrow.classList.add('arrow-up');
                    arrow.setAttribute('data-card-index', '0');
                    
                    const iconElement = arrow.querySelector('i');
                    if (iconElement) {
                        iconElement.className = 'fas fa-chevron-up';
                    }
                } else if (arrow.classList.contains('arrow-left')) {
                    arrow.classList.remove('arrow-left');
                    arrow.classList.add('arrow-right');
                    arrow.setAttribute('data-card-index', '0');
                    
                    const iconElement = arrow.querySelector('i');
                    if (iconElement) {
                        iconElement.className = 'fas fa-chevron-right';
                    }
                } else if (arrow.classList.contains('arrow-right')) {
                    arrow.classList.remove('arrow-right');
                    arrow.classList.add('arrow-left');
                    arrow.setAttribute('data-card-index', '0');
                    
                    const iconElement = arrow.querySelector('i');
                    if (iconElement) {
                        iconElement.className = 'fas fa-chevron-left';
                    }
                }
            }
        }
        
        // Reapply arrow styles after updating directions
        applyArrowStyles();
    }
    
    // Function to show delayed arrow
    function showDelayedArrow(targetSection, targetIndex) {
        if ((targetSection === 'home' && targetIndex === 2) || 
            (targetSection === 'about' && targetIndex === 2)) {
            setTimeout(() => {
                const delayedArrow = document.querySelector(`#${targetSection}-content .delayed-arrow`);
                if (delayedArrow) {
                    delayedArrow.classList.add('visible');
                }
            }, 500);
        }
    }

    // Handle tab switching
    projectsRadio.addEventListener('change', () => {
        resetCardsToFirst('projects');
    });
    
    homeRadio.addEventListener('change', () => {
        resetCardsToFirst('home');
    });
    
    aboutRadio.addEventListener('change', () => {
        resetCardsToFirst('about');
    });
    
    skillsRadio.addEventListener('change', () => {
        resetCardsToFirst('skills');
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
        
        // Reset any expanded cards
        const flipCards = document.querySelectorAll('.flip-card');
        flipCards.forEach(card => {
            card.classList.remove('expanded');
        });

        // Reset expanded cards
        const expandableCards = document.querySelectorAll('.expandable-card');
        expandableCards.forEach(card => {
            card.style.transform = 'scale(1)';
        });
        
        // Reapply arrow styles
        applyArrowStyles();
    }
    
    // Prevent arrow click events from triggering card flips
    const cardInnerArrows = document.querySelectorAll('.card-inner .arrow-down, .card-inner .arrow-left, .card-inner .arrow-right');
    cardInnerArrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
    
    // Initial application of arrow styles
    applyArrowStyles();
    
    // Debug - log to console
    console.log("Enhanced script loaded with fixed card flip animations and consistent arrow styles");
});

// Update arrow click handler
arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const targetSection = arrow.getAttribute('data-card-target');
        
        // Update radio button selection based on section
        if (targetSection === 'projects') {
            projectsRadio.checked = true;
        } else if (targetSection === 'home') {
            homeRadio.checked = true;
        } else if (targetSection === 'about') {
            aboutRadio.checked = true;
        } else if (targetSection === 'skills') {
            skillsRadio.checked = true;
        }
        
        // Rest of click handler...
    });
});