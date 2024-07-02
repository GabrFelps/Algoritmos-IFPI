/* Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.
 */
import { question } from "readline-sync"
//Entrada
var qnt_latao = Number(question("Qual a quantidade de latão desejada?(Kg): "))

//Processamento
var cobre = qnt_latao * 0.7
var zinco = qnt_latao * 0.3

//Saída
console.log (`Para ${qnt_latao}kg de latão, serão necessários ${cobre.toFixed(2)}kg de cobre e ${zinco.toFixed(2)}kg de zinco`)