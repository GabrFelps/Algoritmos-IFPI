import { question } from "readline-sync"
import {get_number, print} from "../.UTILS/utils.js"
/**Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:

Lugar         Pontos
  1             9 
  2             6
  3             4
  4             3

Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor. */

function main(){
  let numero_prova = get_number("Insira o número da prova: ")
  let qtd_jogadores = get_number("Insira a quantidade de jogadores: ")

  let contador = 1
  let pontos_A = 0
  let pontos_B = 0

  while(numero_prova != 0 && qtd_jogadores != 0){
    
    while(contador <= qtd_jogadores){
      print(`===== JOGADOR  N°${contador} =====`)
      let nome = String(question(`Nome do Nadador ${contador}: `))
      let tempo = get_number("Tempo de prova(segundos): ")
      let classificação = classificar()
      let time = String(question("Time:"))

      if (time.toLowerCase() == 'a'){
        pontos_A += classificação
    }else{
        pontos_B += classificação
    }
    contador++
    print(contador)
    }
    numero_prova = get_number("Insira o número da prova: ")
    qtd_jogadores = get_number("Insira a quantidade de jogadores: ")

  }

  let situacao = "EMPATE!!!"
    if (pontos_A > pontos_B){
        situacao = "A EQUIPE A VENCEU!"
    }else{
        situacao = "A EQUIPE B VENCEU"
    }

const resultado = `
======= RESULTADO =======
Equipe A = ${pontos_A} pontos
Equipe B = ${pontos_B} pontos
-------------------------
SITUAÇÃO: ${situacao}
`

print(resultado)
}

function classificar(){
  let classificacao = get_number("Digite uma classificação para o atleta (1, 2, 3 ou 4): ")
  if (classificacao == 1){
      return 9
  } else if (classificacao == 2){
      return 6
  } else if (classificacao == 3){
      return 4
  } else if (classificacao == 4){
      return 3
  } else{
      print("Valor inválido, digite novamente (1, 2, 3 ou 4)")
      classificar()
  }
}




main()