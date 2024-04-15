/*Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas 
e quantos minutos ele corresponde.
*/
import { question } from "readline-sync"

//Entrada
var minutos = Number(question("Digite a quantidade de minutos: "))

//Processamento
var dias = Math.floor(minutos / 1440)
var resto = minutos % 1440
var horas = Math.floor(resto / 24)
var minutos = resto % 24

//Saída
console.log (`
 ${dias} dia(s)
 ${horas} hora(s)
 ${minutos} minuto(s)
 `)