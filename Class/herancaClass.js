
//Herança

class Avo {
    constructor(sobreNome) {
        this.sobreNome = sobreNome
    }
}

class Pai extends Avo {
    constructor(sobreNome, profissao = 'padeiro') {
        super(sobreNome)
        this.profissao = profissao
        
    }
}

class Filho extends Pai {
    constructor() {
        super('silva')
    }
}

const filho = new Filho()
console.log(filho)










