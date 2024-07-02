/*Leia valores inteiros em duas variáveis distintas e 
Se O RESTO da divisão da PRIMEIRA pela SEGUNDA for 1  
escreva a soma dessas variáveis mais o resto da divisão;
SE for 2
escreva se o primeiro e o segundo valor são pares ou ímpares;
SE for igual a 3 
multiplique a soma dos valores lidos pelo primeiro;
SE for igual a 4 
divida a soma dos números lidos pelo segundo, se este for diferente de zero.
Em QUALQUER OUTRA SITUAÇÃO escreva o quadrado dos números lidos.
**/

import { calculo_resto_1, calculo_resto_2, calculo_resto_3, calculo_resto_4, getnumber } from "./functions/io_utils.js"

function main (){
    //Entrada
    const num1 = getnumber ("Digite um valor inteiro: ")
    const num2 = getnumber ("Digite outro valor inteiro: ")
    const resto = num1 % num2

    //Processamento e Saída 
    if (resto === 1){
        calculo_resto_1 (num1, num2, resto)
    } else if (resto === 2){
        calculo_resto_2 (num1, num2)
    } else if (resto === 3){
        calculo_resto_3 (num1, num2)
    } else {
        calculo_resto_4 (num1, num2, resto)
    }      
}

main()