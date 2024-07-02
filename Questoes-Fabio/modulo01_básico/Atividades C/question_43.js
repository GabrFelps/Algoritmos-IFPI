/*Um sistema de equações lineares do tipo (ax + by = c) e (dx + ey = f), pode ser resolvido segundo mostrado abaixo
x = (c * e - b * f) / (a * e - b * d)
y = (a * f - c * d) / (a * e - b * d)
Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
*/ 
import { question } from "readline-sync"

//Entrada
var coef_a = Number(question("Escreva a:"))
var coef_b = Number(question("Escreva b:"))
var coef_c = Number(question("Escreva c:"))
var coef_d = Number(question("Escreva d:"))
var coef_e = Number(question("Escreva e:"))
var coef_f = Number(question("Escreva f:"))

//Processamento
var x = (coef_c * coef_e - coef_b * coef_f) / (coef_a * coef_e - coef_b * coef_d)
var y = (coef_a * coef_f - coef_c * coef_d) / (coef_a * coef_e - coef_b * coef_d)

var result_process = `
(ax + by = c) ---> (${coef_a}x + ${coef_b}y = ${coef_c})
(dx + ey = f) ---> (${coef_d}x + ${coef_e}y = ${coef_f})
-----------------------------------
onde x = ${x} e y = ${y}
`
//Saída
console.log (result_process)