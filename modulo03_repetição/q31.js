/** Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).
*/

import { decimal_to_romano, get_positive_number, print } from "../.UTILS/utils.js"

function main(){
    let decimal = get_positive_number('Número na forma decimal: ')
    const romano = decimal_to_romano(decimal)
    print(`O número ${decimal} equivale a ${romano} em número romano`)
}
main()