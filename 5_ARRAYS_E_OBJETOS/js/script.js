// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);

// 3 - propriedades
const numbers = [5, 12, 4, 22];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador",
  };
  
  console.log(person.name);
  
  console.log(person.name.length);
  
  console.log(typeof person);
  
  // 6 - criando e deletando propriedades
  const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
  };
  
  console.log(car);
  
  car.doors = 4;
  
  console.log(car);
  
  delete car.km;
  
  console.log(car);
  
  // 7 - mais sobre objetos
  const obj = {
    a: "teste",
    b: true,
  };
  
  console.log(obj instanceof Object);
  
  const obj2 = {
    c: [],
  };
  
  Object.assign(obj2, obj);
  
  console.log(obj2);
  
  // 8 - conhecendo melhor os objetos
  console.log(Object.keys(obj));
  console.log(Object.keys(obj2));
  console.log(Object.keys(person));
  
  console.log(Object.entries(obj));
  
  // 9 - Mutação

  const a = {
    name: "Matheus",
  };
  
  const b = a;
  
  console.log(a);
  console.log(b);
  
  console.log(a === b);
  
  a.age = 31;
  
  console.log(b);
  
  delete b.age;
  
  console.log(a);
  console.log(b);

  // 10 - loop em array 

const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando usuário: ${users[i]}`);
}

// 11 - push e pop - push adiciona os itens e o pop deleta

const array = ["a", "b", "c"];

array.push("d");

console.log(array);
console.log(array.length);

array.pop();
const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);
console.log(array.length);

array.push("Dá", "Para", "Inserir", "Vários");

console.log(array);

// 12 - shift e unshift - shift deleta e o unshift adiciona

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("z", "x", "y");

letters.unshift("p");

console.log(letters);

// 13 - indexof e lastindexof -- de trocar a ordem de pegar os itens

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - slice  escolhe os itens que vai cortar
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

// 2 em diante
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - foreach para cada item adiciona o que foi pedido
const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
  console.log(`O número atual é: ${n}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - includes inclui algo para o item escolhido
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// 17 - reverse - reverte a ordem da lista
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 - trim tira espaços desnessários
const trimTest = "  testando \n   ";

console.log(trimTest.trim());

console.log(trimTest);

console.log(trimTest.trim().length);

console.log(trimTest.length);

// 19 - padstart adiciona itens no inicio - padend adiciona itens no fim

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split -- sepera as palavras de um texto em uma lista ["o", "rato", "roeu"]
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split();

console.log(arrayDaFrase);

// 21 - join -- Junta textos separados
const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// 22 - repeat -- repete o mesmo texto
const palavra = "Testando";

console.log(palavra.repeat(5));

// 23 - rest operator dixa entrar dados indefinidos
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 5, 10));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 24 - for...of -- simplifica a logica
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 5, 10));

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 25 - destructuring objetos -- simplifica com o {} uma ação com as variaveis
const userDetails = {
  firstName: "Matheus",
  lastName: "Battisti",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// 26 - destructuring com arrays
const myList = ["avião", "Trem", "Submarino", "Onibus"]

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB,veiculoC);

// 27 - json -- Arquivo de javascript simplificado
const myJson =
  '{"name": "Matheus","age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// 28 - json para objeto e objeto para json -- fazendo um JSON para um código java 
const myObject = JSON.parse(myJson);

console.log(myObject);

// json invalido
const badJson =
  '{"name": Matheus,"age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

// const myBadObject = JSON.parse(badJson);
myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);