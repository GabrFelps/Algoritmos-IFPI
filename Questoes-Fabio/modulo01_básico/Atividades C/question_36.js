//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
import { question } from "readline-sync"

//Entrada
var anos = Number(question("Digite a sua idade em anos completos: "))
var meses = Number(question("Digite o restante em meses completos: ")) 
var dias = Number(question("Digite o restante em dias: ")) 

//Processamento
var y2d = anos * 365
var m2d = meses * 30
var result = y2d + m2d + dias

//Saída
console.log (`
Dados
-----------------------
 ${anos} ano(s)
 ${meses} mes(es)
 ${dias} dia(s)
-----------------------
Resultado: Ao todo, voce tem ${result} dias de idade.
 `)