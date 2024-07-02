//Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import { compararmedia, getnumber } from "./functions/io_utils.js";

function main(){
    const num1 = getnumber("Insira o primeiro número: ") 
    const num2 = getnumber("Insira o segundo número: ")
    const num3 = getnumber("Insira o terceiro número: ")
    const num4 = getnumber("Insira o quarto número: ")
    const num5 = getnumber("Insira o quinto número: ")

    compararmedia (num1, num2, num3, num4, num5)

}

main()