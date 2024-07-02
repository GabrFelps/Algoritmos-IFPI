//Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let numero_n = get_number("Insira um número: ")
    let soma = 0
    for(let i = 1; i <= numero_n; i++){
        soma = i+=i
    }
    print(soma)
}
main()