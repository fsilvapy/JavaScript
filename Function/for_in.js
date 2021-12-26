//usando for in


let f1 = (numero) => {console.log( numero * 2)}//Arrow function

const obj = {
    nome: 'flavio',
    idade: 36,
    sexo: 'Masculino',
    f1(numero){console.log( numero *2)}
}

f1(6)//função no escopo global

obj.f1(12)//função método do objeto

console.log(" ")



//for in
//percorrendo um object com o for

for(i in obj){
    console.log(`${i} ${obj[i]}`)
}




