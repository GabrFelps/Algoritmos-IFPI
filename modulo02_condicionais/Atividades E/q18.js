/*/Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
sobre os dois valores lidos.
**/
import { getnumber, print, retornar_adicao, retornar_multiplicacao, retornar_subtracao, retornar_divisao} from "./functions/io_utils.js"

function main (){
    print ("|------------Calculator------------|")
    const valor_1 = getnumber ("> Insira um numero: ")
    const valor_2 = getnumber ("> Insira outro numero: ") 
    const operacao = getnumber (`
    > Escolha uma operacao:
    (1) - Adicao
    (2) - Subtracao
    (3) - Multiplicacao
    (4) - Divisao
    ----------------------------
    Digite o numero da operacao: 
    > `)

    if (operacao === 1) {
        retornar_adicao (valor_1, valor_2)
    }
    if (operacao === 2){
        retornar_subtracao (valor_1, valor_2)
    }
    if (operacao === 3){
        retornar_multiplicacao (valor_1, valor_2)
    }
    if (operacao === 4){
        retornar_divisao (valor_1, valor_2)
    }
}

main()