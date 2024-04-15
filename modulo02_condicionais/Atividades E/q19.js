/*Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura**2).
Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), 
OBESO (IMC entre 25 e 30) 
ou OBESIDADE MÓRBIDA (IMC acima de 30).
**/

import { getnumber, retornar_obesidade_morbida, retornar_obeso, retornar_peso_normal} from "./functions/io_utils.js"

function main() {
    const altura = getnumber("Digite sua altura em Metros: ")
    const peso = getnumber("Digite seu peso em Kg: ")
    const IMC = (peso) / (altura) ** 2

    if (IMC < 25 ){
        retornar_peso_normal (IMC)
    } else if (IMC >= 25 & IMC <= 30) {
        retornar_obeso (IMC)
    } else {
        retornar_obesidade_morbida (IMC)
    }
}

main()
