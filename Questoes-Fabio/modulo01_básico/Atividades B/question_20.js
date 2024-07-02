//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
import { question } from "readline-sync"

//Entrada
var temp_C = Number(question("Qual a temperatura em °C?: "))

//Processamento
var C2F = (9 * temp_C + 160) / 5

//Saída
console.log (`${temp_C} °C corresponde a ${C2F} °F`)