//Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.

import { print, get_number } from "../.UTILS/utils.js"

function main(){
    let n1 = get_number("Insira o primeiro número: ")
    let n2 = get_number("Insira o segundo número: ")
    let resultado = mdc(n1, n2)
    print(resultado)
}

function mdc(n1, n2){
    let resto
    let x
    let y 
    x = n1
    y = n2
    while(resto !== 0){
        resto = x % y
        x = y
        y = resto
    }
    return x 

}
main()