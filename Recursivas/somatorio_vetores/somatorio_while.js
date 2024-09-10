// Dado um intervalo A e B, calcular o somatório de um Vetor de N Elementos Aleatórios.
import * as utils from "../../.UTILS/utils.js"
function main(){
  let lenght_vetor = utils.get_number("Qual o tamanho do vetor a ser gerado?: ")
  let a = utils.get_number("Qual o menor valor do vetor: ")
  let b = utils.get_number("Qual o maior valor do vetor?: ")
  let vetor = gerar_vetor_in_range(a, b, lenght_vetor)
  let somatorio = retornar_somatorio_vetor(vetor)
  console.log(`Somatório do vetor [${vetor}] = ${somatorio}`)

}

function gerar_vetor_in_range(min, max, n){
  let vetor = []
  let count = 0
  while (count < n){
    vetor.push(utils.get_random_number(min, max))
    count ++
  }
  return vetor
}

function retornar_somatorio_vetor(vetor){
  let somatorio = 0
  let count = 0
  while (count < vetor.length){
    somatorio += vetor[count]
    count ++
  }
  return somatorio
}
main()