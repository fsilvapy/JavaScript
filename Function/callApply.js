
//Call Apply



//a diferença  de como chamar  a função call e apply


//função de preço moeda desconto e imposto
function getPreco(imposto = 0, moeda = 'R$', desc = 0) {
    return `${this.nome} ${moeda} ${this.preco * (1 - desc) * (1 + imposto)}`
}


//construindo um objeto

const produto = {
    nome: 'Notebook',
    preco: 3.690,
    desc: 0.00,
    imposto: 0.00,
    getPreco
}



//console.log(produto.getPreco())
console.log(" ")

//===============================================\\


//criando outro obj
const carro = {
    nome: 'Renot Sandero',
    preco: 65.930,
    desc: 0.00,
    imposto: 0.00,
    getPreco

}


//console.log(carro.getPreco())
console.log(" ")
//================================================\\

//Usando o Call

//os parametros do call o objeto o imposto a moeda e o desconto
console.log(getPreco.call(carro, 0.00, 'R$', 0.10))

console.log(" ")
//Usando o apply

//os parametros do apply devem esta dentro de um array
console.log(getPreco.apply(produto, [0.10, 'R$', 0.00]))

//==================================================\\








