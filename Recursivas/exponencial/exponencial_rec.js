import * as utils from "../../.UTILS/utils.js"
function main(){
  let base = utils.get_number("Qual número que irá usar de base?: ")
  let exp = utils.get_number("Qual o número do expoente?: ")
  let exponencial = retornar_exponencial(base, exp)
  console.log(`${base}^${exp} = ${exponencial}`)
}

function retornar_exponencial(base, exp){
  if (exp == 0){
    return 1
  }
  return base * retornar_exponencial(base, exp -1)
}
main()