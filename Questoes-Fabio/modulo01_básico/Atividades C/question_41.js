/*O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.
 */ 
import { question } from "readline-sync"
//Entrada
var custo_f = Number(question("Insira o custo de fábrica: "))

//Processamento
var result = custo_f * 1.28 + custo_f * 0.45

//Saída
console.log (`
Porcentagem do distribuidor = (28%)
Porcentagem dos impostos = (45%)
------------------------------------
Custo ao consumidor = R$${result} 
`)