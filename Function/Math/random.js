
//random do Math


function time(min, max) {

  max = Math.floor(max);//retorna um inteiro
  return Math.floor(Math.random() * (max - min)) + min;
}




//console.log(time(10, 100))

//====================================\\

function setTime() {
  setInterval(() => {//seta função em um intervalo de 3 min
   console.log(time(10, 100))
  }, 3000)
}

console.log(setTime())










