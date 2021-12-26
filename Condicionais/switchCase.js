

// conhecendo o switch case


//função onde vai receber numero e passar para o switch
//o switch por sua vez fara o comparativo entre valores
//e executara uma ação


function getNumber(num) {

    switch (num) {
        case 10:
        case 9:
        case 8:
            console.log(`great result `)
            break;
        case 7:
        case 6:
        case 5:
            console.log(`good result`)
            break;
        case 4:
        case 3:
        case 2:
        case 1:
            console.log(`bad result`)
            break;
        default:
            if (num > 10) {
                console.log(` O valor: ${num} está a cima do número esperado ou não é um número`)
            } else if (num <= -1) {
                console.log(`o valor ${num} está a baixo do esperado`)
            }
            
    }


}

getNumber(-9)










