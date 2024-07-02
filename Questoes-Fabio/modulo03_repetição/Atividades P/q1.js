//Leia N e escreva todos os números inteiros de 1 a N.
// patro

import { get_number, print } from "../../.UTILS/utils.js"

function main(){
    let n = get_number("Digite um numero N: ")
    for (let i = 1; i<=n; i++){
        print(i)
    }
}
main()