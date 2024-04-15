/** Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.
*/

import { get_number, print } from "../.UTILS/utils.js"

function main(){
    let canal = get_canal("Número do Canal: ")
    let qtd_pessoas = get_number("Qtd de pessoas que assistem: ")
    let aux_pessoas = 0
    let canal_2 = 0
    let canal_4 = 0
    let canal_5 = 0
    let canal_7 = 0
    let canal_10 = 0

    while(canal != 0){   
            if (canal === 2){
                    canal_2+=qtd_pessoas
                    
            } else if (canal === 4){
                    canal_4+=qtd_pessoas
                    
            } else if (canal === 5){
                    canal_5+=qtd_pessoas
                    
            } else if (canal === 7){
                    canal_7+=qtd_pessoas
                    
            } else if (canal === 10){
                    canal_10+=qtd_pessoas
            }
            aux_pessoas+=qtd_pessoas
            canal = get_canal("Número do Canal: ")
            if (canal !== 0){
                qtd_pessoas = get_number("Qtd de pessoas que assistem: ")
            }
            
    }

    let porcentagem_2 = canal_2 / aux_pessoas * 100
    let porcentagem_4 = canal_4 / aux_pessoas * 100
    let porcentagem_5 = canal_5 / aux_pessoas * 100
    let porcentagem_7 = canal_7 / aux_pessoas * 100
    let porcentagem_10 = canal_10 / aux_pessoas * 100

    print (`
    Canal 2: ${canal_2} telespectadores (${porcentagem_2.toFixed(2)}%)
    Canal 4: ${canal_4} telespectadores (${porcentagem_4.toFixed(2)}%)
    Canal 5: ${canal_5} telespectadores (${porcentagem_5.toFixed(2)}%)
    Canal 7: ${canal_7} telespectadores (${porcentagem_7.toFixed(2)}%)
    Canal 10: ${canal_10} telespectadores (${porcentagem_10.toFixed(2)}%)
    `)
    
}

function get_canal(msg){
    const canal = get_number(msg)
    if (canal !== 2 && canal !== 4 && canal !== 5 && canal !== 7 && canal !== 10 && canal !== 0){
        print("Canal inválido!! insira novamente")
        get_canal(msg)
    } 
    return canal
}

main()