import { question } from "readline-sync"

export function retornar_adicao (valor_1, valor_2){
    const adicao = valor_1 + valor_2
    print (`    > ${valor_1} + ${valor_2} = ${adicao}`)
}
export function retornar_subtracao (valor_1, valor_2){
    const subtracao = valor_1 - valor_2
    print (`    > ${valor_1} - ${valor_2} = ${subtracao}`)
}
export function retornar_multiplicacao (valor_1, valor_2){
    const multiplicacao = valor_1 * valor_2
    print (`    > ${valor_1} * ${valor_2} = ${multiplicacao}`)
}
export function retornar_divisao (valor_1, valor_2){
    const divisao = valor_1 / valor_2
    print (`    > ${valor_1} + ${valor_2} = ${divisao}`)
}

export function getnumber (msg){
    return Number(question(msg))
}

export function print (mensagem){
    return console.log (mensagem)
}

export function calculo_resto_1 (num1, num2, resto){
    ///escreva a soma dessas variáveis mais o resto da divisão
    let soma = num1 + num2

    let resultadoresto1 = print (`
    Soma: ${num1} + ${num2} = ${soma}
    Resto: ${resto} 
    `)

    return resultadoresto1    
}

export function calculo_resto_2 (num1, num2){
    //escreva se o primeiro e o segundo valor são pares ou ímpares.
    if (num1 % 2 === 0){
        print(`Numero ${num1} é PAR`)
    } else {
        print(`Numero ${num1} é ÍMPAR`)
    }
    if (num2 % 2 === 0){
        print(`Numero ${num2} é PAR`)
    } else {
        print(`Numero ${num2} é ÍMPAR`)
    }          
}

export function calculo_resto_3 (num1, num2){
    //multiplique a soma dos valores lidos pelo primeiro.
    let soma = num1 + num2
    let multiplique = soma * num1

    let resultadoresto3 = (`
    Soma: ${num1} + ${num2} = ${soma}
    Soma * Número 1: ${multiplique} 
    `)

    print (resultadoresto3)
}

export function calculo_resto_4 (num1, num2, resto){
    //divida a soma dos números lidos pelo segundo, se este for diferente de zero.
    let soma = num1 + num2
    let divida = soma / num2

    //escreva o quadrado dos números lidos.
    let quadradon1 = num1 ** 2
    let quadradon2 = num2 ** 2

    let resultado_dos_quadrados = (`
    O quadrado de ${num1} = ${quadradon1}
    O quadrado de ${num2} = ${quadradon2}
    `)

    let resultadoresto4 = (`
    Soma: ${num1} + ${num2} = ${soma}
    Soma / Número 2: ${divida.toFixed(2)} 
    `)

    if (resto === 4 && num2 !== 0){
        print(resultadoresto4)
    } else {
        print(resultado_dos_quadrados)
    }
}

 export function calcular_maior_numero (num_1, num_2, num_3){
    let maior = 0
    
    if (num_1 > num_2 & num_1 > num_3){

        maior = num_1
        print (`${num_1} é maior que ${num_2} e ${num_3}`)

    } else if (num_2 > num_1 & num_2 > num_3){

        maior = num_2
        print (`${num_2} é maior que ${num_1} e ${num_3}`)

    } else if (num_3 > num_1 & num_3 > num_1){

        maior = num_3
        print (`${num_3} é maior que ${num_1} e ${num_2}`)

    } else {
        print ("Todos os números são iguais")
    }
}

export function computar_media(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3
  
      if (media > 10){
        media = 10
      }
    
  
    return media
  
}
  
export function computar_situacao(media){
    let situacao = ''
    
    if (media >= 7){
      situacao = 'APROVADO'
    }else if (media >= 4){
      situacao = 'PROVA FINAL'
    }else{
      situacao = 'REPROVADO'
    }
    
    return situacao
}

export function calcularsalarios (horasp1, horasp2, vphp1, vphp2){
    const salp1 = horasp1 * vphp1
    const salp2 = horasp2 * vphp2 

    if (salp1 > salp2){
        print (`
        O professor 1 recebe ${salp1}
        O professor 2 recebe ${salp2}
        -------------------------------------------
        O Professor 1 recebe mais que o Professor 2
        `)
    } else if (salp2 > salp1){
        print (`
        O professor 1 recebe ${salp1}
        O professor 2 recebe ${salp2}
        -------------------------------------------
        O Professor 2 recebe mais que o Professor 1
        `)
    } else {
        print (`
        O professor 1 recebe ${salp1}
        O professor 2 recebe ${salp2}
        -------------------------------------------
        O Salário dos dois professores é igual 
        `)
    }
}

export function compararmedia (num1, num2, num3, num4, num5){
    const media = (num1 + num2 + num3 + num4 + num5) / 5

    print (`A média vale ${media}`)
    if (num1 > media){
        print (`
        ${num1} é maior que ${media}
        `)
    }
    if (num2 > media){
        print (`
        ${num2} é maior que ${media}
        `)
    }
    if (num3 > media){
        print (`
        ${num3} é maior que ${media}
        `)
    }
    if (num4 > media){
        print (`
        ${num4} é maior que ${media}
        `)
    }
    if (num5 > media){
        print (`
        ${num5} é maior que ${media}
        `)
    }
}

export function achar_maior_numero (num1, num2, num3, num4, num5) {
    let maior = 0
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){

        maior = num1

    }
    if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {

        maior = num2

    }
    if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){

        maior = num3

    }
    if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){

        maior = num4

    }
    if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){

        maior = num5

    }
    return maior
}

export function achar_menor_numero (num1, num2, num3, num4, num5){
    let menor = 0
    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5){

        menor = num1
        
    }
    if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {

        menor = num2
        
    }
    if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5){

        menor = num3
        
    }
    if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5){

        menor = num4

    }
    if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4){

        menor = num5

    }
    return menor
}

export function eh_par(numero){
    return numero % 2 === 0
}

export function retornar_peso_normal (IMC) {
    print (`
    O seu IMC vale ${IMC} 
    PESO NORMAL
    `)
}
export function retornar_obeso (IMC) {
    print (`
    O seu IMC vale ${IMC} 
    OBESO
    `)
}

export function retornar_obesidade_morbida (IMC) {
    print (`
    O seu IMC vale ${IMC} 
    OBESIDADE MORBIDA
    `)
}

export function exibir_quadrante (angulo, quadrante1, quadrante2, quadrante3, quadrante4){
    if (angulo >= 0 & angulo <= 90){
        quadrante1 = angulo
        print (`O angulo ${angulo} pertence ao primeiro quadrante`)
    } else if (angulo > 90 & angulo <= 180){
        quadrante2 = angulo
        print (`O angulo ${angulo} pertende ao segundo quadrante`)
    } else if (angulo > 180 & angulo <= 270){
        quadrante3 = angulo
        print (`O angulo ${angulo} pertende ao terceiro quadrante`)
    } else if (angulo > 270 & angulo <=360){
        quadrante4 = angulo
        print (`O angulo ${angulo} pertende ao quarto quadrante`)
    }
}

export function parteinteira_e_resto (numero, resto, inteiro){
    resto = numero % 1 
    inteiro = Math.floor(numero / 1) 
    let inteiromaior = inteiro + 1   

    if (resto >= 0.5) {
        print (`${numero} arredondado é igual a ${inteiromaior}`)    
    } else {
        print (`${numero} arredondado é igual a ${inteiro}`)
    }
}

export function retornar_data_mais_recente (dia1, dia2, mes1, mes2, ano1, ano2){
    if (ano2 > ano1){
        print (`${dia2}/${mes2}/${ano2} é mais recente que ${dia1}/${mes1}/${ano1}`)
    } else if (ano1 > ano2){
        print (`${dia1}/${mes1}/${ano1} é mais recente que ${dia2}/${mes2}/${ano2}`)
    } else if (mes2 > mes1){
        print (`${dia2}/${mes2}/${ano2} é mais recente que ${dia1}/${mes1}/${ano1}`)
    } else if (mes1 > mes2){
        print (`${dia1}/${mes1}/${ano1} é mais recente que ${dia2}/${mes2}/${ano2}`)
    } else if (dia2 > dia1){
        print (`${dia2}/${mes2}/${ano2} é mais recente que ${dia1}/${mes1}/${ano1}`) 
    } else if (dia1 > dia2){
        print (`${dia1}/${mes1}/${ano1} é mais recente que ${dia2}/${mes2}/${ano2}`)
    } else {
        print (`As Datas são Iguais | ${dia1}/${mes1}/${ano1}`)
    }
}
