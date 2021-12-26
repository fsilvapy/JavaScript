
//UM array de JSON
const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "kit de Lapis", "preco":7.60}'
]

const paraObjeto = json => JSON.parse(json)
/*Construimos uma função 
* que transforma um arquivo json
* em um objeto json
* e passaremos como parametro para o
* map */

const apenasPreco = produto => produto.preco
/* Construimos tambem uma outra 
* função para pegar as chaves 'preco'
* no objeto do array */
const getObjeto = carrinho.map(paraObjeto).map(apenasPreco)

console.log(getObjeto)

console.log(' ')


const produto = [
  { nome: 'NoteBook', preco: 4500, fragil: true },
  { nome: 'Ipad pro', preco: 2750, fragil: true },
  { nome: 'Copo vidro', preco: 9.60, fragil: true },
  { nome: 'copo plastico', preco: 3.00, fragil: false }

]
let newArr = produto.map(item => {
  return item.preco
})

console.log(newArr)
console.log(' ')








