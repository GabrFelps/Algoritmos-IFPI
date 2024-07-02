/* Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.
 */
import { question } from "readline-sync"
//Entrada
    const valor_total = Number(question("Insira o valor a ser distribuido: "))

//Processamento
    const n_50 = Math.floor(valor_total / 50)
    const resto = valor_total % 50
    const n_10 = Math.floor(resto / 10)
    const resto_2 = resto % 10
    const n_5 = Math.floor(resto_2 / 5)
    const n_1 = resto % 5
//Saída
     console.log (`
     A distribuição ótima é:
     ${n_50} nota(s) de R$ 50;
     ${n_10} nota(s) de R$ 10;
     ${n_5} nota(s) de R$ 5;
     ${n_1} nota(s) de R$ 1.
     `)