import { get_number, print } from "../../.UTILS/utils.js";

//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.
function main(){
    let n_lista = get_number("Quantos números você deseja inserir?: ")
    let soma = 0
    for (let i = 1; i <= n_lista; i++){
        let N = get_number(`Insira o número ${i}: `)
        soma+=N
    }
    print(`
    Soma: ${soma}
    Média: ${soma/n_lista.toFixed(2)}`)
}
main()