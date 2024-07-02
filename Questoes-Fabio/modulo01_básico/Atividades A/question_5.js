//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
import {question} from 'readline-sync'

//Entrada
var numero = Number(question("Digite um numero inteiro (3 digitos): "))

//Processamento
var C = Math.floor (numero / 100)
var Resto = numero % 100
var D = Math.floor (Resto / 10) 
var U = Resto % 10

var Somatorio = (C + D + U)

//Saída
console.log (`--> ${C} + ${D} + ${U} e igual a ${Somatorio}. `)