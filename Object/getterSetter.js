
//get e set
const getSet = {
    _valor: 1000,//o underline é apenas uma convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
} 
console.log(' ')
console.log(getSet.valor, getSet.valor)
getSet.valor = 750
console.log(getSet.valor)

/*com o metodo get set podemos mexer nas variavei privadas
*como na validação a cima*/






