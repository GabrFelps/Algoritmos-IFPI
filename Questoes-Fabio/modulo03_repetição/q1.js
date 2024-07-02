/*Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).
*/ 

import {question} from "readline-sync"

function main(){
    let numero = Number(question("Insira um número: "))
    let lista = ""
    let contador = 1
    while(numero !== 0){
        while(contador <= numero){
            if(numero % contador == 0){
            lista += `${contador} `
            }
            contador++
        }
        console.log(lista)
        numero = Number(question("Insira um número: "))
        lista = ""
        contador = 1
    }
    console.log("Fim...")
}

main()
