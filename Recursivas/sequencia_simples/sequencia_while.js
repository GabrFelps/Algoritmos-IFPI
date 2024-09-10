import * as utils from "../../.UTILS/utils.js"
function main(){
  let minimo = utils.get_number("Qual o menor número da sequência que deseja gerar?: ")
  let maximo = utils.get_number("Qual o maior número da sequência que deseja gerar?: ")
  if (minimo > maximo){
    console.log("Você deve digitar um número maior que o mínimo!")
    return
  }
  retornar_sequencia(minimo, maximo)
}

function retornar_sequencia(min, max){
  while (min <= max){
    console.log(min)
    min ++
  }
}
main()