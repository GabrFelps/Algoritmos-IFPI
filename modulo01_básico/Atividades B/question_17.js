//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
import { question } from "readline-sync"

//Entrada
var base = Number(question("Qual a base do retangulo: "))
var altura = Number(question("Qual a altura do retangulo: "))

//Processamento
var area = base * altura

//Saída
console.log (`A área do retangulo é ${area}`)