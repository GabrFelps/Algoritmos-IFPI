/** Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou.
*/

import { get_number, print, get_random_number } from "../.UTILS/utils"

function main(){ 
    print('======= ADIVINHA ========')
    const max = get_number('Digite um número para ser o limite máximo: ')
    const secret = get_random_number(1,max)
    print('Um número secreto foi sorteado para você, tente adivinhá-lo no menor número de tentativas!!')
    let cont_palpites = 1
    let palpite = get_number(`Digite o seu ${cont_palpites}° palpite: `)
    while (palpite!=secret){
        if(secret>palpite){
            print('O número secreto é MAIOR')
        }else if(secret<palpite){
            print('O número secreto é MENOR')
        }
        palpite = get_number(`Digite o seu ${cont_palpites}° palpite: `)
        cont_palpites++
    }
    print(`PARABÉNS, VOCÊ ACERTOU EM ${cont_palpites} tentativas`)

}



main()