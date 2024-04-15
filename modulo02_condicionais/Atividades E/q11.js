/*Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.
**/

import { getnumber, print } from "./functions/io_utils.js"

function main(){
    const num1 = getnumber("Insira o primeiro número: ") 
    const num2 = getnumber("Insira o segundo número: ")
    const num3 = getnumber("Insira o terceiro número: ")
    const option = getnumber("Insira a opção (1, 2, 3): ")

    if (option === 1){
        print(num1)
    } else if (option === 2){
        print(num2)
    } else if (option === 3){
        print(num3)
    } else {
        print("Número inválido!! A opção só recebe os números 1, 2 e 3")
    }
    
}

main()