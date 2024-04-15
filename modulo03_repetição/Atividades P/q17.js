import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let N = get_number("Insira o número N: ")
    let resultadofinal = 0
    let resultado = 0
    for (let i = 1; i <= N; i++){
        resultado = 1/i
        resultadofinal += resultado
        // resultadofinal = resultado 
    }
    print(resultadofinal)   
}
main()