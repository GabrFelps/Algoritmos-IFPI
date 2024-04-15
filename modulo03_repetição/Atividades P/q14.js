/**Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6).*/

import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    let n = get_number("Insira um número: ")
    let quadradoperfeito = 0
    for (let i = n; 0 == quadradoperfeito ; i--){
        if ((i**0.5)%1==0){
            quadradoperfeito = i
        }
    }
    print(quadradoperfeito)    
}
main()