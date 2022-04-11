/*
 function prepararInicio(){
       
        Soltar um prompt na tela pedindo ao usuario um numero que defina a quantidade de cartas [ armazenar em qtdCartas] :
                Se o numero for menor que 4 , maior que 14 e impar(divisao por 2 com resto diferente de 0)--> Numero invalido
                Se numero for valido pegar o numero e criar as cartas
        
}
function carregarImagens(){
        Armazenar as imagens num array para inseri-las no push pra criar as divs em gerar jogo
}
function gerarJogo(){
        Saber qual numero o usuario digitou 
        Acessar a classe jogo e colocar dentro as divs correspondentes a quantidade de cartas escolhidas pelo usuario
                Para isso criar um contador que percorra todo o array de quantidade de 
                
}
function selecionarCarta(){
        Carta selecionada deve virar e mostrar a parte de atras , deve manter virada ate outra carta ser selecionada .
        Caso sejam iguais , manter as 2 cartas viradas
        Caso sejam diferentes , aguardar 1 segundo e voltar a virar as 2 cartas


}
function deselecionar(){
        Voltar a carta para a posicao inicial caso nao seja a mesma 
}



function carregarImagens()
function gerarJogo() 
function selecionarCarta()
function deselecionar()
_______________________________________________________________________________
*/
    let imagens = [];
    let selecionada = [];
    var qtdCartas;
   
    function prepararInicio(){
          qtdCartas= parseInt(prompt("Qual a quantidade de cartas? (entre 4 e 14 , que seja par)"));      
       while(qtdCartas<4 || qtdCartas>14 || qtdCartas%2!=0){
        alert("Insira um valor valido!")
        qtdCartas= parseInt(prompt("Qual a quantidade de cartas? (entre 4 e 14)"));      
       }
       
          gerarJogo();   
       
    }
    function carregarImagens() {
      imagens=['<img src="/img/bobrossparrot.gif" >',
        '<img src="/img/explodyparrot.gif" >',
        '<img src="/img/fiestaparrot.gif" >',
        '<img src="/img/metalparrot.gif" >',
        '<img src="/img/revertitparrot.gif" >',
        '<img src="/img/tripletsparrot.gif" >',
        '<img src="/img/unicornparrot.gif" >']
    }

    function gerarJogo() {
        carregarImagens();
        selecionada = [];
        let jogo = document.getElementById("jogo")
        let cartas = [];
        for (let i = 0; i < qtdCartas; i++) {
            cartas.push(`
            <div class="area-carta" onclick="selecionarCarta(${i})">
                <div class="carta" id="carta${i}">
                    <div class="cara traseira" id="traseira${i}">
                        ${imagens[0]}
                    </div>
                    <div class="cara superior">
                    <img src="/img/front.png" >
                    </div>
                </div>
            </div>        
            `)
            if (i % 2 == 1) {
                imagens.splice(0, 1)
            }
        }
        cartas.sort(() => Math.random() - 0.5)
        jogo.innerHTML = cartas.join(" ")
    }

    function selecionarCarta(i) {
        let carta = document.getElementById("carta" + i)
        if (carta.style.transform != "rotateY(180deg)") {
            carta.style.transform = "rotateY(180deg)"
            selecionada.push(i)
        }
        if (selecionada.length == 2) {
            deselecionar(selecionada)
            selecionada = []
        }
    }

    function deselecionar(selecionada) {
        setTimeout(() => {
            let traseira1 = document.getElementById("traseira" + selecionada[0])
            let traseira2 = document.getElementById("traseira" + selecionada[1])
            if (traseira1.innerHTML != traseira2.innerHTML) {
                let carta1 = document.getElementById("carta" + selecionada[0])
                let carta2 = document.getElementById("carta" + selecionada[1])
                carta1.style.transform = "rotateY(0deg)"
                carta2.style.transform = "rotateY(0deg)"
            }
        }, 1000);
    }
