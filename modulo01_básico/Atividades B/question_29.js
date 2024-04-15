//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
import { question } from "readline-sync"

//Entrada
var meses = Number(question("Digite a quantidade de meses: "))

//Processamento
var anos = Math.floor(meses / 12)
var resto = meses % 12



//Saída
console.log (`
 ${anos} ano(s)
 ${resto} mes(es)
 `)