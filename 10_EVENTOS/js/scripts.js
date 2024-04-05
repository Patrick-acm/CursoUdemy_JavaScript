// 1 - Acionando  eventos

const btn = document.querySelector('#mt-button');

btn.addEventListener("click", function (){
    console.log("clicou aqui!");
});

// 2 - Removendo evento removeEventListener remove o evento criado anteriormente
const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})

// 3 - argumento de evento (e) cria os eventos 
const title = document.querySelector("#my-title");

title.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.offsetX);
    console.log(e.pointerType);
});

// 4 -- propagação - um elemento pode ativar outro
const containerBtn = document.querySelector('#btn-container');
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
})

containerBtn.addEventListener("click", () => {
    e.stopPropagation();
    console.log("Evento 2")
})

// 5 - removendo efeito padrão - tira o efeito do link
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não alterou a página");
});

// 6 - Eventos de tecla - pega os eventos da tecla do teclado, mostra no cosole log
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
  });
  
  document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
  });

  // 7 - Outros eventos de mouse 
  const mouseEvents = document.querySelector("#mouse");

  mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou botão");
  });
  
  mouseEvents.addEventListener("mousedown", () => {
    console.log("Soltou botão");
  });
  
  mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
  });

// 8 - movimento do mouse - pega o local de movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X: ${e.x}`);
    // console.log(`No eixo Y: ${e.y}`);

    // 9 - evento no scroll - coloca um evento no scroll
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
      console.log("Passamos 200px!");
    }
  });
  
  // 10 - evento de focus - coloca evento em um input ou algo do tipo
  const input = document.querySelector("#my-input");
  
  input.addEventListener("focus", (e) => {
    console.log("Entrou no input!");
  });
  
  input.addEventListener("blur", (e) => {
    console.log("Saiu do input!");
  });
  // 11 - evento de carregamento -- beforeunload mostra uma tela antes de recarregar a pagina
window.addEventListener("load", () => {
    console.log("Página carregou!");
  });
  
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
  });
  });

  // 12 - debounce - controla o evento

const debounce = (f, delay) => {
    let timeout;
  
    return (...arguments) => {
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(() => {
        f.apply(arguments);
      }, delay);
    };
  };
  
  window.addEventListener(
    "mousemove",
    debounce(() => {
      console.log("Executando a cada 400ms");
    }, 400)
  );