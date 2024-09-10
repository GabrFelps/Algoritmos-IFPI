import * as utils from "../../.UTILS/utils.js"
function main(){
  let numeros = utils.getstring("Quais números você deseja multiplicar?: (ex: 3x4) ")
  let [valor1, valor2] = numeros.split("x").map(Number)
  let produto = retornar_multiplicacao(valor1, valor2)
  console.log(`o resultado da multiplicação de ${valor1} x ${valor2} é igual a ${produto}`)
}

function retornar_multiplicacao(v1,v2){
  let produto = v1
  for (let i = 1; i < v2; i++){
    produto += v1
  }
  return produto
}
main()