//Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.
// patro
import { question } from "readline-sync";

function main(){
    const numero1 = Number(question('Insira o primeiro número: '))
    const numero2 = Number(question('Insira o segundo número: '))
    const numero3 = Number(question('Insira o terceiro número: '))

    const iguais = conferir_igualdade(numero1, numero2, numero3)
    console.log(`Entre os números escritos, há ${iguais} números iguais`)

}

function conferir_igualdade(n1, n2, n3){
    if ((n1 === n2) && (n2 === n3)){
        return '3'    
    } else if (n1 === n2 || n1 === n3 || n2 === n3){
        return '2'
    } else {
        return '0'
    }
}

main()