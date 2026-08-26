function borrowBook(books, studentId, bookId) {
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return "Book not found";
    }

    if (book.available === false) {
        return "Book is already borrowed";
    }

    if (book.borrowedBy !== null) {
        return "Book is already borrowed";
    }

    book.available = false;
    book.borrowedBy = studentId;

    return `Book "${book.title}" borrowed successfully`;
}

const books = [
    {
        id: 101,
        title: "Database Management System",
        available: true,
        borrowedBy: null
    },
    {
        id: 102,
        title: "Computer Networks",
        available: false,
        borrowedBy: "ST202501"
    },
    {
        id: 103,
        title: "Operating System",
        available: true,
        borrowedBy: null
    }
];

console.log(borrowBook(books, "ST202502", 103));
 // console.log(books);