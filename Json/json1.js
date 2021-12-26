
/* JSON e um arquivo de texto para
* comunicção entre tecnologias diferentes
* todas as linguagens de programação
* lê JSON */

//como se define um arquivo JSON



//Aqui notação literal de Objeto
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){return this.a + this.b + this.c}
}

console.log(obj.soma())

//tranformando meu objeto em arquivo JSON
console.log(JSON.stringify(obj))

//testando se o arquivo recebeido é um JSON
//console.log(JSON.parse("{'a': '1'}"))//não valido

console.log(JSON.parse('{"a": "1"}'))//valido









