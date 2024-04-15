//Leia um valor em m, calcule e escreva o equivalente em cm.
import { question } from "readline-sync"

//Entrada
var m = Number(question("Qual o valor em metro?: "))

//Processamento
var cm = m * 100

//Saída
console.log (`Em ${m} metros, há ${cm} centímetros`)