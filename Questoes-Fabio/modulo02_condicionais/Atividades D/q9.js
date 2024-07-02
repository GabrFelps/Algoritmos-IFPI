//Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import {question} from "readline-sync"

function main (){
    const number = getnumber ("Digite um número: ")
    
    if (number === 2 || number === 3 || number === 5 || number === 7 || number === 11 
        || number === 13 || number === 17 || number === 19 || number === 23 || number === 29 
        || number === 31 || number === 37 || number === 41 || number === 43 || number === 47 
        || number === 53 || number === 59 || number === 61 || number === 67 || number === 71 
        || number === 73 || number === 79 || number === 83 || number === 89 || number === 97) {

        print (`o número ${number} é primo.`)
        
    } else {
        print (`o número ${number} não é primo.`) 
    }
}

function print (mensagem){
    return console.log (mensagem)
}

function getnumber (msg){
    return Number(question(msg))
}

main()