
//Método while
let contador = 0
while (contador < 10) {
    console.log(contador)
    contador++
}
/* Entendendo o código a cima , temos o *seguinte , declaramos uma variavél *'contador' que recebeu o valor '0'
*com o método while desemos enquanto
*o valor de contador for menor que 10 
*log seu valor , então com o 'incremento'
* que é o sinal de '++' adiciona mais 1
*ao contador , o laço chega ao fim
*quando o contador for igual ao 10.*/

console.log(" ")
//=======================================\\

console.log(" ")
// função random

function getNumberRandom(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}


let opcao = 0;

while (opcao != -1) {

    opcao = getNumberRandom(-1, 10)
    console.log(`O NUmero gerado foi: ${opcao}`)
}

console.log(" ")


