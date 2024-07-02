//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import { question } from "readline-sync"

//Entrada
var salario = Number(question("Digite seu salario: "))

//Processamento
var aumento = salario * 1.25

//Saída
console.log (`Parabens! Seu salario sofreu um acrescimo de 25% ao seu valor atual. Agora voce recebe ${aumento} reais.`)