//Leia N e uma lista de N números e escreva o maior número da lista.

import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let n_lista = get_number("Quantos números você deseja inserir?: ")
    let aux = 0
    let maiornumero = -Infinity
    for (let i = 1; i <= n_lista; i++){    
        let N = get_number(`Insira o número ${i}: `)
        
        N > maiornumero? maiornumero = N:-1
        
    }
    print(`Maior número: ${maiornumero}`)
}
main()