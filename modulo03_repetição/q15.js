import {get_number, print} from '../.UTILS/utils.js'

/*
15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal.
*/

let decimal = get_number("Digite um número na base decimal: ")

while (decimal < 0 || decimal > 255){
    print('Numero inválido!! Só são aceitos números entre 0 e 255')
    decimal = get_number("Digite um número na base decimal: ")
}

const binario = computar_binario(decimal)

const hexadecimal = computar_hexadecimal(decimal)

print(`
DECIMAL     >>> ${decimal}
BINARIO     >>> ${binario}
HEXADECIMAL >>> ${hexadecimal}`)

function computar_binario(decimal){
    let x = decimal
    let binario = ''

    if (x==0){
        binario = '0'
        return binario
    }

    while(x>=1){
        binario = `${x%2}` + binario
        x = parseInt(x/2)
    }

    

    return binario
}

function computar_hexadecimal(decimal){
    let x = decimal
    let hexadecimal = ''
    let resto = 0
    if (x==0){
        hexadecimal = '0'
        return hexadecimal
    }

    while(x>=1){
        resto = x%16
        resto = computar_resto_hex(resto)
        hexadecimal = `${resto}` + hexadecimal
        x = parseInt(x/16)
    }

    

    return hexadecimal 
}

function computar_resto_hex(resto){
    if (resto == 10){
        return 'A'
    }else if (resto == 11){
        return 'B'
    }else if (resto == 12){
        return 'C'
    }else if (resto == 13){
        return 'D'
    }else if (resto == 14){
        return 'E'
    }else if (resto == 15){
        return 'F'
    }

    return resto
}
