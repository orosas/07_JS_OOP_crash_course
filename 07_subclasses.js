// Subclasses. JS ES6

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
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month){
        // Nota: Para llamar al constructor de la clase padre se utiliza super
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine('Revista uno', 'Juan Pérez', '2015', 'Febrero');

console.log(mag1);
console.log(mag1.getSummary());