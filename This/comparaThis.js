// comparando o this,
//sempre que o this estiver só ele
//apontara pa o escopo global.



let comparaThis = function (params) {
    console.log(this === params)

}//Aqui o this é global
comparaThis(global)
console.log(" ")

//============================================\\

/* com o 'bind' podemos amarrar o
*this a função ou ao obj que esta em
*questão */

const obj = {}
comparaThis = comparaThis.bind(obj)
//Aqui thie é o obj, por conta do bind.
comparaThis(global)
comparaThis(obj)
console.log(" ")
//==========================================\\

//o this como parametro de uma função no
//no nodejs sempre vai pertencer ao nodulo

let arowComparaThis = params => console.log(this === params)
//Aqui o this pertence ou modulo do nodejs
//só a propria function podera usa-lo
arowComparaThis(global)
console.log(" ")

//============================================\\



