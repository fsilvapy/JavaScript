
//promises

function myPromice(time, frase) {
  return new Promise(Resolve => {
    setTimeout(() => {
      Resolve(frase)
    }, time * 1000)
  })
}

console.log(myPromice(2, '200').then((frase) => {
  console.log(`${frase} ${'Ok'}`)
  
}))

 
















