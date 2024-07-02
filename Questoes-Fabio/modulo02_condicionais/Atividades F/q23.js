/*Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente.
**/

import { getnumber, retornar_data_mais_recente } from "./functions/io_utils.js";

function main (){
    const dia1 = getnumber("Insira o dia da primeira data: ")
    const mes1 = getnumber("Insira o mes da segunda data: ")
    const ano1 = getnumber("Insira o ano da primeira data: ")
    const dia2 = getnumber("Insira o dia da segunda data: ")
    const mes2 = getnumber("Insira o mes da segunda data: ")
    const ano2 = getnumber("Insira o ano da segunda data: ")

    retornar_data_mais_recente (dia1, dia2, mes1, mes2, ano1, ano2)
}

main()