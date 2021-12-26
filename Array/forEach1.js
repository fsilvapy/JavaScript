
//forEach é um for melhorado

/* Percorrendo um array com o forEach  */

const arrFrutas = [
    'manga',
    'laranja',
    'melancia'
]

//com o for 
console.log('Com o for  ')
for (let i = 0; i < arrFrutas.length; i++){
  console.log(`${i + 1}) ${arrFrutas[i]}`)
}

console.log(' ')

/* Aqui estou usando uma função de callback
* no forEach para retornar o indice eo nome 
* de cada item do array  */
console.log('Com o forEach')
arrFrutas.forEach((nome, indice) => {//arrowfunction com 2 parametros
  console.log(`${indice + 1}. ${nome}`)
})

console.log(' ')


/* Aqui armazenei em uma variavél 
* uma função arrow que vai imprimir no 
* console os itens do meu array */
let listFruts = arrFrutas => console.log(arrFrutas)

arrFrutas.forEach(listFruts )
console.log(' ')

/*Simulando o forEach, traremos o mesmo resultado 
*utilizando outras implementções do JS*/

Array.prototype.forEach2 = function (callBack) {
  
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this)
  }
}
/* O que fizemos no código a cima
* adicionamos ao contrutor Array.prot...
* armazenados na variavel forEach2
* e essa variavel tera uma função 
* com um paramatro, e essa função 
* tera em si um for 
* que percorrera o array
* representado pelo this  
* o for retornara o item o indice
* e o proprio array
*/
arrFrutas.forEach2(
  (nome, indice, Arr) => {
    console.log(
      `${indice + 1}. ${nome} ,(${Arr})`
    )
})




