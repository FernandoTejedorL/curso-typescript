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
//# sourceMappingURL=generics.js.map