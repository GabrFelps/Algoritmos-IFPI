import * as utils from "../../.UTILS/utils.js"
function main(){
  let numeros = utils.getstring("Quais números você deseja multiplicar?: (ex: 3x4) ")
  let [valor1, valor2] = numeros.split("x").map(Number)
  let produto = retornar_multiplicacao(valor1, valor2)
  console.log(`o resultado da multiplicação de ${valor1} x ${valor2} é igual a ${produto}`)
}

function retornar_multiplicacao(v1,v2, count = 0){
  if (count >= v2){
    return 0
  } 
  return v1 + retornar_multiplicacao(v1, v2, count + 1) 
}
main()