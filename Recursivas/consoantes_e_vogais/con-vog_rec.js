import * as utils from "../../.UTILS/utils.js"

function main() {
  let frase = utils.getstring("Digite uma frase: ")
  let frase_sem_espaco = frase.split(" ").join("").toLowerCase()
  let vogais = ["a", "e", "i", "o", "u"]
  let [qtd_vogais, qtd_consoantes] = retornar_contagem_vogais_e_consoantes(frase_sem_espaco, vogais)
  console.log(`A frase "${frase}" possui ${qtd_vogais} vogais e ${qtd_consoantes} consoantes`)
}

function retornar_contagem_vogais_e_consoantes(frase_sem_espaco, vogais, contador_vogais = 0, contador_consoantes = 0) {
  if (frase_sem_espaco.length === 0) {
    return [contador_vogais, contador_consoantes]
  } else {
    let caractere = frase_sem_espaco[0]
    if (vogais.includes(caractere)) {
      contador_vogais++
    } else {
      contador_consoantes++
    }
    return retornar_contagem_vogais_e_consoantes(frase_sem_espaco.slice(1), vogais, contador_vogais, contador_consoantes)
  }
}
main()