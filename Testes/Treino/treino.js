//jogo

console.log("\\==Adivinho o seu Pensamento==/")
console.log(" ")

function Time(time, word) {
  setTimeout(() => {
    console.log(`${word}`)
  }, time * 1000)
}

Time(2, 'Pense em um Número')



//=============================\\

function Delei() {
  setTimeout(() => {
    console.log('Pensou ?')
  }, 4500)
}
Delei()


//==========================\\


function Delei2() {
  setTimeout(() => {
    console.log('Agora, o multiplique que por 2')
  }, 6500)
}

Delei2()

//===========================\\


function Delei3() {
  setTimeout(() => {
    console.log('O resultado da multiplicação vc , o multiplica por 5')
  }, 10000)
}
Delei3()

//==========================\\

function Delei4() {
  setTimeout(() => {
    console.log('o resultdo da multiplicação, vc o divide pelo número que vc pensou no inicio')
  }, 18000)
}
Delei4()

//============================\\

function Delei5() {
  setTimeout(() => {
    console.log('Do resulta do da divisão , subtraia 7')
  }, 28000)
}
Delei5()

//===========================\\

function Final() {
  setTimeout(() => {
    console.log('O resultado final é ( 3 )')
  }, 32000)
}
Final()













