//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
import {question} from 'readline-sync'

//Entrada
var velocidade_kmh = Number(question('Insira a velocidade em km/h: '))

//Processamento
var velocidade_ms = velocidade_kmh / 3.6

//Saída
console.log(`> ${velocidade_kmh} m/s equivale a ${velocidade_ms} m/s`)