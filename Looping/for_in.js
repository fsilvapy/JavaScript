
//for in em Array's


/*
*  O for in percorrerar todo o array e
*mostrara o indice e o valor contidos no array
*em que stara sendo iterado, Ex: passe o i, em seguida
*o nome do array.
*
*/

let nomes = ['Claudia', 'Isabel', 'Gertrudes', 'João']

for (i in nomes) {
    console.log(i, nomes[i])
}


//===============================================================

//for in em Objetos


const person = {
    nome: "Flavio",
    idade: 36,
    peso: 67,
    altura: 1.65,
    sexo: "Masculino"

}


for (i in person) {
    console.log(`${i} ${person[i]}`)
}


/*  o 'i' representara os atributos do objeto 'person'
* */
