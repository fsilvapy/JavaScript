
//Criando um Objeto

//Objetos são conjuntos de um par de chave é valor

const carro = {//Objeto Pai
    marca: 'Honda Civic',
    valor: 75.000,
    val_seguro: 0.06,

    dono: {//Objeto filho
        nome: 'José Ricardo',
        idade: 45,

        end: {//objeto neto
            rua: 'Gigantes',
            numero: 1000,
            bairro: 'capibaribe',
            estado: 'PE'
        }

    },
    info_basic() {//Uma função
        console.log(`Proprietario(a) ${carro.dono.nome} /Mod.Carro:${carro.marca} Valor Seg.R$${carro.valor - carro.val_seguro} /End. Proprietario:Rua ${carro.dono.end.rua} ${carro.dono.end.numero} Bairro ${carro.dono.end.bairro} / ${carro.dono.end.estado}`)
    }

}
carro.info_basic()

/*É preciso usar os pontos para cada propriedade
*ou metodo dentro do objeto
*exemplo , para ter acesso ao estado 
*onde o dono do veiculo nasceu foi preciso
*escrever assim ' carro.dono.end.estado '
 */
console.log(' ')
//================================================\\


