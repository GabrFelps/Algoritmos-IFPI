/*Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.
**/

import { getnumber, print } from "./functions/io_utils.js"

function main(){
    const hora1 = getnumber("Insira a hora de inicio: ")
    const minuto1 = getnumber("Insira os minutos de inicio: ") 
    const hora2 = getnumber("Insira a hora de término: ")
    const minuto2 = getnumber("Insira os minutos de término: ")

    if ( hora1 > hora2 || hora1 === hora2){
        calcular_duração_outro_dia (hora1, hora2, minuto1, minuto2)
    } else {
        calcular_duração_mesmo_dia (hora1, hora2, minuto1, minuto2)
    }
}

function calcular_duração_outro_dia (hora1, hora2, minuto1, minuto2){
    let subtrairhora = 0
    let subtrairminuto = 0
    

    if (hora2 === hora1 & minuto1 === minuto2){
        print ("A duração do jogo é 24h")

    } else if (hora2 === hora1 & minuto1 > minuto2){
        subtrairminuto = 60 - (hora1-hora2)
        print (`A duração do jogo é 23h${subtrairminuto}min`)
    } else if (hora1 > hora2 & minuto1 === minuto2){
        subtrairhora = hora1 - hora2
        print (`A duração do jogo é ${subtrairhora}h00min`)
    }
}

function calcular_duração_mesmo_dia (hora1, hora2, minuto1, minuto2){
    let subtrairhora = 0
    let subtrairminuto = 0

    if (minuto1 === minuto2){
        subtrairhora = hora2 - hora1 
        print (`A duração do jogo é ${subtrairhora}h00min`)

    } else if (minuto2 > minuto1){
        subtrairhora = hora2 - hora1
        subtrairminuto = minuto2 - minuto1
        print (`A duração do jogo é ${subtrairhora}h${subtrairminuto}min`)

    } else if (minuto2 < minuto1){
        subtrairhora = hora2 - hora1
        subtrairminuto = minuto1 - minuto2
        print (`A duração do jogo é ${subtrairhora}h${subtrairminuto}min`)

    }
}


main()