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
let score = 98;
score = 'hello world';
let animal = { id: 1, status: '', name: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
console.log('suma de 2 + 2', '2' + 2);
const product = {
    created_at: '',
    modified_at: '',
    name: '',
};
const nDeFibo = 5;
const toNumber = (s) => {
    if (!s) {
        return 0;
    }
    return parseInt(s);
};
const n = toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date(),
    };
}
const user = getUser(1);
console.log('usuario', user === null || user === void 0 ? void 0 : user.created_at);
const array1 = null;
console.log(array1 === null || array1 === void 0 ? void 0 : array1[0]);
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
const difficulty = null;
const user2 = {
    userName: 'fertelo',
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1,
};
//# sourceMappingURL=index.js.map