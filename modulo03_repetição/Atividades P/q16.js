/**Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2. */

import { get_number, print } from "../../.UTILS/utils.js"

function main(){
    let n = get_number("Insira o valor N: ")
    let termo1 = 0
    let termo2 = 1
    let proximoTermo

    print(termo1)
    print(termo2)

    for (let i = 2; i < n; i++) {
    proximoTermo = termo1 + termo2
    termo1 = termo2
    termo2 = proximoTermo
    print(proximoTermo)
    }
}
main()    