/*Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
quando a soma de dois números consecutivos da lista for igual a X.**/

import {get_number, print} from "../.UTILS/utils.js"

function main(){
    const numero = get_number("Insira um numero: ")
    let num_lista = get_number("Insira outro número: ")
    retornar_lista(numero, num_lista)
}

 function retornar_lista(numero, num_lista){
    num_lista = num_lista + 0
    let numero_anterior = 0
    while (num_lista + numero_anterior !== numero){
        numero_anterior = num_lista
        num_lista = get_number("Insira outro número: ")
    }
 }

main()