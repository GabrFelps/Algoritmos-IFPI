/* Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.
 */
import { question } from 'readline-sync'

function main(){
  const valor = Number(question('Valor R$: '))

  const parcela = calcular_parcela(valor)
  const entrada = calcular_entrada(valor, parcela)

  const resultado = `
  Financiamento:
  Valor: R$ ${valor.toFixed(2)}
  Entrada: R$ ${entrada.toFixed(2)}
  2x de R$ ${parcela.toFixed(2)}
  `
  console.log(resultado)
}

function calcular_parcela(valor){
  const parcela = Math.floor(valor / 3)
  return parcela
}

function calcular_entrada(valor, parcela){
  const resto = valor % 3
  const entrada = parcela + resto
  return entrada
}

main()