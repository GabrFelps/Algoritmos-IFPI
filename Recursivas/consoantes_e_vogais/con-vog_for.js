import * as utils from "../../.UTILS/utils.js"
function main(){
  let frase = utils.getstring("Digite uma frase: ")
  let frase_sem_espaco = frase.split(" ").join("").toLowerCase()
  let vogais = ["a","e","i","o","u"]
  let [qtd_vogais, qtd_consoantes] = retornar_contagem_vogais_e_consoantes(frase_sem_espaco, vogais)
  console.log(`a frase ${frase} possui ${qtd_vogais} vogais e ${qtd_consoantes} consoantes`) 
}

function retornar_contagem_vogais_e_consoantes(frase_sem_espaco, vogais){
  let contador_vogais = 0
  let contador_consoantes = 0
  for (let i of frase_sem_espaco){
    if (vogais.includes(i)){
      contador_vogais ++
    } else {
      contador_consoantes ++
    }
  }
  return [contador_vogais, contador_consoantes]
}
main()