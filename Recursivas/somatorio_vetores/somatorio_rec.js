import * as utils from "../../.UTILS/utils.js";

function main() {
  let length_vetor = utils.get_number("Qual o tamanho do vetor a ser gerado?: ");
  let a = utils.get_number("Qual o menor valor do vetor: ");
  let b = utils.get_number("Qual o maior valor do vetor?: ");
  let vetor = gerar_vetor_in_range(a, b, length_vetor);
  let somatorio = retornar_somatorio_vetor(vetor);
  console.log(`Somatório do vetor [${vetor}] = ${somatorio}`);
}

function gerar_vetor_in_range(min, max, n, vetor = []) {
  if (n <= 0) {
    return vetor;
  }
  vetor.push(utils.get_random_number(min, max));
  return gerar_vetor_in_range(min, max, n - 1, vetor);
}

function retornar_somatorio_vetor(vetor, index = 0, somatorio = 0) {
  if (index >= vetor.length) {
    return somatorio;
  }
  somatorio += vetor[index];
  return retornar_somatorio_vetor(vetor, index + 1, somatorio);
}

main();