//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)
import { question } from "readline-sync"

//Entrada
const PI = 3.14
const raio = Number(question('Raio da esfera: '))

//Processamento
const comprimento = (2 * PI * raio)

//Saída
console.log(`Circunferencia da esfera = ${comprimento.toFixed(2)}`)