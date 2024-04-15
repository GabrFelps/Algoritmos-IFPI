//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
import { question } from "readline-sync"

//Entrada
var temp_F = Number(question("Qual a temperatura em °F?: "))

//Processamento
var F2C = (5 * temp_F - 160) / 9

//Saída
console.log (`${temp_F} °F corresponde a ${F2C} °C`)