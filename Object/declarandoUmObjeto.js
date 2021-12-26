
//construindo Objetos 

// 1 - declarando de forma literal 

const obj1 = {
    nome: "francisco",
    idade: 37,
    peso: 67,

}
console.log(obj1.nome)

console.log(" ")

// 2 - declarando com o new 

const obj2 = new Object

obj2.nome = 'flavio'
obj2.idade = 37
obj2.peso = 67

console.log(obj2)
console.log(" ")

// Construindo um objeto aprtir de uma função
// e o construtor new

function Obj3(nome, idade, peso) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
}

const obj3 = new Obj3('flavio', 36, 67)
console.log(obj3)
console.log(" ")
console.log(`Meu nome é ${obj3.nome} e minha idade e ${obj3.idade} anos`)

console.log(" ")

//Construindo um obj apartir da função factory

const newFunction = ( n, i, p) => {
    return {
        n,
        i,
        p

    }
 }


const f1 = newFunction('flavio', 37, 67)

console.log(f1)


