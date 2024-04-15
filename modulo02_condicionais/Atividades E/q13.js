/*Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos 
os valores são diferentes.
**/

import { achar_maior_numero, achar_menor_numero, getnumber, print } from "./functions/io_utils.js"

function main(){
    const num1 = getnumber("Insira o primeiro número: ") 
    const num2 = getnumber("Insira o segundo número: ")
    const num3 = getnumber("Insira o terceiro número: ")
    const num4 = getnumber("Insira o quarto número: ")
    const num5 = getnumber("Insira o quinto número: ")

    let maior_resultado = achar_maior_numero (num1, num2, num3, num4, num5)
    let menor_resultado = achar_menor_numero(num1, num2, num3, num4, num5)

    print(`
    O maior número é ${maior_resultado}
    O menor número é ${menor_resultado}
    `)

}

main()