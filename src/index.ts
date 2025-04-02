let message: string = 'hello world';

message = 'happy quocka';

message = 'bye world';
console.log(message);
console.log(typeof []);

/**
 * types of JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object (includes arrays)
 * function
 *
 * Types of TS
 * any (no use) -- es cuando no se especifica tipo o se inicia sin dato
 * unknown
 * never
 * array
 * tuple
 * enum
 *
 * inferred types
 */

// cuando inicializamos variable no hace falta especificar el tipo de la misma

let dinosaurExtinction: number = 76_000_000;
let favoriteDinosaur: string = 'Tyrannosaurus Rex';
let extinted: boolean = true;

//Any, no usar!

function notToUse(config: any) {
  return config;
}

let animals: string[] = ['dog', 'cat', 'mouse'];
let numbers: number[] = [1, 2, 3, 4, 5];
let checks: boolean[] = [];
let numbers2: Array<number> = [1, 2, 3, 4, 5];

//  el autocomplete sugiere los metodos por tipo de dato: numbers.map(x => x.)

//Tuplas - variable que contiene set de datos ordenados

let tupla: [number, string[]] = [1, ['hello', 'world']];

// Enums - enumeraciones, se pueden usar para definir un conjunto de constantes

const small = 's';
const medium = 'm';
const large = 'l';
const extraLarge = 'xl';

// Si no especificamos, nos lo convierte en un numero por posicion. podemos asignar un valor al primero para que los demás varíen
// enum Size {
//   Small = 5,
//   Medium,
//   Large,
//   ExtraLarge,
// }

enum Size {
  Small = 's',
  Medium = 'm',
  Large = 'l',
  ExtraLarge = 'xl',
}

const variable1 = Size.Large;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estate = LoadingState.Success;

//Objects - el símbolo ? hace que la propiedad sea opcional
// podemos bloquear el valor de una propiedad con readonly

// const object: {
//   readonly id: number;
//   name: string;
//   size: Size;
// } = {
//   id: 1,
//   name: 'hello world',
//   size: Size.Small,
// };

type Address = {
  number: number;
  street: string;
  country: string;
};

type Persona = {
  readonly id: number;
  name: string;
  size: Size;
  address: Address;
};

const object: Persona = {
  id: 1,
  name: 'hello world',
  size: Size.Small,
  address: {
    number: 1,
    street: 'calle pez',
    country: 'Ejpaña',
  },
};

const arr: Persona[] = [];

// funciones

// const fn: () => string = () => {
//     let example = 2;

//     if (example > 5) {
//       return 'Mayor';
//     } else {
//         return 'Menor';
//     }
// }

const fn: (age: number) => string = (age: number) => {
  if (age > 18) {
    return 'Puedes pasar';
  } else {
    return 'No puedes pasar';
  }
};

function validaEdad(age: number, message: string): string {
  if (age > 18) {
    return `You can enter ${message}`;
  } else {
    return `You can not enter ${message}`;
  }
}

const accepted = validaEdad(20, 'Fernando');
console.log(accepted);

//Never es un tipo se utiliza cuando una funcion nunca va a alcanzar un punto donde vaya a retornar algo

const errorUser: () => never = () => {
  throw new Error('Error in the user');
};
