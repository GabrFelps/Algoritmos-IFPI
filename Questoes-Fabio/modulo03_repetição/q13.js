/**Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)

    De             Até                  Acréscimo
R$ 0,00        R$ 2.999,99                 25 %
R$ 3.000,00    R$ 5.999,99                 20 %
R$ 6.000,00    R$ 9.999,99                 15 %
-------------------------------------------------
Acima de R$ 10.000,00                      10 %
 */

import { get_number, print } from "../.UTILS/utils.js"

function main(){
    print(`====> Reajuste Salarial <====`)
    let salario = get_number("Insira seu salário: ")
    let salario_reajustado = 0

    while (salario !== 0){
        if (salario <= 2_999.99){
            salario_reajustado =  salario * 1.25
        } else if (salario <= 5_999.99){
            salario_reajustado = salario * 1.20
        } else if (salario <= 9_999.99){
            salario_reajustado = salario * 1.15
        } else {
            salario_reajustado = salario * 1.10
        }
        print(`O seu novo salário é ${salario_reajustado}`)
        salario = get_number("Insira seu salário: ")
    }
}
main()



