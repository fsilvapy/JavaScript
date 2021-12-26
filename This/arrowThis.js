
//o this não muda no arrow


//usando uma function normal
let comparandoThis = function (param) {
    console.log(this === param)
}
comparandoThis(global)
console.log(" ")
/* O this aqui não representa a function e sim o escopo global*/
//================================================\\

//usando uma arrow function
let arrow = param =>  console.log(this === param)

arrow(global)
console.log(" ")
/*Definido em uma arrow function ele representa
*a propria function Arrow*/
//================================================\\

//o this denro de um objeto

const obj = {
    //Function normal
    n1:  function (params) {
        return this === params
    },

    //Arrow Function
    n2: param => {
        console.log(this === param)
    }

}
console.log(obj.n1(global))
obj.n2(global)
console.log(" ")

//=============================================\\









