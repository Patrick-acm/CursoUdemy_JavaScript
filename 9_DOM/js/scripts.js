//1 - Movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 selecionando elementos por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando elementos por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando elementos por classe
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionando os elementos por CSS
const productsQuery = document.querySelectorAll(".product");

console.log(products);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insert before adiciona antes

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// 7 - appendChild - adiciona no fim
const navlinks =  document.querySelector("nav ul");

const li = document.createElement("li");

navlinks.appendChild(li);

// 8 replace child - troca o elemento

const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!";

header.replaceChild(h2, title);

// 9 - createTextNode

const mytext = document.createTextNode("Agora vamos colocar mais um texto")

const h3 = document.createElement("h3");

h3.appendChild(mytext);

mainContainer.appendChild(h3);

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://horadecodar.com.br");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - altura e largura - vrefica os valores
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);

console.log(footer.offsetHeight);

console.log(footer.clientWidth);

console.log(footer.clientHeight);

// 12 - posicao do elemento -- pega posição do elemento
const product1 = products[0];

console.log(product1.getBoundingClientRect());

// 13 - CSS com JS - troca os valores de CSS

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";


// 14 - Alterando estilos de varios elementos -- fazer um loop
for (const li of listItens) {
    li.style.backgroundColor = "red";
  }
