/*Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.
**/

import { calcularsalarios, getnumber } from "./functions/io_utils"

function main(){
    const horasp1 = getnumber("Insira a quantidade de horas trabalhadas pelo professor 1: ") 
    const horasp2 = getnumber("Insira a quantidade de horas trabalhadas pelo professor 2: ")
    const vphp1 = getnumber("Insira o valor recebido por hora do professor 1: ")
    const vphp2 = getnumber("Insira o valor recebido por hora do professor 2: ")

    calcularsalarios (horasp1, horasp2, vphp1, vphp2)
}

main()