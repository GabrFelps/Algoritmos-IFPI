/**Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Geométrica que tem por valor inicial A0 e razão R. */

import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let A1 = get_number("Insira o primeiro termo: ")
    let An = get_number("Insira o último termo: ")
    let Razão = get_number("Insira a razão: ")

    for (let i = A1; i <= An; i *= Razão){
        print(i)
    }
}
main()