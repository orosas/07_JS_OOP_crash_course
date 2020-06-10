
// Classes. JS ES6

class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
    this.revised = true;
    }

    // Los métodos estáticos no se deben instanciar
    // Y se invocan desde la class. Ejemplo:
    // Book.topBookStore();
    static topBookStore(){
        return 'Barnes & Noble';
    }
}

// Instanciar un Objecto

const book1 = new Book('Libro Uno', 'Juan Pérez', '2001');

console.log(book1); 
book1.revise('1998');
console.log(book1); 

// La siguiente línea llama al método estático topBookStore
console.log(Book.topBookStore())