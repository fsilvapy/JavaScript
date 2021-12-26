//factory é a criação de um objeto
//dentro de uma função

let produto = {//Objeto reutilizavél
    nome: "",
    preco: 00,
    desconto: 0.10,
}

function criarProduto(nome, preco, desconto) {
   
    
    return produto = {
        nome,
        preco,
        desconto,
       
    }
   
}
console.log(criarProduto('chocolate', 3.80, 0.10))
console.log(criarProduto('alcatra', 33.89, 0.10))
console.log(criarProduto('shampoo', 13.80, 0.10))
console.log(" ")
//====================================================\\

//exemplo 2 de factory

let pessoa = {//Objeto reutilizavél
    nome: "",
    sobreNome: "",
    idade: 00,
    sexo: "",

}

function factoryPerson(nome, sobreNome, idade, sexo) {

    return pessoa = {
        nome,
        sobreNome,
        idade,
        sexo
    }
}

console.log(factoryPerson('flavio', 'silva', 36, 'masculino'))
console.log(factoryPerson('Jaqueline', 'Reis', 33, 'feminino'))
console.log(factoryPerson('Deborah', 'silva', 03, 'feminino'))
console.log(" ")

//=======================================================\\






