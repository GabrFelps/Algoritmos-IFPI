//Leia um número, calcule e escreva seu fatorial.

import { get_number, print } from "../../.UTILS/utils.js"

function main(){
    let numero = get_number("Insira um número: ")
    let fatorial = 1
    for(let i = numero; i>1; i--){
        fatorial*=i
    }
    print(fatorial)
}
main()