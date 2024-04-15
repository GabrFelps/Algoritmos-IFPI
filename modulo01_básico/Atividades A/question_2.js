//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
import { question } from "readline-sync";

//Entrada
var valor_hora = Number(question("Diga a parte das horas: "))
var valor_min = Number(question("Diga a parte dos minutos: "))

//Processamento
var hora_2 = valor_hora * 60
var result = hora_2 + valor_min

//Saída
console.log (`O total de minutos deste horário é ${result}}`)