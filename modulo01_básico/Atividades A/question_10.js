//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
import { question } from "readline-sync"

//Entrada
var n_int1 = Number(question("Insira o primeiro numero: "))
var n_int2 = Number(question("Insira o segundo numero: "))

//Processamento
var div = Math.floor (n_int1 / n_int2)
var resto = n_int1 % n_int2

var resultado = `
Quociente da Divisao: ${div}
Resto da Divisão: ${resto}
` 

//Saída
console.log (resultado)