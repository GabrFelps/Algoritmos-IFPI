import { question } from "readline-sync"
export function get_number(mensagem){
    const numero = Number(question(mensagem))
    return numero
}

export function get_positive_number(msg){
    const number = get_number(msg)

    if (number <= 0){
        print("Número Inválido!")
        return get_positive_number(msg)
    }
    return number
}

export function print(msgm){
    console.log(msgm)
}

export function divisao_maior_que_1(numerador, denominador, quociente, resto, contador){
    while (numerador > 0){
        numerador -= denominador
        contador++
        quociente = contador  
}
    if (numerador < 0){
    numerador = numerador + (denominador * quociente)
    quociente = contador - 1
    resto = numerador - (denominador * quociente)
} 
    return {quociente, resto}
}

export function getstring(msg){
    return String(question(msg))
}

export function get_random_number(min, max){
    return Math.floor(Math.random() * (max + 1 - min)) + min
} 

export function decimal_to_romano(decimal){
    let number = decimal
    let romano = ''
    while(number>0){
        if (number>=500){
            if (number>=900 && number < 1000){
                romano += 'CM'
                number -= 900
            }else{
                romano += 'D'
                number -= 500
            }
        }else if (number>=100){
            if (number >= 400 && number < 500){
                romano += 'CD'
                number -= 400
            }else{
                romano += 'C'
                number -= 100
            }
        }else if (number>=50){
            if (number >=90 && number <100){
                romano += 'XC'
                number -= 90
            }else {
                romano += 'L'
                number -= 50
            }
        }else if (number>=10){
            if (number >= 40 && number <50){
                romano += 'XL'
                number -= 40
            }else {
                romano += 'X'
                number -= 10
            }
        }else if (number>=5){
            if (number == 9){
                romano += 'IX'
                number -= 9
            }else{
                romano += 'V'
                number -= 5
            }
        }else if (number>=1){
            if (number == 4){
                romano += 'IV'
                number -= 4
            }else{
                romano += 'I'
                number --
            }
        }
    }
    return romano
}

export function enter_to_continue(){
    get_text('Enter to continue...')
}

export function get_number_in_range(mensagem, min, max){
    const numero = get_number(mensagem)
  
    if (numero < min || numero > max){
      print('Número inválido! Digite novamente')
      return get_number_in_range(mensagem, min, max)
    }
  
    return numero
  }


  