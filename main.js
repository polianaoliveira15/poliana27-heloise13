//Declarando/Criando a função tocaSom com paramêtro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//Criando referência constante ListaDeTeclas com buscando todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//Invocando a função tocaSom a partir do item "0". 1°botão.
listaDeTeclas[0].onclick = tocaSom;

//Criando referência variável "contador" iniciando = 0
let contador = 0;

//Estrutura de repetição "white" significa "enquanto algo acontecer"
while(contador <  listaDeTeclas. length);{
    const efeito = listaDeTeclas[contador].classList(1);
    const idAudio = "#som_"+ efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
    
}
