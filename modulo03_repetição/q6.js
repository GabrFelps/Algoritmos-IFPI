//Escreva um algoritmo para determinar o número de dígitos de um número informado.

import { question } from "readline-sync";

function main(){
    const numero = Number(question("Digite um número: "))
    let limite = 10
    let contador = 1

    while( numero >= limite){
        contador++
        limite = limite * 10
    }

console.log(`${contador} digitos`)
}

main()