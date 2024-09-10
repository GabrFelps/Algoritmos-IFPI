import { get_number } from "../../.UTILS/utils.js"
function main(){
  let n = get_number("Insira o número para descobrir seu fatorial: ")
  let fatorial = retornar_fatorial(n)
  console.log(`O fatorial de ${n} é ${fatorial}`)

}

function retornar_fatorial(n){
  let fatorial = 1
  for (let i = n; i > 1; i--){
    fatorial *= i
    console.log(i)
  }
  return fatorial
}
main()