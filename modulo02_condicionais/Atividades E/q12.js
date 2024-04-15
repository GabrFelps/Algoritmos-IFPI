//Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import { eh_par, getnumber, print } from './functions/io_utils.js'

function main(){
  print('Ímpar ou Par?')
  const numero = getnumber('Número Positivo: ')

  if (eh_par(numero)){
    print(`O número ${numero} é PAR`)
  }else{
    print(`O Número ${numero}  é ÍMPAR`)
  }
}

main()