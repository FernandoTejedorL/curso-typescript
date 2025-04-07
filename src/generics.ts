// function log<T, V>(a: T, b: V): V {
//   console.log(a, b);

//   return b;
// }

// //tipo literal
// log<string, number>('dato', 33);
// log<string, string>('dato', 'happy quocka');

// //implicito con tipos inferidos
// log(1, 2);
// log('hello world', 'just a cheer');

const fetchData = async <T>(resource: string): Promise<T> => {
  const response = await fetch(`${resource}`);
  return response.json();
};

type User = {
  id: string;
  name: string;
};

const main = async () => {
  const user = await fetchData<User>('/usuarios');
  return user.id;
};

type Laptop = {
  turnOn: () => void;
  turnOff: () => void;
};

class Developer<T> {
  laptop: T;
  constructor(t: T) {
    this.laptop = t;
  }
}

const developer1 = new Developer<Laptop>({
  turnOn: () => {},
  turnOff: () => {},
});
const developer2 = new Developer<string>('hola mundo');

developer2.laptop.charAt(1);

// genericos en interfaces

interface KeyValue<T, V> {
  key: T;
  value: V;
}

interface Product1 {
  id: string;
}

function fetchProduct(): KeyValue<string, Product1> {
  return {
    key: 'id del producto',
    value: { id: 'id del producto' },
  };
}

function fetchStock(): KeyValue<string, number> {
  return {
    key: 'id del producto',
    value: 500,
  };
}

//constraints -> restricciones (tipo de generico)

// interface User3 {
//     id: string,
//     name: string
// }

class User3 {
  constructor(public id: string) {}
}

function print<T extends User3>(t: T): T {
  console.log(t);

  return t;
}

print({ id: 'userid', name: 'Fer' });

class State<T> {
  protected data: T[] = [];

  add(t: T): void {
    this.data.push(t);
  }

  getState(): T[] {
    return this.data;
  }
}

// const userState = new State<User3>();
// userState.getState();

type ObjectId = {
  id: string;
};

class deleteState<T extends ObjectId> extends State<T> {
  delete(id: string) {
    this.data.filter((item) => item.id !== id);
  }
}

//Pasar genérico
//Pasar genérico con restricciones
class EstadoUsuarios extends State<User3> {
  resetPass() {
    //lógica de la funciñon
  }
}
//Pasar genérico fijo
const estadoUsuarios = new EstadoUsuarios();

type Calendar = {
  id: number;
  source: string;
  owner: string;
};

const calendar = { id: 1, source: 'Google', owner: 'myself' };

//keyOf

function getProp<T>(object: T, property: keyof T): unknown {
  return object[property];
}

getProp<Calendar>(calendar, 'id');
getProp<Calendar>(calendar, 'source');

//utility types

type Dot = {
  x: number;
  y: number;
  description?: string;
};

// type OptionalDot = {
//     x?: number,
//     y?: number,
//     description?: string
// }

type OptionalDot = Partial<Dot>;
type RequiredDot = Required<Dot>;

//type kv = { [key: string]: number };
const keyVal: Record<string, number> = {
  'soy un string': 42,
};

const dotOmit: Omit<Dot, 'description' | 'y'> = {
  x: 1,
};

const dotPick: Pick<Dot, 'x' | 'y'> = {
  x: 1,
  y: 2,
};

const readOnlyDot: Readonly<Dot> = {
  x: 1,
  y: 3,
  description: 'soy una descripción',
};
