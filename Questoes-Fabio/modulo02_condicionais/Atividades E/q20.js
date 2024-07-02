/*Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.
**/

import { exibir_quadrante, getnumber } from "./functions/io_utils.js"

function main (){
    const angulo = getnumber("Digite um angulo (entre 0 e 360): ")

    let quadrante1 = 0
    let quadrante2 = 0
    let quadrante3 = 0
    let quadrante4 = 0

    exibir_quadrante (angulo, quadrante1, quadrante2, quadrante3, quadrante4)
}

main ()