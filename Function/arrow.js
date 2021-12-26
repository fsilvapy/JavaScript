

// funções arrow


//declarando de forma literal 
let dobro = (num) => num * 2

console.log(dobro(2))
console.log(" ")

//==================================\\

//arrow dentro de um obj

const obj = {
    nome: "",
    idade: 00,
    dobro: (num) => num *2
}

console.log(obj.dobro(16))
console.log(" ")

//======================================\\

//arrow declarada em um array

const listFN = [{ nome: "flavio", idade: 36, }, ['Python', 'Nodejs', 'JS'], [function dobro() { return 10 * 2 }, dobro()]]

console.log(listFN[2][0])

console.log(" ")

//========================================\\







