//Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import { question } from "readline-sync"

//Entrada
var num_1 = Number(question("Insira o primeiro numero: "))
var num_2 = Number(question("Insira o segundo numero: "))

//Processamento
var result_sum = num_1 + num_2
var result_dif = num_1 - num_2
var result_end = result_sum / result_dif

//Saída
console.log (`a divisão da soma pela subtração dos números lidos é ${result_end.toFixed(2)}`)