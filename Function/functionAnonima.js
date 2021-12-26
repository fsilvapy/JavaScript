

//funções anônimas

/* Descrevendo o código a baixo
*declaramos uma function armazenando *em uma variavél 'soma' */

let soma = function (a, b) {
    return a + b
}

const soma2 = function (c, d, operacao = soma) {
    console.log(operacao(c, d))
}

soma2(2, 3)

console.log(" ")

/* Em 'soma2' que é uma funcção 
*declarada em uma constante
*nos demos a ela3 parametros " c, d,"
*e  nossa função 'soma',
*sempre que passarmos números como
*parametro para a nossa função soam2
*soam vai entrar em ação somando os
*dois valores */

//==================================\\

//Closures function

function init() {

    let name = 'flavio';

    function imprime() {
        
        console.log(name)
    }
    imprime()

}

init()

console.log(" ")

//================================\\

let nome1 = function () {//função anônima
    console.log('flavio_1')
}
nome1()

function nome2() {//função nomeada
    console.log('flavio_2')
}
nome2()

console.log(" ")

//===============================\\

//passando uma função anônima como parametro

let fn = function (a, b) {
 return  a + b
}

console.log(fn(7, 7, (a, b)=> a * b))


