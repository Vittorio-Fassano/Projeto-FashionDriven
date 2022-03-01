let modeloSelecionado = null;
let golaSelecionada = null;
let tecidoSelecionado = null;
let linkEscolhido = "";
let todosPedidos = null;

let nome = null; 
while(nome == null || nome == "")  {
   nome = prompt("Qual o seu nome?");
}

inicializaSite();

function inicializaSite() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
    promessa.then(resposta => {
        
        let ultimosPedidos = document.querySelector(".ultimospedidos"); 
        todosPedidos = resposta.data;
        
        let htmlPedido = "";

        for(let i=0; i<todosPedidos.length; i++) {
            let pedido = todosPedidos[i];
            htmlPedido += `
                <div class="pedido" id="${i}" onclick="escolherUltimoPedido(this)">
                    <img src="${pedido.image}">
                    <h2><strong>Criador:</strong> ${pedido.owner}</h2>
                </div> `;
        }

        ultimosPedidos.innerHTML=htmlPedido;
    });
}

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
    let objetoResposta = {
        "model": modeloSelecionado, 
	    "neck": golaSelecionada,
	    "material": tecidoSelecionado,
	    "image": linkEscolhido,
	    "owner": nome,
	    "author": nome
    };

    const promessa = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", objetoResposta);
    promessa.then(resposta => {alert ("Pedido confirmado")});
    promessa.catch(erro => {alert ("Ops, não conseguimos processar sua encomenda")});
}

function escolherUltimoPedido(pedido) {
    let idx = pedido.id;
    idx = parseInt(idx);
    let pedidoEscolhido = todosPedidos[idx];
    let objetoResposta = {
        "model": pedidoEscolhido.model, 
	    "neck": pedidoEscolhido.neck,
	    "material": pedidoEscolhido.material,
	    "image": pedidoEscolhido.image,
	    "owner": nome,
	    "author": nome
    };
    
    if(confirm("Deseja escolher este pedido?")) {
        console.log(pedidoEscolhido)
        const promessa = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", objetoResposta);
        promessa.then(resposta => {alert ("Pedido confirmado")});
        promessa.catch(erro => {alert ("Ops, não conseguimos processar sua encomenda")});
        
    } else {
       return false; 
    }
}