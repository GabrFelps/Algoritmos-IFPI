import {get_number, print} from"../.UTILS/utils.js"
/**Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B. 
*/

function main(){
    let população_a = 200_000
    let população_b = 800_000
    const cresc_a = 0.035
    const cresc_b = 0.0135
    let count = 0
    while(população_a < população_b){
        população_a += população_a * cresc_a
        população_b += população_b * cresc_b
        count++
    }
    print(`Foram necessários ${count} anos pra população da cidade A ultrapassar a população da cidade B`)
    
}
main()