/*Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. 
Ex.:número = 9534 ; soma = 9+5+3+4 = 21.
*/
import { question } from "readline-sync"

//Entrada
var numero = Number(question("Digite um numero inteiro (4 digitos): "))

//Processamento
var M = Math.floor (numero /1000)
var Resto_1 = numero % 1000
var C = Math.floor (Resto_1 / 100)
var Resto = Resto_1 % 100
var D = Math.floor (Resto / 10) 
var U = Resto % 10

var Somatorio = (M + C + D + U)

//Saída
console.log (`-->${M} + ${C} + ${D} + ${U} e igual a ${Somatorio}. `)