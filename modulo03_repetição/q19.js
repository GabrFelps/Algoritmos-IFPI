/**Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.o identificação=0) 
*/

import { get_number } from "../.UTILS/utils"

function main(){
    let id = get_number("Identificação do boi: ")
    let peso = get_number("Peso do boi (kg): ")
    
    let mais_magro = `${id}`
    let peso_mais_magro = peso
    let mais_gordo = `${id}`
    let peso_mais_gordo = peso
    
    while (id!=0){
        id = getnumber("Identificação do boi: ")
        peso = getnumber("Peso do boi (kg): ")
        if (id != 0){
            if (peso > peso_mais_gordo){
                mais_gordo = `${id}`
                peso_mais_gordo = peso
            }if (peso < peso_mais_magro){
                mais_magro = `${id}`
                peso_mais_magro = peso
            }
        }
    }
    const resultado = `
    ========= RESULTADO =========
    Boi mais magro: ${mais_magro} >>> ${peso_mais_magro.toFixed(1)} kg
    Boi mais gordo: ${mais_gordo} >>> ${peso_mais_gordo.toFixed(1)} kg`
    print(resultado)
    }
main()