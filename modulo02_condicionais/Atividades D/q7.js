/* Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).
import {question} from "readline-sync"
**/
 
import { question } from "readline-sync"

function main (){
    const num_1 = getnumber("insira o primeiro número: ")
    const num_2 = getnumber("insira o segundo número: ")
    const num_3 = getnumber("insira o terceiro número: ")

    if ((num_1 < num_2 + num_3) && (num_2 < num_1 + num_3) && (num_3 < num_1 + num_2)){
        print ("Os números inseridos FORMAM um triângulo")
    } else {
        print ("Os números inseridos NÃO FORMAM um triângulo")
    }

    if ((num_1 === num_2) && (num_2 === num_3)){
        print ("O triângulo é Equilátero")
    } else if ((num_1 !== num_2) && (num_2 !== num_3) && (num_1 !== num_3)){
        print ("O triângulo é Escaleno")
    } else if (((num_1 === num_2) && (num_1 !== num_3)) || ((num_1 === num_3) && (num_1 !== num_2)) || ((num_2 === num_3) && (num_2 !== num_1))){
        print ("O triângulo é Isóceles")
    }
         
}

function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main() 