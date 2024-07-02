//Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let N = get_number("Insira a quantidade de termos da sequência: ")
    let r = 2
    let a1 = 1
    let resultado = `${a1}`
    for (let i=1; i<N; i++){
        a1 += r
        resultado += `, ${a1}`
        r++
    }
    print(`(${resultado})`)
}
main()