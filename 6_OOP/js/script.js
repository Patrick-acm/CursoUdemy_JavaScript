// 1 - métodos

const animal = {
    latir: function () {
        console.log("au au");
    },
};

console.log(animal.nome);

animal.latir()

// 2 aprofundadno em métodos pega o nome guarda e altera depois

const pessoa = {
    nome: "Patrick",
  
    getNome: function () {
      return this.nome;
    },
  
    setNome: function (novoNome) {
      this.nome = novoNome;
    },
  };

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Patrick Anderson");

console.log(pessoa.getNome())

//3  Prototype
const text = "asd"

console.log(object.getProtoypeOf(text));

const bool = true;

console.log(object.getProtoypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - mais sobre prototype

const myObject = {
    a: b,
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = object.create(myObject);

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - classes básicas

const cachorro = {
    raca : null,
};

const pastorAlemao = object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão"

const Bulldog = object.create(cachorro);

pastorAlemao.raca = "Bulldog"

// 6 - Funções como clase

function criarCachorro(nome, raca){
    const cachorro = object.create({});
    cachorro.raca = raca;
    cachorro.nome = nome;
    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funçoes construtoras

function cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new cachorro("ozzy", "husky");

console.log(Husky);

// 8 - métodos na função construtora

cachorro.prototype.uivar =function () {
    console.log("Auuu")
};

Husky.uivar();

// 9 - classes es6

class cachorroClasse {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new cachorroClasse("Jeff", "Labrador");

consol.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }


descreverCaminhão() {
    console.log(
        `Este Caminhão tem ${this.eixos}eixos e é da cor ${this.cor}`
    )
}
}

const Scania = new Caminhao(6, "Vermelha");

Scania.descreverCaminhão();

Caminhao.motor = 4.0;

const c2 = new Caminhao(4, "Preta");

// motor é undefined

console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "azul")

console.log(c3.motor)

// 11 - override por prototype
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new humano("Matheus", 31);

console.log(matheus);

Humano.prototype.idade = "não definida";

console.log(matheus.idade);
console.log(Humano.prototype.idade);

// 12 - symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = symbol();

Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(Aviao.prototype[asas]);

// 13 - getter e setter 

class Post {
    constructor(titulo, descricao, tagas) {
        this.titulo = titulo;
        this.descricao = descricao;   
        this.tags = tags;
    }
    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }
    set adicionarTags(tags){
        const tagsArray= tags.split(",");
        this.tags = tagsArray;
    }
}

const mypost = new Post("Algum post", "É um post sobe programação");

console.log(myPost.exibirTitulo);

mypost.adicionarTags = "programacao, javascript, js";

console.log(mypost);

// 14 - Herança (super serve para herdar a variavel do pai)
class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

// 15 - instanceof

console.logo(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof cachorro)

