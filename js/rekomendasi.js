        let books = [];
        let currentFilter = 'semua';

        // 🔹 Ambil data dari file JSON
fetch('assets/data/books.json')
  .then(response => {
    if (!response.ok) throw new Error('Gagal memuat data JSON');
    return response.json();
  })
  .then(data => {
    books = data; // simpan ke variabel global
    renderBooks(); // render pertama kali
  })
  .catch(error => console.error('Error:', error));


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
            };
            
            document.getElementById('categoryTitle').textContent = categoryNames[filter];
            
            grid.innerHTML = filteredBooks.map(book => `
                <div class="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
                    <div class="h-64 ${book.gambar} bg-cover bg-center flex items-center justify-center p-8 relative">
                        <div class="absolute inset-0 bg-black/40"></div>
                        <h3 class="relative text-4xl font-bold text-white text-center leading-tight">${book.title}</h3>
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
                            <a href="${book.link}">Selengkapnya</a>
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
                    <div class="h-64 ${book.gambar} bg-cover bg-center flex items-center justify-center p-8 relative">
                        <div class="absolute inset-0 bg-black/40"></div>
                        <h3 class="relative text-4xl font-bold text-white text-center leading-tight">${book.title}</h3>
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
                            <a href="${book.link}">Baca Sekarang</a>
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