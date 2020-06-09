// No todo es un objecto en JavaScript a diferencia
// de otros lenguajes como Ruby o Python.JavaScript

// Se tienen tipo primitivos PERO se puede utilizar
// métodos con ellos.

// Objecto primitivo string
// const s1 = 'Hello'; 
// console.log(typeof s1);
// console.log(s1.toUpperCase());

// Se puede crear strings como objectos:
// const s2 = new String('Texto');
// console.log(typeof s2);

// Objecto DOM: window
// windows is the top level object. It is the parent object of the browser.

// console.log(window);
// window.alert('Texto en Alert');
// Nota: navigator muestra información del navegador
// como nombre del navegador, versión, SO donde se ejecuta, geolocation
// console.log(navigator);
// console.log(navigator.geolocation);


// Object literal
const book1 = {
    title: 'Booke One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Booke Two',
    author: 'Jane Doe',
    year: '2018',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());
console.log(book2.getSummary());
// Nota: Para ver todo el contenido del objecto
console.log(Object.values(book2));
console.log(Object.keys(book2));



