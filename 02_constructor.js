

//
// Constructor
//

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instantiate an Object
// Nota: Al instanciar un objecto, se ejecutara el codígo dentro de la función
const book1 = new Book('Book One', 'Juan Pérez', '2013');
const book2 = new Book('Libro 2', 'Jane Doe', '2020');

console.log(book2);

