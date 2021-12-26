
//funções importantes do object

//assign, concatena varios obj em um só


const destino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const obj = Object.assign(destino, obj1, obj2)
/*com o assign podemos lançar outros objetos
*em um objeto destino, mas se tiver chaves com o mesmo
*nome o valor da chave do obj de destino sera subescrita */

console.log(obj)













