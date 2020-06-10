
// Object of Prototypes JS ES5

const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`; 
    }, 
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object, forma 1
// const book1 = Object.create(bookProtos);
// book1.title = 'Libro Uno';
// book1.author = 'John Doe';
// book1.year = '2012';

// Create Object, forma 2
const book1 = Object.create(bookProtos, {
    title: { value: 'Libro Uno' },
    author: { value: 'John Doe' },
    year: { value: '2012' },
});

console.log(book1);
