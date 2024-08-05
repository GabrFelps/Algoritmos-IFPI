def main():
    # coletar dados sobre salário e número de filhos.
    # N famílias 
    # retornar  media de salário das famílias, media de número de filhos, percentual de famílias com salário de até 1.000,00
    n_familias = int(input("Qual a quantidade de familias que voce quer registrar: "))
    valor_familias = 0
    maiores_que_1000 = 0
    total_filhos = 0
    for i in range(1, n_familias+1):
        renda_familias = int(input(f"Qual é a renda da familia {i}: "))
        if renda_familias > 1_000:
            maiores_que_1000 += 1
        valor_familias += renda_familias
        n_filhos = int(input(f"Qual a quantidade de filhos que a familia {i} tem?: "))
        total_filhos += n_filhos
    resultado = f'''
    Media de salário das familias: R${(valor_familias / n_familias):.2f}
    Media de número de filhos: {total_filhos / n_familias}
    Percentual de familias com renda maios que R$ 1.000: {maiores_que_1000 / n_familias}
'''
    print(resultado)
        

main()