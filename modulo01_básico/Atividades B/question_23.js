//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
import { question } from "readline-sync"

//Entrada
var kg = Number(question("Qual o valor em kg?: "))

//Processamento
var kg2g = kg * 1000

//Saída
console.log (`${kg} kg corresponde a ${kg2g} g.`)