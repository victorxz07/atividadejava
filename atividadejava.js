let nomeUsuario = prompt("Qual é o seu nome?"); 
let querMensagem = confirm("Você quer ver uma mensagem especial?"); 
if (querMensagem) {
    alert("Bem-vindo, " + nomeUsuario + "!"); 
}

  

function saudacao(nome) { // [cite: 110]
    console.log("Olá, " + nome + "!");
}

saudacao("José");
saudacao("Maria");
saudacao("João"); 


(function() [cite_start]{ 
    console.log("Função executada!");
})();
