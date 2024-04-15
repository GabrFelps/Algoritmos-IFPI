/*Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.
**/

import {getnumber, parteinteira_e_resto} from "./functions/io_utils.js";

function main () {
    const numero = getnumber("Insira o número a ser arredondado: ")
    let inteiro = 0
    let resto = 0   

    parteinteira_e_resto (numero, resto, inteiro)
}

main()