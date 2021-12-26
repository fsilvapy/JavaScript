

//propriedades staticas das class

class Contar {

  static count = item => item.length

}


let arr = [
  'um',
  'dois',
  'tres',
  'quatro',
  'cinco'
]



console.log(Contar.count(arr))

console.log(' ')

//=============================================\\

class Container{
  static afirmo = ('Isso é uma propriadade Statica !')
  static confirmo = ('Isso está correto !')
}


console.log(Container.afirmo)