/*Leia 2 (dois) números, verifique e escreva o menor e
o maior entre os números lidos.
**/

import { question } from "readline-sync"

function main (){
    const num_1 = getnumber("insira um número: ")
    const num_2 = getnumber("insira outro número: ")
    let maior = 0
    let menor = 0

    if (num_1 > num_2){
        maior = num_1
        menor = num_2

        print (`${maior} é maior que ${menor}`)
    }else if (num_2 > num_1){
        maior = num_2
        menor = num_1

        print (`${maior} é maior que ${menor}`)

    }else{
        print ("os números são iguais")
    }
}

function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main()