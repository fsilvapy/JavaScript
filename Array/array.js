
/*Os array´s são Objetos em javaScript 
* pois o js não tem array como nativo da 
* da linguagem */

console.log(
    typeof Array,//function
    typeof new Array,//Object
    typeof []//Object
)


console.log('//===============================\\')

//==============================================\\

//maneiras de declarar Array's

//Posso declarar apartir do construtor new
let aprovados = new Array('bia', 'Carlos', 'Ana')
console.log(aprovados)
console.log(' ')
console.log('//===============================\\')

//Posso declarar de forma literal

let aprovados2 = ['Ricardo', 'Aliso', 'Maria']
console.log(aprovados2[0])
console.log(aprovados2[1])
console.log(aprovados2[2])
console.log(aprovados2.length)
console.log(' ')
/*se eu pedir um valor que ainda não exista 
*no array , ele retornara undefined
*porque nada foi atribuido a esse indece.*/
console.log(aprovados2[3])
console.log(aprovados2.length)
console.log(' ')
//=============================================\\
console.log('//======================================\\ ')
/*Posso atribuir um elemento ao 
*indice que eu desejar, sob-escrevendo ou
*criando uma nova posição no array*/

aprovados2[5] = 'flavio'
console.log(aprovados2)
console.log(aprovados2.length)







