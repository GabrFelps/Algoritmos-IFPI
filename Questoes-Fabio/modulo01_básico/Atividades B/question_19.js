//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
import { question } from "readline-sync"

//Entrada
const PI = 3.14
const raio = Number(question('Raio da esfera: '))

//Processamento
const volume = (4 * PI * raio**3) / 3

//Saída
console.log(`Volume da esfera = ${volume.toFixed(2)}`)