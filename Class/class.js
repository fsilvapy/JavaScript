

//criando uma class

class Pessoa {//define-se o nome da class
    constructor(nome, sobreNome) {
    //chama o contrutor da class e passa -se os parametros
        this.nome = nome
        this.sobreNome = sobreNome
        //o this representa a propria class que está
        //pegando o seu parametro
    }

    comprimentar() {
        console.log(`Olá ${this.nome} como vai você ?`)
    }
    //essa função que é um método da class 
    //vai retornar uma propriedade da class
    //no caso foi definido que ela retornara
    //o que for passado por parametro em nome
}


const pessoa1 = new Pessoa('flavio')
pessoa1.comprimentar()
console.log(" ")

//========================================================\\

class Person{

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    first() {
        console.log(`Primeiro nome: ${this.firstName}`)
    }

    last() {
        console.log(`Sobre-nome: ${this.lastName}`)
    }
}


let P1 = new Person('Flavio')
P1.first()

console.log(" ")
//=======================================================\\
//comparando a class com o factory
let P3ssoa = {
    nome1: '',
    sobreNome2: '',
    idade: 00
}

function Pessoa1(nome1, sobreNome2, idade) {
    return P3ssoa = {
        nome1,
        sobreNome2,
        idade,
        fn: () => { console.log(P3ssoa.nome1) }
    }
    }

let p3ssoa = Pessoa1()

console.log(" ")
//=======================================================\\

//comparando class com um função construtora

//função cndtrutora
function  pessoa3(nome) {
    this.nome = nome

    this.fn = () => {
       console.log(`Meu nome é ${this.nome}`)
   } 
}

const person2 = new pessoa3('Flavio')
person2.fn()


