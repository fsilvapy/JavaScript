//reduce

const callBack = (
  acumulador,
  elementoAtual,
  indexAtual,
  arrayOriginal
) => { };


//reduzindo um array de numeros

let arrNum = [1, 5, 3, 8, 10]


const total = arrNum.reduce((acc, item) => {
 return  acc + item
 
})
console.log(`Primeiro teste deu: ${total}`)

console.log(' ')


//o reduce com um valor inicial 10
const total2 = arrNum.reduce((ac, num) => {
  return ac + num
  
},10)
console.log(`Segundo teste deu: ${total2}`)

console.log(' ')


/* Mapiei os iteins do array
* e cada item multipliquei por 5
* com o array ja modificado 
* chamei o reduce para tornar
* tudo em um unico numero*/

const novoArray = arrNum.map(item => item * 5).reduce((ac, item) => {
  return ac + item
})

console.log(`Terceiro teste deu: ${novoArray}`)

console.log(' ')

/* Filtrei o array e mandei para o map
* o map recebeu, tranformou o array
* multiplicando-o por 2 , e lançou
* para o redeuce, que por sua vez o
* reduzio a um numero decimal */

const arrFiltro = arrNum.filter(item => item < 10).map(item => item * 2).reduce((ac, item) => {
  return ac +item
}, 50)

console.log(`Resultado final. ${arrFiltro}`)














