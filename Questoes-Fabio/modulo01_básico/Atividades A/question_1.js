//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
import {question} from 'readline-sync';

//Entrada
var velocidade_ms = Number(question('Insira a velocidade em m/s: '))

//Processamento
var velocidade_kmh = velocidade_ms * 3.6

//Saída
console.log(`> ${velocidade_ms} m/s equivale a ${velocidade_kmh} km/h`)