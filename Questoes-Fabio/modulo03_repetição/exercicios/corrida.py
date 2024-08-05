def retornar_quantidade_de_anos(populacao_A, populacao_B, taxa_crescimento_A, taxa_crescimento_B, contador):
    while populacao_A <= populacao_B:
        populacao_A = populacao_A * taxa_crescimento_A
        populacao_B = populacao_B * taxa_crescimento_B
        contador += 1
    return populacao_A, populacao_B, contador;

def retornar_resultado(populacao_A, populacao_B, contador):
    print("-" * 80)
    print(f'''
          Populacao A: {populacao_A:.0f} Habitantes 
          Populacao B: {populacao_B:.0f} Habitantes
          ''') 
    print("-" * 80) 
    print(f"Foram necessarios {contador} anos para a população da cidade A ultrapassar a da cidade B")


def main():

    populacao_A = 200_000 
    populacao_B = 800_000
    taxa_crescimento_A = 1.035
    taxa_crescimento_B = 1.0135
    contador = 0 

    populacao_A, populacao_B, contador = retornar_quantidade_de_anos(populacao_A, populacao_B, taxa_crescimento_A, taxa_crescimento_B, contador)
    retornar_resultado(populacao_A, populacao_B, contador)

main()
