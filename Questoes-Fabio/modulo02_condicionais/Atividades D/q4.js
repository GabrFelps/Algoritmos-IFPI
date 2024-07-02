/*Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.
**/

import {question} from "readline-sync"

function main (){
    const numero = getnumber ("Digite um número de dois algarismos: ") 

    const dezena = Math.floor (numero / 10) 
    const unidade = numero % 10

    if (dezena === unidade){
        print(`${dezena} é igual a ${unidade}`)
    } else {
        print(`${dezena} é diferente de ${unidade}`)
    }


}

function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main()