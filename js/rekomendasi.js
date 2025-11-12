// Data Buku
        const books = [
            {
                title: "Laskar Pelangi",
                author: "Andrea Hirata",
                genre: "fiksi",
                category: "Drama, Pendidikan",
                rating: 4.8,
                gradient: "from-blue-400 to-green-400",
                description: "Kisah inspiratif tentang perjuangan anak-anak di Belitung untuk mendapatkan pendidikan."
            },
            {
                title: "Negeri 5 Menara",
                author: "Ahmad Fuadi",
                genre: "motivasi",
                category: "Inspiratif, Motivasi",
                rating: 4.9,
                gradient: "from-yellow-400 to-orange-400",
                description: "Perjalanan seorang santri dalam mengejar mimpi hingga ke negeri-negeri jauh."
            },
            {
                title: "Bumi Manusia",
                author: "Pramoedya Ananta Toer",
                genre: "sejarah",
                category: "Sejarah, Fiksi",
                rating: 4.7,
                gradient: "from-green-400 to-teal-400",
                description: "Novel klasik tentang kehidupan di masa kolonial Hindia Belanda yang penuh intrik."
            },
            {
                title: "Sang Pemimpi",
                author: "Andrea Hirata",
                genre: "fiksi",
                category: "Drama, Inspiratif",
                rating: 4.6,
                gradient: "from-purple-400 to-pink-400",
                description: "Lanjutan Laskar Pelangi tentang mimpi tiga sahabat untuk pergi ke Paris."
            },
            {
                title: "Ayat-Ayat Cinta",
                author: "Habiburrahman El Shirazy",
                genre: "fiksi",
                category: "Romance, Religi",
                rating: 4.5,
                gradient: "from-red-400 to-pink-400",
                description: "Kisah cinta yang penuh dengan nilai-nilai keislaman dan kehidupan di Mesir."
            },
            {
                title: "Perahu Kertas",
                author: "Dee Lestari",
                genre: "fiksi",
                category: "Romance, Kehidupan",
                rating: 4.4,
                gradient: "from-cyan-400 to-blue-400",
                description: "Perjalanan cinta Keenan dan Kugy yang penuh warna dan mimpi."
            },
            {
                title: "Filosofi Teras",
                author: "Henry Manampiring",
                genre: "non-fiksi",
                category: "Self-Help, Filosofi",
                rating: 4.8,
                gradient: "from-indigo-400 to-purple-400",
                description: "Penerapan filosofi Stoic untuk kehidupan sehari-hari yang lebih tenang."
            },
            {
                title: "Atomic Habits",
                author: "James Clear",
                genre: "motivasi",
                category: "Self-Improvement",
                rating: 4.9,
                gradient: "from-orange-400 to-red-400",
                description: "Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan yang buruk."
            },
            {
                title: "Ronggeng Dukuh Paruk",
                author: "Ahmad Tohari",
                genre: "fiksi",
                category: "Budaya, Drama",
                rating: 4.7,
                gradient: "from-amber-400 to-yellow-400",
                description: "Kisah tragis seorang ronggeng di desa terpencil Jawa."
            },
            {
                title: "Sapiens",
                author: "Yuval Noah Harari",
                genre: "non-fiksi",
                category: "Sejarah, Sains",
                rating: 4.8,
                gradient: "from-slate-400 to-gray-400",
                description: "Sejarah singkat tentang evolusi manusia dari zaman batu hingga era modern."
            },
            {
                title: "Cantik Itu Luka",
                author: "Eka Kurniawan",
                genre: "fiksi",
                category: "Sastra, Magis Realis",
                rating: 4.6,
                gradient: "from-rose-400 to-red-400",
                description: "Epik keluarga yang penuh dengan realisme magis khas Indonesia."
            },
            {
                title: "The Subtle Art of Not Giving a F*ck",
                author: "Mark Manson",
                genre: "motivasi",
                category: "Self-Help, Motivasi",
                rating: 4.5,
                gradient: "from-gray-400 to-zinc-400",
                description: "Pendekatan berbeda tentang menjalani hidup yang lebih baik."
            }
        ];

        let currentFilter = 'semua';

        // Render Books
        function renderBooks(filter = 'semua') {
            const grid = document.getElementById('booksGrid');
            const filteredBooks = filter === 'semua' 
                ? books 
                : books.filter(book => book.genre === filter);
            
            document.getElementById('bookCount').textContent = filteredBooks.length;
            
            const categoryNames = {
                'semua': 'Semua Buku',
                'fiksi': 'Buku Fiksi',
                'non-fiksi': 'Buku Non-Fiksi',
                'motivasi': 'Buku Motivasi',
                'sejarah': 'Buku Sejarah',
                'petualangan': 'Buku Petualangan'
            };
            
            document.getElementById('categoryTitle').textContent = categoryNames[filter];
            
            grid.innerHTML = filteredBooks.map(book => `
                <div class="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
                    <div class="h-48 bg-gradient-to-br ${book.gradient} flex items-center justify-center p-6">
                        <h3 class="text-2xl font-bold text-white text-center leading-tight">${book.title}</h3>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold mb-2 line-clamp-1">${book.title}</h3>
                        <p class="text-gray-600 text-sm mb-1">${book.category}</p>
                        <p class="text-sm text-gray-500 mb-3">${book.author}</p>
                        <div class="flex items-center mb-3">
                            <span class="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                            <span class="text-xs text-gray-600 ml-2">(${book.rating}/5)</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-4 line-clamp-2">${book.description}</p>
                        <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold">
                            Baca Sekarang
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Filter Books
        function filterBooks(category) {
            currentFilter = category;
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderBooks(category);
        }

        // Search Function
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm) ||
                book.category.toLowerCase().includes(searchTerm)
            );
            
            const grid = document.getElementById('booksGrid');
            document.getElementById('bookCount').textContent = filteredBooks.length;
            
            grid.innerHTML = filteredBooks.map(book => `
                <div class="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
                    <div class="h-48 bg-gradient-to-br ${book.gradient} flex items-center justify-center p-6">
                        <h3 class="text-2xl font-bold text-white text-center leading-tight">${book.title}</h3>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-bold mb-2 line-clamp-1">${book.title}</h3>
                        <p class="text-gray-600 text-sm mb-1">${book.category}</p>
                        <p class="text-sm text-gray-500 mb-3">${book.author}</p>
                        <div class="flex items-center mb-3">
                            <span class="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                            <span class="text-xs text-gray-600 ml-2">(${book.rating}/5)</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-4 line-clamp-2">${book.description}</p>
                        <button class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold">
                            Baca Sekarang
                        </button>
                    </div>
                </div>
            `).join('');
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Initial render
        renderBooks();