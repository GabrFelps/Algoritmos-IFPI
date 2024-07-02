


import { computar_media, computar_situacao, print, getnumber } from './functions/io_utils.js'

function main(){

  print('|** NOTAS **|')

  const nota1 = getnumber('Nota 1: ')
  const nota2 = getnumber('Nota 2: ')
  const nota3 = getnumber('Nota 3: ')

  const media = computar_media(nota1, nota2, nota3)
  let situacao = computar_situacao(media)
  let media_pos_pf = media

  if (situacao === 'PROVA FINAL'){
    print(`Você ficou de Prova Final (Média): ${media.toFixed(2)}`)
    // Pedir nota da Prova Final
    const nota_pf = getnumber('Nota PF: ')
    // Computador media final
    media_pos_pf = (media + nota_pf) / 2
    // Atualizar a SITUACAO
    if (media_pos_pf >= 6){
      situacao = 'APROVADO PÓS PF'
    }else{
      situacao = 'REPROVADO MESMO COM PF'
    }
  }

  const resultado = `
  BOLETIM:
  Nota 1: ${nota1.toFixed(2)}
  Nota 2: ${nota2.toFixed(2)}
  Nota 3: ${nota3.toFixed(2)}
  -----------------
  Média       : ${media.toFixed(2)}
  Média Pós PF: ${media_pos_pf.toFixed(2)}
  Situação    : ${situacao}
`
 print(resultado)
}

main()