// interface para clases, type para el resto

interface Animal {
  name: string;
  walk(): void;
  sound(): void;
}

// type Animal = {
//     name: string;
//     walk(): void;
//     sound(): void;
//   }

class Horse implements Animal {
  name: string = 'Rocinante';

  walk() {
    console.log('walking');
  }

  sound(): string {
    return 'relinching!';
  }
}

class Pig implements Animal {
  name: string = 'Cochi';

  walk() {
    console.log('walking');
  }

  sound(): string {
    return 'oink!';
  }
}

class Dog implements Animal {
  name: string = 'Fujur';
  walk(): void {
    console.log('Dog walking');
  }
  sound(): void {
    console.log('Dog barking!!');
  }
}

// index signature

class Dictionary {
  [id: string]: string;
}

let dictionary = new Dictionary();
dictionary['1a'] = 'usuario 1';
dictionary['a1'] = 'usuario 2';
console.log(dictionary);
