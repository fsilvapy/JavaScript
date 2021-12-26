//funções de Call back

const fabricante = ["Fiat", "Toyota", "Mercedez", "Chevrolet", "Woksvagem"]

function fnFabricantes() {
    for (var i = 0; i < fabricante.length; i++){
            console.log(fabricante[i])
        }
}
fnFabricantes()
console.log(" ")
/*Descrevendo o evento Call Bck, 
*a function 'fnFabricantes' chama o for que 
*por sua vez chama de volta a sua funcionalidade
*para iterar a cada vez e´encontrado
* um novo item no array*/

//=======================================\\

//Call Back com o forEach

function  fn(param1, param2) {
    console.log(`${param2 + 1}. ${param1}`)
}

fabricante.forEach(fn)
/*ATENÇÂO.. o param1 referece a o nome do item
*ja o param2 referece a o indice do item*/
console.log(" ")
//================================================\\

//Call Back com forEach 2

fabricante.forEach((str, num) => {
    console.log(`${num +1}: ${str}`)
})

console.log(" ")
//==============================================\\

//iterando um array sem uma função de call back
//método for in


let notas = [7.7, 3.3, 8.1, 5.6, 9.0, 4.2]

let notaBaixa = []

for (let i in notas) {
    if (notas[i] < 7) {
        notaBaixa.push(notas[i])
    }
}

console.log(notaBaixa)
console.log(" ")

//===============================================\\

//iterando com uma função de Call Back
//método filter

let notasBaixas = notas.filter(notas => notas < 7)
console.log(notasBaixas)

console.log(" ")



//=============================================\\


