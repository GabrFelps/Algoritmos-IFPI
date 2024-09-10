import * as utils from "../../.UTILS/utils.js"
function main(){
  let c = utils.get_number("Quantos números você quer na sua sequência finbonacci?: ")
  let fibonnaci = gerar_fibonacci(c)
  console.log(fibonnaci)
}

function gerar_fibonacci(comprimento){
  let fibonacci_seq = [0, 1]
  for (let i = 1; i < comprimento; i++){
    fibonacci_seq.push(fibonacci_seq[i] + fibonacci_seq[i-1])
  }
  return fibonacci_seq
}
main()