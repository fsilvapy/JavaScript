
//herança - 3

const pai = {
    nome: 'flavio',
    corCabelo: 'Castanho Claro'
}

const filho = Object.create(pai)
filho.nome = 'Caleb'
console.log(filho, filho.corCabelo)

/* O Object.create criara um novo objeto,
*  fara com que o o novo objeto herde as
* propriedades de seu __proto__  
* que nesse caso e o objeto pai*/

const filha1 = Object.create(
    pai, {
        nome: {value: 'Talita', writable: false, enumerable: true}
    })

console.log(' ')

console.log(filho)

console.log(' ')

filha1.nome = 'Thalita'
/*uma tentativa de mudar o valor de nome
*mas como bem sabemos sera ignorado */
console.log(filha1)
console.log(filha1.corCabelo)

console.log(' ')

console.log('//========================================///-> ')

console.log(' ')
//===================================================\\

console.log(`Objeto pai ( keys ) ${Object.keys(pai)}`)
console.log(`Objeto filha1 ( values ) ${Object.values(filha1)}`)
console.log(`Objeto filho ( entries ) ${Object.entries(filho)}`)



    