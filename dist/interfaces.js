"use strict";
class Horse {
    constructor() {
        this.name = 'Rocinante';
    }
    walk() {
        console.log('walking');
    }
    sound() {
        return 'relinching!';
    }
}
class Pig {
    constructor() {
        this.name = 'Cochi';
    }
    walk() {
        console.log('walking');
    }
    sound() {
        return 'oink!';
    }
}
class Dog {
    constructor() {
        this.name = 'Fujur';
    }
    walk() {
        console.log('Dog walking');
    }
    sound() {
        console.log('Dog barking!!');
    }
}
class Dictionary {
}
let dictionary = new Dictionary();
dictionary['1a'] = 'usuario 1';
dictionary['a1'] = 'usuario 2';
console.log(dictionary);
//# sourceMappingURL=interfaces.js.map