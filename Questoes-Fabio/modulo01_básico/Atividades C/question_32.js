//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import { question } from "readline-sync"

function main(){
    // Entrada
    const numero = Number(question('Número(3 digitos): '))
  
    // Processamento
    const numero_inverso = calcular_reverso(numero)
    const dif = numero - numero_inverso
  
    // Saída
    console.log(`A diferença de ${numero} - ${numero_inverso} é ${dif}`)
  
  }
  
  function calcular_reverso(valor){
    const centena = Math.floor(valor / 100)
    const resto = valor % 100
    const dezena = Math.floor(resto / 10)
    const unidade = resto % 10
    
    const reverso = unidade*100 + dezena*10 + centena
  
    return reverso
  }
  
  main()