"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchData = (resource) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${resource}`);
    return response.json();
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield fetchData('/usuarios');
    return user.id;
});
class Developer {
    constructor(t) {
        this.laptop = t;
    }
}
const developer1 = new Developer({
    turnOn: () => { },
    turnOff: () => { },
});
const developer2 = new Developer('hola mundo');
developer2.laptop.charAt(1);
function fetchProduct() {
    return {
        key: 'id del producto',
        value: { id: 'id del producto' },
    };
}
function fetchStock() {
    return {
        key: 'id del producto',
        value: 500,
    };
}
class User3 {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'userid', name: 'Fer' });
class State {
    constructor() {
        this.data = [];
    }
    add(t) {
        this.data.push(t);
    }
    getState() {
        return this.data;
    }
}
class deleteState extends State {
    delete(id) {
        this.data.filter((item) => item.id !== id);
    }
}
class EstadoUsuarios extends State {
    resetPass() {
    }
}
const estadoUsuarios = new EstadoUsuarios();
const calendar = { id: 1, source: 'Google', owner: 'myself' };
function getProp(object, property) {
    return object[property];
}
getProp(calendar, 'id');
getProp(calendar, 'source');
const keyVal = {
    'soy un string': 42,
};
const dotOmit = {
    x: 1,
};
const dotPick = {
    x: 1,
    y: 2,
};
const readOnlyDot = {
    x: 1,
    y: 3,
    description: 'soy una descripción',
};
//# sourceMappingURL=generics.js.map