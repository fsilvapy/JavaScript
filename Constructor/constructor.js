
//Definindo uma function constructor

function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado a função
    let veloAtual = 0

    //método plúblico
    this.acelerar = function () {
        if (veloAtual + delta <= velocidadeMax) {
            veloAtual += delta
        } else {
            veloAtual = velocidadeMax
        }
    }

    //método publico pegando a velocidade atual

    this.getVeloAtual = function () {
        return veloAtual
    }
}


let uno = new Carro

uno.acelerar()//a cada vez que esse método é chamado 
//ele somara + 5 a veloAtual

console.log(uno.getVeloAtual())
console.log(" ")

const ferrari = new Carro(350, 20)
ferrari.acelerar()//a cada vez que esse método é chamado 
//ele somara + 20 a veloAtual

console.log(ferrari.getVeloAtual())
