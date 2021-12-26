
//filter primeiros contatos

const produto = [
  { nome: 'NoteBook', preco: 4500, fragil: true },
  { nome: 'Ipad pro', preco: 2750, fragil: true },
  { nome: 'Copo vidro', preco: 9.60, fragil: true },
  { nome: 'copo plastico', preco: 3.00, fragil: false }
  
]
/* Usando o filter determinei que passace no filtro
* apenas o produto que for maior que 1000 e menor que 3000*/
const preco = produto.filter((item) => {
  return item.preco > 1000 && item.preco <= 3000
  
})

console.log(preco)
console.log(' ')





