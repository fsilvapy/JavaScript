
//Arguments function obsolet

/* Essa função está obsoleta 
*mas funcionava da seguinte maneira 
*
*era declarada uma função 
*dentro da função é declarada uma variavél
*que recebe um valor
*com o for ..in iteraremos os arguments que  
*serão os parametros passados a função 
*no momento em que ela é chamada função*/


function soma() {

    let x = 0

    for (i in arguments) {
        x += arguments[i]

    }

    return x
}

console.log(soma(23, 05, 16))


