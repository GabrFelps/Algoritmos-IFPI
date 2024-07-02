//Leia um valor em km, calcule e escreva o equivalente em m.
import { question } from "readline-sync"

//Entrada
var km = Number(question("Qual a distancia em km?: "))

//Processamento
var km2m = km * 1000

//Saída
console.log (`${km}km corresponde a ${km2m}m.`)