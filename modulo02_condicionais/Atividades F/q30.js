// Questão 30
import {question} from 'readline-sync';


function calculo(number){
    const n1 = Math.floor(number / 100)
    const n2 = number % 100
    const n3 = (n1 + n2) ** 2
    return n3
}


function main(){
    let entrada = Number(question('Digite um número entre 1000 e 9999: '))

    let resultado = calculo(entrada)

    console.log(resultado)
    if (resultado === entrada){
        console.log('Seu número é igual o resultado do cálculo!')
    }else{
        console.log('Seu número não é igual ao resultado do calculo!')
    }
}

main()
