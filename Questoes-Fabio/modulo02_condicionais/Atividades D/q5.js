//Leia 3 (três) números e escreva-os em ordem crescente.

import {question} from "readline-sync"

function main (){
    let num_1 = getnumber("insira o primeiro número: ")
    let num_2 = getnumber("insira o segundo número: ")
    let num_3 = getnumber("insira o terceiro número: ")
    let maior = 0
    let meio = 0
    let menor = 0

    if (num_1 > num_2 > num_3){
        maior = num_1
        meio = num_2
        menor = num_3

        print (`${menor}, ${meio}, ${maior}`)

    }
    if (num_3 > num_2 > num_1){
        maior = num_3 
        meio = num_2
        menor = num_1

        print (`${menor}, ${meio}, ${maior}`)

    }
    if (num_1 > num_3 > num_2){
        maior = num_1
        meio = num_3
        menor = num_2

        print (`${menor}, ${meio}, ${maior}`)

    }
    if (num_3 > num_1 > num_2){
        maior = num_3 
        meio = num_1
        menor = num_2

        print (`${menor}, ${meio}, ${maior}`)

    }
    if (num_2 > num_1 > num_3){
        maior = num_2
        meio = num_1
        menor = num_3

        print (`${menor}, ${meio}, ${maior}`)

    }
    if (num_2 > num_3 > num_1){
        maior = num_2 
        meio = num_3
        menor = num_1
    }
        print (`${menor}, ${meio}, ${maior}`)

}

function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main()