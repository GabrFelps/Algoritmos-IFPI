import * as utils from "../../.UTILS/utils.js"
function main(){
  let n = utils.get_number("Insira o número para descobrir seu fatorial: ")
  let fatorial = retornar_fatorial(n)
  console.log(`O fatorial de ${n} é ${fatorial}`)

}

function retornar_fatorial(n){
  if (n <= 1){
    return 1
  }
   return n * retornar_fatorial(n - 1)
}
main()