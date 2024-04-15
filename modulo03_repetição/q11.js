/**Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3) / 10

Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma. */

import { get_number, print } from "../.UTILS/utils.js"

function main(){
    let matricula = get_number("Insira sua Matrícula: ")
    let nota1 
    let nota2 
    let nota3 
    let media
    let count_aprov = 0
    let count_reprov = 0

    while(matricula !== 0){
        nota1 = get_number("Insira sua primeira nota: ")
        nota2 = get_number("Insira sua segunda nota: ")
        nota3 = get_number("Insira sua terceira nota: ")
    media = (nota1 + nota2 + nota3) / 3
    let Situação = media >= 7? 'APROVADO':'REPROVADO'
    media>=7? count_aprov++ : count_reprov++
    let resultado = `
    ========= Boletim =========
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    ---------------------------
    Média: ${media.toFixed(2)}
    Situação: ${Situação}
    `
    print(resultado)
    
    matricula = get_number("Insira sua Matrícula: ") 
    }

    let situação_turma = `
    Alunos Aprovados: ${count_aprov}
    Alunos Reprovados: ${count_reprov}
    `
    print (situação_turma)
}
main()