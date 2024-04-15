//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
import { question } from "readline-sync"

//Entrada
var segundos = Number(question("Digite a quantidade de segundos: "))

//Processamento
var horas = Math.floor (segundos / 3600)
var resto = segundos % 3600
var minutos = Math.floor (resto / 60)
var segundos = resto % 60

//Saída
console.log (`
 ${horas}h
 ${minutos}min
 ${segundos}seg
 `)