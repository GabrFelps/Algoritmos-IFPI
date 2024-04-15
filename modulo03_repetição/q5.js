/**Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
chegar a 2.*/

import { get_number } from "../.UTILS/utils.js"

function main (){
    let numero_X = get_number("Número X: ")
    let numero_N = get_number("Numero N: ")

    while(numero_N >= 2){
        let divisão = numero_X / numero_N
        numero_X = divisão
        console.log(divisão)
        numero_N--
    }

}
main()