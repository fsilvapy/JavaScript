
//Condição simples com o Operadore ternario

const resultado = (num) => num >= 7 ? 'true' : 'false'

console.log(resultado(5))

/*Lemos o código a cima da seguinte forma
*a costante 'resultado' recebeu uma Arrow function
*com um parametro 'num' 
*comparamos se o parametro num é maior ou igual a 7
*o Operador ternario seguido da seguinte expresão
*  ===( ? 'true':'false' )=== 
* ler dessa forma num é maior ou igual a 7 se '?' 
* true ou seja 'sim' caso contrario (sinal : )se false 'falso' 
*/

//====================================================================

//multipals condições com o operdor ternario

let menu = ['XBurguer', 'XBaicon', 'Xsalda']

const escolha = (menu) => menu == 1 ? 'XBurguer' : menu == 2 ? 'XBaicon' : 'XSalada'

console.log(escolha(3))


