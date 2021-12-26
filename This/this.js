//this

const pessoa = {
    nome: 'Flavio',
    f1(){
        return this.nome

    }
}

console.log(pessoa.f1())
//tentando acessar o atributo do obbjeto 
//por uma função vai dar certo ?

function  objProp(){return pessoa.f1()}
objProp()

//armazenando o objeto e seu atributo em uma variavel
//vai dar certo?

const objF1 = pessoa.f1()
console.log(objF1)

//document.querySelector('#saida').innerHTML = `3${objF1} = 2${objProp()} = 1${pessoa.f1()}`

//=====================================================================
