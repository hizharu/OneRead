 // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Quiz functionality
        function showResult(genre) {
            const results = {
                petualangan: {
                    emoji: '🏔️',
                    title: 'Kamu cocok baca buku petualangan!',
                    text: 'Kamu suka cerita yang penuh aksi dan eksplorasi. Buku-buku petualangan akan membawamu ke dunia yang menarik dan penuh kejutan!'
                },
                misteri: {
                    emoji: '🔍',
                    title: 'Kamu cocok baca buku misteri!',
                    text: 'Kamu punya jiwa detektif! Buku-buku misteri dan thriller akan membuat otakmu terus berpikir dan penasaran sampai halaman terakhir.'
                },
                romantis: {
                    emoji: '💕',
                    title: 'Kamu cocok baca buku romantis!',
                    text: 'Kamu menyukai cerita yang menyentuh hati. Buku-buku romance akan membawamu merasakan berbagai emosi dan kisah cinta yang indah.'
                },
                motivasi: {
                    emoji: '💪',
                    title: 'Kamu cocok baca buku motivasi!',
                    text: 'Kamu selalu ingin berkembang! Buku-buku self-improvement dan motivasi akan membantumu mencapai versi terbaik dari dirimu.'
                }
            };

            const result = results[genre];
            document.getElementById('resultEmoji').textContent = result.emoji;
            document.getElementById('resultTitle').textContent = result.title;
            document.getElementById('resultText').textContent = result.text;
            
            document.getElementById('quizContent').classList.add('hidden');
            document.getElementById('quizResult').classList.remove('hidden');
        }

            function resetQuiz() {
            document.getElementById('quizContent').classList.remove('hidden');
            document.getElementById('quizResult').classList.add('hidden');
        }

        // Smooth scroll
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