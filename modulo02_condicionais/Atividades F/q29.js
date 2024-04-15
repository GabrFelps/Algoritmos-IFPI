//Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

import { getnumber, print } from "./functions/io_utils.js";

function main(){
    const lado1 = getnumber("Digite o primeiro lado: ")
    const lado2 = getnumber("Digite o segundo lado: ")
    const lado3 = getnumber("Digite o terceiro lado: ")

    achar_hipotenusa_e_catetos(lado1, lado2, lado3)
}
function achar_hipotenusa_e_catetos (lado1, lado2, lado3){
    if (lado1 > lado2 & lado1 > lado3 || lado2 == lado3){
        print(`
        Hipotenusa: ${lado1}
        Catetos:${lado2} e ${lado3}
        `)
    } else if (lado2 > lado1 & lado2 > lado3 || lado1 === lado3){
        print(`
        Hipotenusa: ${lado2}
        Catetos:${lado1} e ${lado3}
        `)
    } else if (lado3 > lado1 & lado3 > lado2 || lado1 === lado2){
        print(`
        Hipotenusa: ${lado3}
        Catetos:${lado1} e ${lado2}
        `)
    }
}
main()