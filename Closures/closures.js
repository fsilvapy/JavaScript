

//closures é o scopo criado quando
//a função e declarada
//e nesse escopo permite a função manipular
//as variavéis que estiverem diponiveis
//nesse escopo em intorno da função

const x = 'global-1'

function fora() {
    const x = 'local-1'

    function dentro() {
        return x
    }
    return dentro()
}

//Repare que a function dentro vai retornar o valor 
//do x local, porque é onde a função foi definida
//el vai pegar a variavel que estiver perto dela 
// ou seja no escopo onde ela foi declarada.
console.log(fora())
console.log("")

//==================================================\\

const y = "global-2"

function valor() {
    return y
}

function valor2() {
    let y = 'local-2'

    return valor()
}
//note que mesmo tendo uma variavel 'y' dentro do 
//escopo escopo da função valor2, a função valor()
//vai buscar a variavel onde ela foi definida.

console.log(valor2())
console.log(" ")

//==============================================\\

// mais um exemplo 

const valor3 = "fora3"

function closures3() {
    console.log(valor3)
}

function closures4() {
    const valor3 = "local"
    closures3()
}
closures4()

/*note que a função closures3 imprimio a
*constnte valor3 que foi declarda no scopo global
*apesar de ter sido chamada de dentro da função 
*closures4(), a closures3() tem siencia de onde foi
*criada então ela vai buscar as variavés e constntes de onde ela foi criada*/






