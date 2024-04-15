/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas
 frações, escrevendo o resultado em forma de fração.
 */
 import { question } from "readline-sync"
//Entrada
var num_1 = Number(question("Insira o numerador da primeira fração: "))
var dem_1 = Number(question("Insira o denominador da primeira fração: "))
var num_2 = Number(question("Insira o numerador da segunda fração: "))
var dem_2 = Number(question("Insira o denominador da primeira fração: "))

//Processamento
var numerador = num_1 + num_2
var denominador = dem_1 * dem_2

//Saída
console.log (`O resultado é a fração: ${numerador}/${denominador}`)