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

//Criando referência variável "contador" iniciando = 0
let contador = 0;

//Estrutura de repetição "white" significa "enquanto algo acontecer"
while(contador < 9);{
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
    
}
