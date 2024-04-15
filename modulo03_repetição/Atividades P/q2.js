import { get_number, print } from "../../.UTILS/utils.js";

//Leia N e escreva todos os números inteiros pares de 1 a N.
function main(){
    let n = get_number("Digite um numero N: ")
    for (let i = 1; i<=n; i++){
        i % 2 == 0? print(i):-1
    }
}
main()