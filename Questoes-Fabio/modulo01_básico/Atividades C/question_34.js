//Leia 3 números, calcule e escreva a média dos números.
import { question } from "readline-sync"

//Entrada
var num_1 = Number(question("Insira o primeiro numero: "))
var num_2 = Number(question("Insira o segundo numero: "))
var num_3 = Number(question("Insira o terceiro numero: "))

//Processamento
var media = (num_1 + num_2 + num_3) / 3
var result = `
Resultado:
Numero 1: ${num_1}
Numero 2: ${num_2}
Numero 3: ${num_3}
Média dos números ${media.toFixed(2)}
`
//Saída
console.log (result)