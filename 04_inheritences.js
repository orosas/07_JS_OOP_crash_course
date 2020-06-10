//
// Herencia JS ES5
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

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit all Prototypes
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// Use Magazine Constructor, mostrado en __proto__
Magazine.prototype.constructor = Magazine;

console.log(mag1);

