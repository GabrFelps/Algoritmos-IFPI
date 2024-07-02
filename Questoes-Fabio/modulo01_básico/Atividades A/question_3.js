//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import { question } from "readline-sync"

//Entrada
var minutes = Number(question("Insira a quantidades de minutos a serem convertidos: "))

//Processamento
var hours = Math.floor(minutes / 60)
var h_m = minutes % 60

//Saída
console.log (`O equivalente em horas é ${hours}h${h_m}min.`)