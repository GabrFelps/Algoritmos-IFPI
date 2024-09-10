import * as utils from "../../.UTILS/utils.js"
function main(){
  let n = utils.get_number("Insira o número para descobrir seu fatorial: ")
  let fatorial = retornar_fatorial(n)
  console.log(`O fatorial de ${n} é ${fatorial}`)

}

function retornar_fatorial(n){
  let fatorial = n
  while (n > 1){
    fatorial *= n - 1
    n--
  }
  return fatorial
}
main()