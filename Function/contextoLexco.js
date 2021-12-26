
// Contexto lexco

let valor = 'global'

function myFunction() {
    console.log(valor)
}


function exec() {
    let valor = 'local'
    myFunction()
}

exec()
/* Quando a função exec() chama a função myFunction()
*a função myFunction() pega a variavél do scopo onde ela
*foi criada, mesmo sendo chamada em local diferente
*isso se da por conta do contexto lexco da função 
**/

