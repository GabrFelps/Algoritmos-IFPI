import * as utils from "../../.UTILS/utils.js"
function main(){
  let base = utils.get_number("Qual número que irá usar de base?: ")
  let exp = utils.get_number("Qual o número do expoente?: ")
  let exponencial = retornar_exponencial(base, exp)
  console.log(`${base}^${exp} = ${exponencial}`)
}

function retornar_exponencial(base, exp){
  let exponencial = 1
  while (0 < exp){
    exponencial *= base
    exp --
  }
  return exponencial
}
main()