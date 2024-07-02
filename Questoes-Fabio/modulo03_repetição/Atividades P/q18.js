import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let N = get_number("Insira o número N: ")
    let resultadofinal = 0
    let resultado = 0
    let j = 1
    for (let i = N; i >= 1; i--){
        resultado = j/i
        j++ 
        resultadofinal += resultado
        // resultadofinal = resultado 
    }
    print(resultadofinal)   
}
main()