/*Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
 */
import { question } from "readline-sync"
//Entrada
var nanos_fum = Number(question("A quantos anos voce fuma?: "))
var ncig_fum = Number(question("Quantos cigarros voce fuma por dia?:"))
var valor_cig = Number(question("Quanto voce paga em uma carteira de cigarro?: "))

//Processamento
var valor_dia = (valor_cig / 20) * ncig_fum
var qnt_dias = nanos_fum * 365 
var valor_final = qnt_dias * valor_dia

//Saída
console.log (`Voce ja gastou R$ ${valor_final.toFixed(2)} em cigarros`)