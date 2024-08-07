def main():
    frase = input("Digite sua frase: ")
    nova_frase = retornar_nova_frase(frase)
    print(nova_frase)
    
def retornar_nova_frase(frase):
    nova_frase = ""
    for letra in frase:
        if letra != " ":
            nova_frase += letra
    return nova_frase
main()