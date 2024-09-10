import * as utils from "../../.UTILS/utils.js"
function main(){
  let c = utils.get_number("Quantos números você quer na sua sequência finbonacci?: ")
  retornar_fibonacci(c)

}
function retornar_fibonacci(n, count = 1, a = 0, b = 1){
  if (n <= 0){
    console.log("Informe um comprimento válido!")
    return;
  }
  console.log(a)
  if ( count < n){
    return retornar_fibonacci(n, count + 1, b, a + b)
  }
}
main()