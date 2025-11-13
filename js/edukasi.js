// Accordion functionality
        function toggleAccordion(index) {
            const accordions = document.querySelectorAll('.accordion-content');
            const icons = document.querySelectorAll('.accordion-icon');
            const currentAccordion = accordions[index];
            const currentIcon = icons[index];
            
            // Close all other accordions
            accordions.forEach((accordion, i) => {
                if (i !== index) {
                    accordion.classList.remove('active');
                    icons[i].textContent = '+';
                }
            });
            
            // Toggle current accordion
            if (currentAccordion.classList.contains('active')) {
                currentAccordion.classList.remove('active');
                currentIcon.textContent = '+';
            } else {
                currentAccordion.classList.add('active');
                currentIcon.textContent = '−';
            }
        }
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });