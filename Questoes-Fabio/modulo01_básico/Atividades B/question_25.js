//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import { question } from "readline-sync"

//Entrada
var metros = Number(question("Insira a quantidades de metros: "))

//Processamento
var km = Math.floor(metros / 1000)
var resto = metros % 1000

//Saída
console.log (`${km} quilometros e ${resto} metros`)