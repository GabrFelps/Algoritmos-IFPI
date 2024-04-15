//Escreva a tabuada dos números de 1 a 10.
import { get_number, print } from "../../.UTILS/utils.js";

function main(){
    for (let i = 1; i <= 10; i++){
        for (let j = 1; j<= 10; j++){
            print(`${i} x ${j} = ${i * j}`)
        }
        print("----------------------")
    }
}
main()