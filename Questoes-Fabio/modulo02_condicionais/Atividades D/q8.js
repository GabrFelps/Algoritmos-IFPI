/*Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).
**/

import {question} from "readline-sync"

function main (){
    const dia = getnumber ("Digite o dia atual: ")
    const mes = getnumber ("Digite o mês atual: ")
    const ano = getnumber ("Digite o ano atual: ")

    const dianas = getnumber ("Digite o dia de nascimento: ")
    const mesnas = getnumber ("Digite o mes de nascimento: ")
    const anonas = getnumber ("Digite o ano de nascimento: ")

    if (dia === dianas && mes === mesnas){
        var anocomp = ano - anonas 
        print (`Você tem ${anocomp} anos.`)
    } else if ((mes !== mesnas  && mesnas < mes) && (dia !== dianas && dianas < dia)){
        var mes1 = (mes - mesnas) / 12
        var ano1 = (ano - anonas) - 1 
        var dia1 = (dia - dianas) / 365
        var result1 = mes1 + ano1 + dia1
        
        print (`Voce tem ${result1.toFixed(2)} anos`)

    } else if ((mes !== mesnas  && mesnas > mes) && (dia !== dianas && dianas > dia)){
        var mes2 = (mesnas - mes) / 12
        var ano2 = ano - anonas
        var dia2 = (dianas - dia) /365
        var result2 = mes2 + ano2 + dia2

        print (`Você tem ${result2.toFixed(2)} anos`)
    }
}

function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main()