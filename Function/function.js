

/* The power Function
*/

//Armazenando um propriedade de um objeto


//function call function

function num(valor) {
    this.valor = valor

    function num2(valor) {
        console.log(valor * 2)

    }
    return num2(valor)
}


num(16)
console.log(" ")

//===================================\\

//Declarando uma função de forma Literal

function funcao1 (numero){
    return numero * numero
    
}

//========================================\\

//Armazenando a function em uma Variavél

const funcao2 = function (nome, idade) {
    return nome + idade
}

//===========================================\\

// Armazenando uma function em um Array

function funcao3(a, b) {
   return a + b
}

const myArray = [funcao1, funcao2, funcao3]

//aqui chamara a função pelo seu indice 
//e executara a soma de seus parametros
console.log(`Execuçãoda função 3: ${myArray[2](12, 12)}`)
console.log(" ")

//=========================================\\

console.log(`Execuçãoda função 1: ${myArray[0](8)}`)
//chamaremos a função por seu indice
//no array, passando um numero por parametro da funçao a mesma
//o multiplicara por ele mesmo
console.log(" ")

//==========================================\\

console.log(`Execuçãoda função 2: ${myArray[1]('flavio', 36)}`)
//chamaremos a função por seu indice
//no array, passando uma string e um numero
//por parametro da funçao onde ela vai concatenar a string e o  number
console.log(" ")

//=========================================\\

// Armazenando uma function em um Object

//declarei um objeto
const obj = {}

//aqu eu digo que o objeto tem um atributo
//de nome 'atributo1' que o mesmo vai receber 
//uma função, e que tal função
// vai multiplicar seus dois parametro
obj.atributo1 = (mult1, multi2) => { return mult1 * multi2 }

//quando eu invocar esse atributo do objeto
//a função sera executada
console.log(`executando a função do atributo1: ${obj.atributo1(2, 8)}`)
console.log(" ")
//========================================\\
//passando uma function por parametro


function execute(fn) {
  fn()
}

execute(() =>{console.log("Arrow function funcionando ! ")})
console.log(" ")
//=========================================\\

//função retornando outra função

//Declarado uma função 'soma' com dois parametros
//no scopo da função 'soma' teremos o retorno 
//de uma segunda função 'multi' com um parametro
//no console teremos a soma dos dois parametros da 
//função 'soma' vezes o parametro da função 'multi'
//Obs: respeitar a ordem de presedencia , para a soma
//ser executada primeiro tem que está entre parentese
function soma(a, b) {
    return function multi(c) {
        console.log((a + b) * c)
    }
}

//Duas maneiras de chamar essas funções

//Primeira
soma(2, 3)(4)//parametro da segunda função

//segunda

//foi armazenado a função e o resultrado 
//na variavél 'resultSoma'
//na variavél que tem a primeira função
//dei o parametro da segunda função
//trazendo assim a execução de todos 
let resultSoma = soma(4, 3)

resultSoma(3)

console.log(" ")

//=========================================\\

