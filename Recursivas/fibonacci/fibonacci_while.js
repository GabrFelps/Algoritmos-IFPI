import * as utils from "../../.UTILS/utils.js"
function main(){
  let c = utils.get_number("Quantos números você quer na sua sequência finbonacci?: ")
  let fibonnaci = gerar_fibonacci(c)
  console.log(fibonnaci)
}

function gerar_fibonacci(comprimento){
  let anterior = 1
  let fibonacci_seq = [0, 1]
  while (fibonacci_seq.length < comprimento){
    fibonacci_seq.push(fibonacci_seq[anterior] + fibonacci_seq[anterior-1])
    anterior ++
  }
  return fibonacci_seq
}
main()