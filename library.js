const books = [
    { title: "The Great Gatsby", category: "Fiction", borrowed: false },
    { title: "A Brief History of Time", category: "Science", borrowed: true },
    { title: "The Art of War", category: "Philosophy", borrowed: false },
    { title: "the war", category: "Philosophy", borrowed: false },
    { title: "The Experiment", category: "Science", borrowed: false },
];

const bookList = document.getElementById('book-list');
const searchInput = document.getElementById('search');

function displayBooks(filter = '') {
    bookList.innerHTML = '';
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));
    filteredBooks.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Category: ${book.category}</p>
            <p>Borrowed: ${book.borrowed ? 'Yes' : 'No'}</p>
            <button class="borrow-button ${book.borrowed ? 'borrowed' : ''}" onclick="toggleBorrowed(${index})">
                ${book.borrowed ? 'Return' : 'Borrow'}
            </button>
        `;
        bookList.appendChild(bookDiv);
    });
}

function toggleBorrowed(index) {
    books[index].borrowed = !books[index].borrowed;
    displayBooks(searchInput.value);
}

searchInput.addEventListener('input', (e) => {
    displayBooks(e.target.value);
});

displayBooks();
