def main():
    numero = int(input("Insira um número: "))
    lista = obter_divisores(numero)
    print("Os divisores do seu número são: ")
    print(f"O numero {numero} tem {len(lista)} divisores")
    print(f"lista: {lista}")
    for i in lista:
        print(i, end=" ")
        

def obter_divisores(numero: int):
    lista = []
    for i in range(1,numero + 1):
        if numero % i == 0:
            lista.append(i)
    return lista
main()
