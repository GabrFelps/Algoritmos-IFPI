//Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
import { question } from "readline-sync"

//Entrada
var dias = Number(question("Digite a sua idade em dias: "))

//Processamento
var anos = Math.floor(dias / 365)
var resto = dias % 365
var meses = Math.floor(resto / 30)
var dias = resto % 30

//Saída
console.log (`
 ${anos} ano(s)
 ${meses} mes(es)
 ${dias} dia(s)
 `)