
def main():
    N = int(input())
    frases_resultado = []

    for numero in range(N):
        frase = input()

        frase_volta_1 = realizar_primeira_volta(frase)
        frase_volta_2 = realizar_segunda_volta(frase_volta_1)
        frase_volta_3 = realizar_terceira_volta(frase_volta_2)    
        
        # armazena a frase totalmente criptografada em uma lista
        frases_resultado.append(frase_volta_3)

    # percorre os valores da lista dos resultados e as mostra    
    for frases in frases_resultado:
        print(frases)



def realizar_primeira_volta(frase):
# caracteres da frase que são letras (maiúsculas e minúsculas) 3 posições deslocadas para a direita
    frase_volta_1 = ""
    for letra in frase:
        if eh_letra(letra):
            codigo_ascii = ord(letra) + 3
            letra = chr(codigo_ascii)
            
        frase_volta_1 += letra

    return frase_volta_1


def realizar_segunda_volta(frase_volta_1):
    # inverter a frase
    frase_volta_2 = ""
    letra_anterior = ""
    for letra in frase_volta_1:
        letra_anterior = letra + letra_anterior

    frase_volta_2 = letra_anterior
    
    return frase_volta_2


def realizar_terceira_volta(frase_volta_2):
    # truncar a frase e alterar a metade superior dela 
    frase_volta_3 = ""
    metade_qtd_caracteres_frase = retornar_metade_frase(len(frase_volta_2))

    for n_letra in range(len(frase_volta_2)):
        if n_letra >= metade_qtd_caracteres_frase:
            letra = frase_volta_2[n_letra]
            codigo_ascii = ord(letra) - 1
            letra = chr(codigo_ascii)
        else:
            letra = frase_volta_2[n_letra]

        frase_volta_3 += letra

    return frase_volta_3

def eh_letra(letra):
    # retorna se os caracteres da frase 
    return (ord(letra) >= 65 and ord(letra) <= 90) or (ord(letra) >= 97 and ord(letra) <= 122)

def retornar_metade_frase(tamanho_frase):
    return tamanho_frase // 2

main()