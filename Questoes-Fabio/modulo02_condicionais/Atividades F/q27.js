/*Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual.
**/

import { getnumber, print } from "./functions/io_utils.js";

function main (){
    const dianasc = getnumber("Digite o seu dia de nascimento: ")
    const mesnasc = getnumber("Digite o seu mes de nascimento: ")
    const anonasc = getnumber("Digite o seu ano de nascimento: ")

    const diaatual =  getnumber("Digite o dia atual: ")
    const mesatual = getnumber("Digite o mes atual: ")
    const anoatual = getnumber("Digite o ano atual: ")
}

function retornar_idade (dianas, mesnasc, anonasc, diaatual, mesatual, anoatual){
    let subtrair_ano = anoatual - anonasc
    let anocasontiverfeitoniv = subtrair_ano - 1
    let mesatualmaior = mesatual - mesnasc
    let mesatualmenor = 12 - (mesnasc - mesatual)
   
    if (mesatual < mesnasc & diaatual < dianas){

        let ma1 = mesatualmenor - 1

        print(`
        ${anocasontiverfeitoniv} anos
        ${ma1} meses
    
        `)
        
    }

} 