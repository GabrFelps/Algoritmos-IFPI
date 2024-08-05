//Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

import { get_number } from "../.UTILS/utils.js"; 
function main(){
    const numero = get_number("Insira um número: ")
    let lista = get_number("Insira outro número: ")

    fazer_lista(numero, lista)
}

function fazer_lista(numero, lista){
    while (lista !== numero){
        lista = get_number("Insira outro número: ")
    }
}
main()