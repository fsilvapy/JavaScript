
// map aprendi ?

let num = [75, 25, 32, 45, 97, 80]

num.map((item, indice) => {
  console.log(`${indice +1}) ${item}`)
})

console.log(' ')


num.map((item, indice) => {
  console.log( `${indice +1}) ${Math.imul(item, 5)}`)
})

console.log(' ')


num.map((item, indice) => {
  console.log('esse valor é menor que 50 ?')
  console.log(`${indice + 1}) ${item < 50}`)
})


console.log(' ')


function getRandom(min, max) {
  return Math.random() * (max - min) + min
}

let numRandom = num.map((item) => item <= getRandom(100, 10) ? true : false)

console.log(numRandom)


console.log(' ')

console.log(' ')

let numStr = ['zero', 'um', 'dois', 'tres', 'quatro']

console.log(`
Aqui antes de modificar o array
 (${numStr})`)
/*
function numArr(params) {
  if (params.length < 6) {
    params.push('cinco')


    // Array.prototype.push.apply(newArr, params);
  }
  return params
}*/
console.log(' ')

numStr.map(function () {
  if (numStr.length < 6) {
     numStr.push('cinco')
      
  }
  
})

console.log(`
Aqui depois de modificar o array
(${numStr})`)














