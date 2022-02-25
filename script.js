let modeloSelecionado = null;
let golaSelecionada = null;
let tecidoSelecionado = null;
let linkEscolhido = "";

/* let nome = null; 
while(nome == null || nome == "")  {
   nome = prompt("Qual o seu nome?");
}
*/

function selecionarModelo(produto){
    if(modeloSelecionado != null) {
        let modelos = document.querySelector(".modelos");
        let itens = modelos.querySelectorAll(".item");
        for(let i = 0; i < itens.length; i++){
            let icone = itens[i].querySelector(".icone");
            icone.classList.remove("selecionado");
        }
    }
    let icone = produto.querySelector(".icone");
    icone.classList.add("selecionado");
    modeloSelecionado = produto.id;
    ativaBotao();
}

function selecionarGola(produto){
    if(golaSelecionada != null) {
        let golas = document.querySelector(".golas");
        let itens = golas.querySelectorAll(".item");
        for(let i = 0; i < itens.length; i++){
            let icone = itens[i].querySelector(".icone");
            icone.classList.remove("selecionado");
        }
    }
    let icone = produto.querySelector(".icone");
    icone.classList.add("selecionado");
    golaSelecionada = produto.id;
    ativaBotao();
}

function selecionarTecido(produto){
    if(tecidoSelecionado != null) {
        let tecidos = document.querySelector(".tecidos");
        let itens = tecidos.querySelectorAll(".item");
        for(let i = 0; i < itens.length; i++){
            let icone = itens[i].querySelector(".icone");
            icone.classList.remove("selecionado");
        }
    }
    let icone = produto.querySelector(".icone");
    icone.classList.add("selecionado");
    tecidoSelecionado = produto.id;
    ativaBotao();
}

function obterLink(input) {
    linkEscolhido = input.value;
    ativaBotao();
}

function ativaBotao(){
    if(modeloSelecionado != null && golaSelecionada != null && tecidoSelecionado != null && linkEscolhido != "") {
        let botao = document.querySelector("button");
        botao.disabled = false;
        botao.style.background = "#404EED";
        botao.style.color = "white";
    }
}

function pedidoConfirmado() {
    alert ("Pedido confirmado");
}

