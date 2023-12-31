//Declarando/Criando a função tocaSom com paramêtro idElementoAudio
function tocaSom(idElementoAudio){
    //if else e elemento operadores comparação
    if elemento && elemento.localName ("audio"){
    const elemento = document.querySelector (idElementoAudio)
    elemento.play();
    }else{
    console.log("Elemento não encontrado")
    }
}
//Criando referência constante ListaDeTeclas com buscando todos os itens pela classe .tecla
const listaDeTeclas = document.querySelectorAll(".tecla");
//Estrutura de repeição "while" significa "enquanto algo acontecer" mudou while para "for"
for(let contador = 0;contador <  listaDeTeclas.length;contador++) {
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //Acessa o 2° item da classe de teclas 
    const idAudio = `#som_$(efeito)`; //Template string
    tecla.onclick = function(){ //Cria função anônima para chamar tocaSom
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code === "Space" || evento.code === "Enter"){
        tecla.classList.add("ativa");
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }
}