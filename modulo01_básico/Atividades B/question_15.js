//Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
import { question } from "readline-sync"

//Entrada
var base = Number(question("Qual a base do triangulo: "))
var altura = Number(question("Qual a altura do triangulo: "))

//Processamento
var area = (base * altura) / 2

//Saída
console.log (`A área do triangulo é ${area}`)