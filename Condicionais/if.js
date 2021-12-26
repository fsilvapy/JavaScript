
//trabalhando com o if

/*construiremos uma função que chamara o if 
*suntamente com o operador condicional*/

function num1(num2) {
    if (num2 > 10) console.log(num2 - 10)
//aqui usarei o if sem o seu tradicional bloco
    //poi temos apenas uma sentença de código
}

num1(22)
console.log(' ')
//===============================================================\\

//Em javaScript tudo pode ser convertido para boolean

/* Com uma função e a estrutura if converteremos qualquer valor *para 'true' ou 'false' */

function valor1(valor2) {
    if (valor2) {
        console.log('é verdade... ' + valor2)
    }
}

valor1(22)
valor1(typeof 1)
valor1(typeof 'str')
valor1(typeof true)
valor1(typeof [])
valor1('')//string vazia é convertida pra false, ele não imprime
valor1(' ')
valor1('String')
valor1(null)//null convertido pra false
valor1(undefined)//undefined convertido pra false
console.log(' ')
//============================================================\\

//Fun~ção condicional entre o maior e o menor

const number = (num) => {
    if (num >= 5 && num <= 10) {
       console.log(`O valor: ${num} informado está entre o esperado.`)
    } else {
        console.log(`O valor: ${num} informado não está entre o esperado!`)
   }
}

number(16)
number(6)
console.log(' ')

//==============================================================\\

const getNumber = function(getnum){
    if (getnum >= 10 && getnum <= 1) {
        
    }}




