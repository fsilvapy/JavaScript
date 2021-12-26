
//prototype -4

//definindo uma função !
function myObj() { }

//mostrando no console o que é o
//prototype de 'myObj' 
console.log(myObj.prototype)//test {}

//costruindo novos objetos 
//apartir de uma função construtora

const obj1 = new myObj()

const obj2 = new myObj()

//obj1 é obj2 terá como seu prototype myObj
//porque foram criados tendo myObj como 
//modelo de referencia

console.log(obj1.__proto__ === obj2.__proto__)//test true
//sendo assim os dois apontara
//para o mesmo portotype

//=======================================================\\
//testes comparativos

/*Aqui testamos se o __proto__ do objeto criado é igual a 
* ao prototype do objeto pai 'myObj' */
console.log(obj2.__proto__ === myObj.prototype)//test true

/*Aqui testamos se o __proto__ da função construtora é 
*igual ao prototype da função 'myObj' */
console.log((new myObj).__proto__ === myObj.prototype)

/*testamos se o __proto__ e igual ao function.prototype*/
console.log(myObj.__proto__ === Function.prototype)
//============================================\\

//Ao prototype da função myObj que é
//myObj.prototype vamos atribuir uma função e um atributo

myObj.prototype.nome = 'flavio'







