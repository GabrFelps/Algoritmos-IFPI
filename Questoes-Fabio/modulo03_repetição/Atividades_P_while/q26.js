/**Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados. 
*/

import {print, get_number, calcular_porcentagem} from '../.UTILS/utils.js' 

function main(){
    let total_entrevistados = 0
    let qtd_regular = 0
    let qtd_bom = 0
    let qtd_otimo = 0
    let qtd_pessimo = 0
    let somatorio_idades_otimo = 0
print(`
====== OPINIÕES SOBRE O FILME CENTOPEIA HUMANA ======
1 = Ótimo
2 = Bom
3 = Regular
4 = Péssimo`)
    // Entrada
    print('Entrevistado n° 1: ')
    let idade = get_number('Idade do entrevistado: ')
    // Processamento
    while (idade != -1){
        if (idade != -1){
            total_entrevistados++
            let opiniao = get_number('Opinião (1 = Ótimo; 2 = Bom, 3 = Regular, 4 = Péssimo): ')
            if (opiniao == 1){
                qtd_otimo++
                somatorio_idades_otimo += idade
            }else if (opiniao == 2){
                qtd_bom++
            }else if (opiniao == 3){
                qtd_regular++
            }else if (opiniao == 4){
                qtd_pessimo++
            }

            idade = get_number('Idade do entrevistado: ')
        }
    }
    // Saída
    const resultado = `
    ========== RESULTADO ===========
    > ÓTIMO   - ${qtd_otimo} Pessoas
    > BOM     - ${qtd_bom} Pessoas
    > REGULAR - ${qtd_regular} Pessoas
    > PÉSSIMO - ${qtd_pessimo} Pessoas
    
    > TOTAL DE ENTREVISTADOS  - ${total_entrevistados}
    > MÉDIA DA IDADE (ÓTIMO)  - ${(somatorio_idades_otimo/qtd_otimo).toFixed(1)} Anos
    > PORCENT. RESPOSTA 'BOM' - ${calcular_porcentagem(qtd_bom, total_entrevistados).toFixed(2)}%
    `
    print(resultado)
}

main()