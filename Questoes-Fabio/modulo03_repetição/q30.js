import { print, getstring, get_number } from "../.UTILS/utils.js"

/** Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto
*/
function main(){
    let soma_precos = 0
    let nome_produto = 'START'
    let preco, unidades, preco_desc
    while (nome_produto.toLowerCase() != 'fim'){
        // Entrada
        nome_produto = getstring('Digite o nome do produto: ')
        // Processamento
        if (nome_produto.toLowerCase() != 'fim'){
            preco = get_number(`Digite o valor de cada unidade de ${nome_produto}: `)
            unidades = get_number('Quantas unidades deseja comprar? ')
            if (unidades<=10){
                print(`${unidades} Unidades de ${nome_produto} (R$ ${preco.toFixed(2)} cada): ${preco*unidades}`)
                soma_precos += preco*unidades
            }else if (unidades<=20){
                preco_desc = preco*0.9
                print(`${unidades} Unidades de ${nome_produto} com 10% de desconto (R$ ${preco_desc.toFixed(2)} cada): R$ ${(preco_desc*unidades).toFixed(2)}`)
                soma_precos += preco_desc*unidades
            }else if (unidades<=50){
                preco_desc = preco*0.8
                print(`${unidades} Unidades de ${nome_produto} com 20% de desconto (R$ ${preco_desc.toFixed(2)} cada): R$ ${(preco_desc*unidades).toFixed(2)}`)
                soma_precos += preco_desc*unidades
            }else if (unidades>50){
                preco_desc = preco*0.75
                print(`${unidades} Unidades de ${nome_produto} com 25% de desconto (R$ ${preco_desc.toFixed(2)} cada): R$ ${(preco_desc*unidades).toFixed(2)}`)
                soma_precos += preco_desc*unidades
            }
        }
    }
    
    print(`Total de compras = R$ ${soma_precos.toFixed(2)}`)
}

main()