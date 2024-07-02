//Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.

import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let limiteInferior = get_number("Insira o limite inferior: ")
    let limiteSuperior = get_number("Insira o limite superior: ") 
    for (let i = limiteInferior; i <= limiteSuperior; i++ ){
        if(i%2 == 0){
            print(i)
        }
    }
}
main()