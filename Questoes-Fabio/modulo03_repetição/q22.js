import { get_number, print, divisao_maior_que_1 } from "../.UTILS/utils.js";

/*Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
de divisão (/ e %) sejam utilizados. **/

function main(){
    let numerador = get_number("Numerador:")
    let denominador = get_number("Denominador:")
    let quociente = 0
    let resto = 0
    let contador = 0

    if (numerador > denominador) {
        let resultado_maior_1 = divisao_maior_que_1(numerador, denominador, quociente, resto, contador)
        print(`
        Quociente: ${resultado_maior_1.quociente}
        Resto: ${resultado_maior_1.resto}`)
    } else if (denominador > numerador ){
        print(`
        Quociente: 0
        Resto: ${numerador}`)
    } else {
        print (`
        Quociente: 1
        Resto: 0
        `)
    }
}
main()