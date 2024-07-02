//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D=R+S/2 onde R=(A+B)² e S=(B+C)²
import { question } from "readline-sync"

//Entrada
var num_1 = Number(question("Insira o primeiro numero: "))
var num_2 = Number(question("Insira o segundo numero: "))
var num_3 = Number(question("Insira o terceiro numero: "))

//Processamento
var R = (num_1 + num_2) ** 2
var S = (num_2 + num_3) ** 2
var D = (R + S) / 2

//Saída
console.log (`
(A, B, C) ---> (${num_1}, ${num_2}, ${num_3})
R=(A+B)² ---> (${R})
S=(B+C)² ---> (${S})
-----------------------
D=R+S/2 ---> (${D})
`)