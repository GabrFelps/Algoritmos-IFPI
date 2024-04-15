import { get_number, print} from "../.UTILS/utils.js"

/**Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
escreva os N termos da PG. Ler o valor de N. 
*/

function main(){
    let razao = get_number("Qual a razão da P.G: ")
    let a1 = get_number("Primeiro termo da P.G: ")
    let n = get_number("Quantidade de termos da P.G: ")
    let termo = a1
    let count = 1

    while (count <= n){
        print(termo)
        termo *=  razao
        count++
    }  
}
main()