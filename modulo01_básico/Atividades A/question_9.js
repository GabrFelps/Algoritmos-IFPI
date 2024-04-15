//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import {question} from "readline-sync"

//Entrada
const numb_1 = Number(question("Insira o primeiro numero: "))
const numb_2 = Number(question("Insira o segundo numero: "))

//Processamento
const reverse = `
Ordem de Entrada: (${numb_1}, ${numb_2})
Ordem Inversa: (${numb_2}, ${numb_1})
`
//Saída
console.log (reverse)