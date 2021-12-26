// usaremos o setInterval para atualizar a hora


//primeiro criaremos uma função que ira setar a hora

const concatZero = n => {
    return ('0' + n).slice(-2)
}

const intervalo = setInterval(() => {
    
    const hours = () => {
        let hora = new Date().getHours()
        let min = new Date().getMinutes()
        let seg = new Date().getSeconds()

        if(hora < 10 && min )

        return `${hora}:${min}.${seg}`
    }

    document.querySelector('#exitHora').innerHTML = `${hours()}`
}) 
 



