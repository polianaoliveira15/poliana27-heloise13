//Declarando/Criando a função tocaSom com paramêtro idElementoAudio
function tocaSom(idElementoAudio){
    document.querySelector (idElementoAudio).play();
}
//Criando referência constante ListaDeTeclas com buscando todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//Estrutura de repeição "while" significa "enquanto algo acontecer" mudou while para "for"
for(let contador = 0;contador <  listaDeTeclas. length;contador++);{
    const tecla = listaDeTeclas[ contador ];
    const efeito = tecla.classList[1]; //Acessa o 2° item da classe de teclas 
    const idAudio = `#som_$(efeito)`; //Template string
    tecla.onclick = function(){ //Cria função anônima para chamar tocaSom
        tocaSom(idAudio);
    }
}