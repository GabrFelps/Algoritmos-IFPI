//Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let n = get_number("Insira um número: ")
    let limiteInferior = get_number("Insira o limite inferior: ")
    let limiteSuperior = get_number("Insira o limite superior: ") 
    for (let i = limiteInferior; i <= limiteSuperior; i++ ){
        if(i%n == 0){
            print(i)
        }
    }
}
main()