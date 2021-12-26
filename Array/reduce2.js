
///uso do reduce



/*   Iremos testar se no array 
* temos algum nome menor que 
* 6 caracteres se o resultado do 
* teste com o map for true
* o reduce reduzirar a um numero */
const array = ['patricia', 'vilma', 'gustavo', 'ricardo']

let teste = array.map(
  item => item.length <= 6).reduce(
    (ac, item) => ac + item
)

console.log(teste)

console.log(' ')

//======================================================\\

const alunos = [
  { nome: 'Ana', nota: 85.5, bolsista: true },
  { nome: 'Jovane', nota: 78, bolsista: false },
  { nome: 'Ricardo', nota: 94, bolsista: false },
  { nome: 'Isabele', nota: 96, bolsista: true },
  { nome: 'liliane', nota: 75.8, bolsista: false }
]

//tem algum aluno bolsista?
let aluno = alunos.map(item => item.bolsista === true).reduce((ac, item) => ac + item)

console.log(`alunos bolsistas: ${aluno}`)
console.log(' ')

//assim tambem seria valido
let temBolsista = (item, bolsista) => item || bolsista
console.log(alunos.map(item => item.bolsista).reduce(temBolsista))
console.log(' ')

//===================================================\\

//todos os alunos são bolsistas ?
let aluno2 = alunos.map(item => item.bolsista ).reduce((ac, item) => { return ac, item })

console.log(`todos são bolsistas: ${aluno2}`)
console.log(' ')

//poderia fazer tanbem dessa maneira
let todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(item => item.bolsista).reduce(todosBolsista))
console.log(' ')
























