//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2
import { question } from "readline-sync"

//Entrada
var lado = Number(question("Qual o lado do quadrado: "))

//Processamento
var area = lado ** 2

//Saída
console.log (`A área do quadrado é ${area}`)