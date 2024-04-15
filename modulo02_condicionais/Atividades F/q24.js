import { getnumber, print } from "./functions/io_utils.js";

function main (){
    const a = getnumber("Qual o valor do Coeficiente de A: ")
    const b = getnumber("Qual o valor do Coeficiente de B: ")
    const c = getnumber("Qual o valor do Coeficiente de C: ")

    const delta = (b ** 2) - (4*a*c)
    if (a === 0){
        print("O COEFICIENTE A NÃO PODE SER 0")
    }else{
         calcular_raizes (a, b , c , delta)
    }
}

function calcular_raizes (a, b, delta){
    let raiz1 = 0
    let raiz2 = 0
    let raiz = 0

    if (delta > 0){
        raiz1 = (-b + Math.sqrt(delta) )/(2*a);
        raiz2 = (-b - Math.sqrt(delta) )/(2*a);

        print(`
        As raizes são ${raiz1} ${raiz2}
        `)
    } else if (delta === 0){
        raiz = (-b + Math.sqrt(delta) )/(2*a);

        print (`
        Raiz DUpla: ${raiz}
        `)
    }
}
main()