//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
import {question} from 'readline-sync'

//Entrada
var dolar = Number(question ("Insira o valor da cotação do Dolar:" ))
var valor = Number(question ("Valor em dolar a ser convertido: "))

//Processamento
var resultado = dolar * valor

//Saída
console.log (`Atualmente, ${dolar} dolares, correspondem a ${resultado} reais.`)