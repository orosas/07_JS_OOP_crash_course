

//
// Prototypes
//

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Nota: Get summary
// Al registrar la función como prototype, no se encuentra dentr de los métodos 
// disponibles del objeto, y se muestra en __prototype__. 
// Se realiza en caso de que no se requiera tener la función disponible para todos
// los objetos
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise / Change Year

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an Object
// Nota: Al instanciar un objecto, se ejecutara el codígo dentro de la función
const book1 = new Book('Book One', 'Juan Pérez', '2013');
const book2 = new Book('Libro 2', 'Jane Doe', '2017');

console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());

book2.revise('2002');
console.log(book2);