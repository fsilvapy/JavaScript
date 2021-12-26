//
//Nessa function os parametros tem um valor 
//padrão
function soma(a = 1, b = 1, c = 1) {
    return (a + b) * c
}
console.log(soma(2, 2, 2))

console.log(soma(2, 0, 2))

console.log(soma())

console.log(" ")
//=========================================\\

function soma2(a, b) {
    return a + b
}

function mult(a, b, multipli = soma(0, 0, 2)) {
   console.log(multipli(a, b))
}

mult(2, 2)