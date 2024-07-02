//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.
import { question } from "readline-sync"

function main () {
    const num_1 = getnumber("insira o primeiro número: ")
    const num_2 = getnumber("insira o segundo número: ")
    const num_3 = getnumber("insira o terceiro número: ")
    
    calcular_maior_numero (num_1, num_2, num_3)
}

