import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let n = get_number("Insira um número N: ")
    let sinal = 0
    let soma = 0
    for (let i = 0; i<=n-1; i++){

        if (i%2 == 0){
            let adicionando = 0
            sinal = 1
            adicionando += (i+1)*sinal/(n-i)
        } else {
            let adicionando = 0
            sinal = -1 
            adicionando += (n-(i+1))*sinal/(i+1)
        }
        
    }
    print(`${soma}`)
}
main()