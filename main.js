//Declarando/Criando a função tocaSom com paramêtro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//Criando referência constante ListaDeTeclas com buscando todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//Invocando a função tocaSom a partir do item "0". 1°botão.
listaDeTeclas[0].onclick = tocaSom;

//Criando referência variável "contador" iniciando = 0


//Estrutura de repetição "white" significa
//"Enquanto algo acontecer" mudopu while para "for"
for(let contador = 0;contador <  listaDeTeclas. length;contador++);{
    const tecla = listaDeTeclas[contador];
    const efeito = listaDeTeclas[contador].classList[1]; //Acessa o 2° item da classe de teclas 
    const idAudio = `#som_$(efeito)`; //Template string
    tecla.onclick = function(){ //Cria função anônima para chamar tocaSom
        tocaSom(idAudio);
    }
}
