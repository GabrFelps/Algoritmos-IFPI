import { get_number, print } from "../.UTILS/utils.js"
/**Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
seja utilizado.
*/

function main(){
    let numero1 = get_number("Insira o primeiro número: ")
    let numero2 = get_number("Insira o segundo número: ")
    let multiplicação = 0
    let count = 1

    if (numero1 == 0 || numero2 == 0){
        print("0")
    } else if (numero1 >= numero2){
        count = 0
        while (count !== numero2){
            multiplicação += numero1
            count ++
        }
    print(multiplicação) 
    } else if (numero1 < numero2){
        count = 0
        while (count !== numero2){
            multiplicação += numero1
            count ++
        }
    print(multiplicação)
}
}

main()