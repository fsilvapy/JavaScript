
//funções auto invocadas

// IIFE => Imediately Invoked function Expression

(function () {
    console.log("IIFE")
    console.log(" ")
    fn = () => {
        console.log("Aqui é a fn em ação")
        console.log("Imediately")
        console.log("Invoked")
        console.log("Function")
        console.log("Expression")
    }

    return fn()

    })()
/* Para fugir do escopo global um dos recursos muito
*usado é o IIFE função auto invocada
*onde tudo que estiver em seu escopo será privado a
*propria função */
