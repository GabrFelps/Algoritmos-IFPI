/** Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ?
*/

import { get_number, getstring, print } from "../.UTILS/utils.js"

let montante = 0

function main(){
    let investimento = get_number("Valor a ser investido por mês: ")
    let count = 1
    let continuar = "s"
    
    while (continuar.toLowerCase()=="s"){
        while (count <= 12){
            montante += investimento + (montante * 0.01)
            count++
        }
        print(`Saldo do investimento após 1 ano: R$${montante.toFixed(2)}`)
        continuar = getstring("Deseja processar mais um ano (S/N) ?: ")
    }
    investimento = montante
}
main()