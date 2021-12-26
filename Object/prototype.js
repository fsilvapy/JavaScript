
//Herança e prototype

/* O objetivo principal do prototype
* e fazer um reuso dos atributos 
* evitando que o programador copie e
* cole muitos codigos*/


/* É o que se chama de herança
* voce cria um objeto modelo
* ou ceja o 'pai' e apartir dele
* define outros objetos com os 
* os mesmos atributos  */

/* Apartir do objeto filho podemos ter
* acesso as propriedades do seu 'pai'
* */




const ferrari = {
    modelo: "F40",
    velMax: 325
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype )

console.log(Object.prototype === __proto__)

console.log(Object.prototype.__proto__)

console.log(' ')
console.log('//==============================================///->')

//=============================================================\\


function meuObj() { }

console.log(typeof Object, typeof meuObj)
console.log(Object.prototype, meuObj.prototype)



