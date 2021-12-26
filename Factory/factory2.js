
//factory simples

function pessoa() {
    return {
        nome: "Jaqueline",
        idade: 34,
        sexo: "feminino"
    }
}

console.log(pessoa())


//==============================================\\

//factory com parametros
function factory1(nome, idade) {

    return {
        nome,
        idade,

    }

}

console.log(factory1('flavio', 36))
console.log(" ")




