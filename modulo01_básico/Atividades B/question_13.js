//Leia um valor em real (R$), calcule e escreva 70% deste valor.
import {question} from "readline-sync"

//Entrada
var real = Number(question("Digite o valor em real(R$): "))

//Processamento
var result = real * 0.70

//Saída
console.log (`O novo valor em real é ${result}`)