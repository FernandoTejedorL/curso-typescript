"use strict";
let message = 'hello world';
message = 'happy quocka';
message = 'bye world';
console.log(message);
console.log(typeof []);
let dinosaurExtinction = 76000000;
let favoriteDinosaur = 'Tyrannosaurus Rex';
let extinted = true;
function notToUse(config) {
    return config;
}
let animals = ['dog', 'cat', 'mouse'];
let numbers = [1, 2, 3, 4, 5];
let checks = [];
let numbers2 = [1, 2, 3, 4, 5];
let tupla = [1, ['hello', 'world']];
const small = 's';
const medium = 'm';
const large = 'l';
const extraLarge = 'xl';
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
    Size["ExtraLarge"] = "xl";
})(Size || (Size = {}));
const variable1 = Size.Large;
console.log(variable1);
const estate = 2;
const object = {
    id: 1,
    name: 'hello world',
    size: Size.Small,
    address: {
        number: 1,
        street: 'calle pez',
        country: 'Ejpaña',
    },
};
const arr = [];
const fn = (age) => {
    if (age > 18) {
        return 'Puedes pasar';
    }
    else {
        return 'No puedes pasar';
    }
};
function validaEdad(age, message) {
    if (age > 18) {
        return `You can enter ${message}`;
    }
    else {
        return `You can not enter ${message}`;
    }
}
const accepted = validaEdad(20, 'Fernando');
console.log(accepted);
const errorUser = () => {
    throw new Error('Error in the user');
};
const errored = errorUser();
console.log(errored);
//# sourceMappingURL=index.js.map