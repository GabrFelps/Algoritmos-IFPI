/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
 */
import { question } from "readline-sync"

//Entrada
var ponto_1x = Number(question("insira a coordenada x do primeiro ponto: "))
var ponto_1y = Number(question("insira a coordenada y do primeiro ponto: "))
var ponto_2x = Number(question("insira a coordenada x do segundo ponto: "))
var ponto_2y = Number(question("insira a coordenada y do segundo ponto: "))

//Processamento
var resultado = Math.sqrt((ponto_1x - ponto_2x) ** 2 + (ponto_1y - ponto_2y) ** 2)
var process_result = `
Ponto 1 (${ponto_1x},${ponto_1y})
Ponto 2 (${ponto_2x},${ponto_2y})
---------------------------------------
Distancia entre os pontos: ${resultado}
`
//Saída
console.log (process_result)