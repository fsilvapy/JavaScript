
//funções do object

// 1 - freeze


const obj = {
    produto: '',
    tipo: '',
    data: '10/10/2020'
}

//com a função freeze, ela congela totalmente o objeto
//não pode mais mudar o nome dos atributos
Object.freeze(obj)

//veja que ele ignora essa nova string
//que esta sendo atribuida a propriedade data
obj.data = '31/10/2021'

console.log(obj.data)
console.log('//===========================================\\')

//=====================================================\\

//posso acessar diretamente as chaves ou valores 
// do object ou o  entries

const obj1 = {
    produto: 'smartphone',
    tipo: 'eletronico',
    data: '18/05/1984'
}

console.log(`keys: ${Object.keys(obj1)}`)
console.log(' ')

console.log(`values: ${Object.values(obj1)}`)
console.log(' ')

console.log(`entries: ${Object.entries(obj1)}`)
console.log('//===========================================\\ ')

//========================================================\\

//definindo um object com o create

const pessoa = Object.create(null)

pessoa.nome = 'flavio'
pessoa.idade = 36
pessoa.sexo = 'masculino'

console.log(pessoa)
console.log(pessoa.nome)
console.log('//===========================================\\ ')
//===================================================\\

//assim como o freeze que congela um object,
//podemos também congelar um atributo com o 
//defineProperty

//Usage defineProperty

const person = {
    nome: 'flavio',
    idade: 36,
    sexo: 'masculino'
}

Object.defineProperty(person, "dataNascimento", {
    enumerable: true,//aqui diz que ele vai aparecer em pesquisas
        writable: false,//aqui diz que não podera ser Re-incrita
            value: '03/11/2021'//aqui será o valor de dataNascimento
})


console.log(person)
console.log(person.dataNascimento)
    
