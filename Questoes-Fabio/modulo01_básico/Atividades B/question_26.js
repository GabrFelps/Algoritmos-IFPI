//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
import { question } from "readline-sync"

//Entrada
var dias = Number(question("Insira a quantidades de dias: "))

//Processamento
var semanas = Math.floor(dias / 7)
var resto = dias % 7

//Saída
console.log (`${semanas} semana(s) e ${resto} dia(s)`)