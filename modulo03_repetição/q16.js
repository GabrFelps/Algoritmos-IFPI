/**Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.
*/

function main(){
    let debito = 3_000
    let juros = 0.85 / 100
    let pagamento = 200
    let count = 0

    while(debito > 0){
        debito = debito - pagamento
        debito += debito * juros
        count++

    }

    console.log(`
    São necessários ${count} dias para o quitamento da dívida.
    `)

}
main()