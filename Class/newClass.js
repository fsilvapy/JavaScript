
//Class

/*Simularemos um programa que vai
medir o ciclo mensal financeiro*/
class LanceMes{//recebera o produto é o valor
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloMesal{//indicara o dia é mes do gasto
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }




}

//==============================================\\


const salario = new LanceMes('salario', 1600)

const gastos = new LanceMes('cartao', -560 )

const mesVigente = new CicloMesal(5, 06)

mesVigente.addLancamentos(salario , gastos)

console.log(mesVigente.sumario())








