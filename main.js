//Declarando/Criando a função tocaSomPom 
function tocaSomPom(){
    document.querySelector("#som_tecla_pom").play();
}
//Invocando a função tocaSomPom pelo clique do botão Pom
    document.querySelector(".tecla_pom").onclick = tocaSomPom;

//Criando referência constante ListaDeTeclas com buscando todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//Invocando a função tocaSomPom a partir do item "0". 1°botão.
listaDeTeclas[0].onclick = tocaSomPom;

