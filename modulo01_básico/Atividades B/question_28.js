//Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
import { question } from "readline-sync"
//Entrada
var horas = Number(question("Digite a quantidade de horas: "))

//Processamento
var semanas = Math.floor(horas / 168)
var resto = horas % 168
var dias = Math.floor(resto / 7)
var horas = resto % 7

//Saída
console.log (`
 ${semanas} semana(s)
 ${dias} dia(s)
 ${horas} hora(s)
 `)