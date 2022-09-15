let numeroSecreto = parseInt(Math.random() * 11)
let dica = document.getElementById('dica')
let tentativas = 3
let chances = document.getElementById('tentativas')


const audioErrou = document.getElementById('errou')
const audioAcertou = document.getElementById('acertou')
const audioPerdeu = document.getElementById('perdeu')

function chutar() {
    let resultado = document.getElementById('resultado')
    let chute = parseInt(document.getElementById('valor').value)
    tentativas = tentativas - 1    
    chances.innerHTML = `Você tem ${tentativas} tentativas! <br> ${chute < numeroSecreto ? 'O número secreto é maior que o seu chute!':'O número secreto é menor que o seu chute!'}`


    if (chute == numeroSecreto) {  
        document.getElementById('resultado').innerHTML = "<img src='img/acertou.jpg' height='400'>"                 
        audioAcertou.play()
        chances.innerHTML = "Você ganhou"   
        document.getElementById('botao').innerHTML = "<button type='submit' onclick='window.location.reload()'>Novo Jogo</button>"
    } else if (tentativas == 0) {
        chances.innerHTML = "Você perdeu, o número secreto era " + numeroSecreto   
        document.getElementById('botao').innerHTML = "<button type='submit' onclick='window.location.reload()'>Novo Jogo</button>"
        audioPerdeu.play()      
    } else if (tentativas < 0) {
        document.addEventListener('click', function () {
            chances.innerHTML = "Suas chances acabaram, comece um novo jogo!"
        })
        document.getElementById('botao').innerHTML = "<button type='submit' onclick='window.location.reload()'>Novo Jogo</button>"
        
    }else if (chute > 10  || chute < 0) {
        resultado.innerHTML = 'Digite um número entre 0 a 10'
    } else {
        document.getElementById('resultado').innerHTML = "<img src='img/errou.png' height='400'>" 
        audioErrou.play()   
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = '<img src="">'  
        }, 1900 );
    }


}


console.log(numeroSecreto)