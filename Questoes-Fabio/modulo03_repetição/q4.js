/*Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
resultado da última divisão efetuada.
*/
import { get_positive_number, print } from "../.UTILS/utils.js"

function main (){
    let numero = get_positive_number("Insira um número inteiro positivo: ")

    while (numero >= 1){
        numero = numero / 2
    }

    print(numero)
}

main()

