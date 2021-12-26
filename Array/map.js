
//O map

let num = [1, 2, 3, 4, 5, 6]

let dobro = num.map(item => {
  return item * 2
})

console.log(dobro)
/* O map percorreo o array
* modificando-o e retornando um 
* novo array */
console.log(' ')
//=============================================\\

/* mais um bom exemplo de uso do map*/ 
const soma10 = item => item + 10
const mult3 = item => item * 3
const convertReal = item => ` R$ ${parseFloat(item).toFixed(2)}`

let resultado = num.map(soma10).map(mult3).map(convertReal)

console.log(resultado)

/* Comentando o código  cima
* criamos 3 funções, onde a ultima 
* tem dois metodos o parseFloat
* método tranforma str em number
* eo toFixed(2) onde podemos 
* determinar o numero de casas decimais
*
* em seguida armazenamos em resultado
* a chamada dos map's 
* com o resulatado do mapeamento de 'num'
* criamos outro array com 'soma10'
* com o rsulatado do mapeamento de soma10
* foi criado outro, o mult3  que com o 
* seu resultado criamos outro array */

//============================================\\

let alunoList = [
  { nome: 'cristian', nota: 28, bolcista: true },
  { nome: 'rafael', nota: 16.5, bolcista: false },
  { nome: 'isa', nota: 32.4, bolcista: false },
  { nome: 'leonardo', nota: 14.5, bolcista: true}
  
]





