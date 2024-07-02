//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import { question } from "readline-sync"

//Entrada
var num_1 = Number(question("Insira o primeiro numero: "))
var num_2 = Number(question("Insira o segundo numero: "))
var num_3 = Number(question("Insira o terceiro numero: "))

//Processamento
var sum_1_2 = num_2 + num_1
var dif_2_3 = num_2 - num_3
var result = `
Resultado:
Numero 1: ${num_1}
Numero 2: ${num_2}
Numero 3: ${num_3}
Soma dos 2 primeiros: ${sum_1_2}
Diferença dos 2 ultimos: ${dif_2_3}
`
//Saída
console.log (result)