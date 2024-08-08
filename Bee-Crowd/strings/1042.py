
def main():
    N = int(input())
    frases_resultado = []

    for numero in range(N):
        frase_volta_1 = ""
        frase_volta_2 = ""
        frase_volta_3 = ""
        frase = input()

        # caracteres da frase que tem letras minúsculas e maiúsculas 3 posições deslocadas para a direita
        for letra in frase:
            if (ord(letra) >= 65 and ord(letra) <= 90) or (ord(letra) >= 97 and ord(letra) <= 122):
                ascii = ord(letra) + 3
                letra = chr(ascii)   
            else:
                letra = letra
            frase_volta_1 += letra


        # frase invertida
        letra_anterior = ""
        for letra in frase_volta_1:
            letra_anterior = letra + letra_anterior

        frase_volta_2 = letra_anterior

        # frase truncada
        metade_qtd_caracteres_frase = len(frase_volta_2) // 2

        for n_letra in range(len(frase_volta_2)):
            if n_letra >= metade_qtd_caracteres_frase:
                letra = frase_volta_2[n_letra]
                ascii = ord(letra) - 1
                letra = chr(ascii)
            else:
                letra = frase_volta_2[n_letra]
            frase_volta_3 += letra

        frases_resultado.append(frase_volta_3)

    for frases in frases_resultado:
        print(frases)

main()