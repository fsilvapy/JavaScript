

/* descrevendo a função a baixo
*pegaremos as propriedades der Number com o prototype
*e armazenaremos em uma função de nome 'entre'
*que tambem recebera dois parametros 
*logo em seguida a função vai analizar se o number é  
*menor e maior que o numero estabelecido
**/


Number.prototype.entre = function (num1, num2){
    return this >= num1  &&  this <= num2
}

function analize(num3){
    console.log(num3.entre(5, 10))
}
analize(7)
analize(3)
analize(11)
analize(10)

/* Descrevendo a função a cima
*criamos uma function de nome 'analize' 
*e demos a ela um parametro nome 'num3'
*no corpo da função logara no console a 
*comparação do numero que foi 
*recebido por parametro na função analize 
*com a função entre , nos dando um resultado  booleano
*/

//Outro exemplo

const paisVencedor = [{equipe: 'Brasucas', pais: 'Brasil'}, {equipe: 'Fenix', pais: 'Inglatera'}, {equipe: 'Hercules', pais: 'Athena'}]

paisVencedor.map(function(item, indice){
    console.log(item.pais, indice)
   //return item.equipe
})

/*com o map posso trazer a tona o item*/

