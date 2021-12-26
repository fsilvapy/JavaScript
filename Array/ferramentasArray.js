

/*Existe muitas ferramentas para
* manipular um Array veremos algumas delas
* nese inicio de aula. */


const arrFrutas = ['Mamão', 'Tomate', 'Limão']

//verificar o tamanho do Array
console.log(arrFrutas.length)
console.log(arrFrutas)
console.log(' ')

//Para adiciconar elementos ao final 
//do array.
console.log(arrFrutas.push('Uva'))
console.log(arrFrutas)
console.log(' ')

/** Para retirar o elementos do indice 0*/
console.log(arrFrutas.shift('Abacate'))
console.log(arrFrutas)
console.log(' ')

/*Para adicionar elementos ao indice 0*/
console.log(arrFrutas.unshift('Jaca'))
console.log(arrFrutas)
console.log(' ')


//para reorganizar o array
console.log(arrFrutas.sort())
console.log(' ')


/*para retirar ou acrescentar ou ate 
* mesmo retirar e acrescentar !*/
console.log(`Foi retirado: ${arrFrutas.splice(1, 2)}`)
/*Apartir do indice 1 ate o indice 2
*sera excluido*/
console.log(`Sobrou: ${arrFrutas}`)
console.log(' ')

//      DELETANDO !! com splice \\
/*  --> Cuidado para não esquecer 
*  para excluir com o metodo
* splice funciona da seguinte maneira
* chama o metodo  splice() definice o indice
* que é por onde ele vai começar
* splice(1, ) apóis isso definice
* quantos itens ele vai deletar
* splice(1, 3)  <--     */
//                                \\


//     ADICIONAR !! com o splice  \\
/* --> para adicionar itens com o splice
* o processo é parecido com de deletar
* chama o metodo splice()  defice-se por 
* qual o indice ele vai começar
* splice(6, ) depois quantos itens vai ser 
* acrescentados  */


/*Adicionando elementos ao array*/
console.log(arrFrutas.splice(1, 'Caqui', 'F. do Conde'))
console.log(arrFrutas)
console.log(' ')



/*deletando um item*/
console.log(delete arrFrutas[0])
console.log(arrFrutas)
console.log(' ')

