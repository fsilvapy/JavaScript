

//herança e prototype -2

const carro = {
    fabricante: "",
    modelo: '',
    ano: '12/03/2018'
}

/* O objeto 'uno' tera todas as propriedades 
* de carro, já que eu defini que uno
* herdara o __proto__ de carro */

const uno = {
    __proto__: carro,
    fabricante: 'Fiat',
    modelo: 'Uno Mobile'

}

/* Aqui vou chamar no console o atributo 'ano'
* mas essa propriedade não esta em uno no entanto
* vai ser imprimida no console pois
* a funçao vai buscar no __proto__ de carro*/
console.log(uno.ano)

/*
const avo = {__proto__: Object.prototype, atributo1: 'A' }

const pai = { __porto__: avo, atributo2: 'B' }//pai aponta pra avo

const filho = {__proto__: pai, atributo3: 'C'}//filho aponta pra pai

console.log(filho.atributo1)
*/










