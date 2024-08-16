import os
import time

def main():
    menu = '''
    #----------------------- WordPlay -----------------------#
    > (1) Load File  
    > (2) Palavras C/ +20 letras
    > (3) Palavras S/ letra E
    > (4) Palavras com +N letras
    > (5) Palavras proibidas
    > (6) Palavras com letras escolhidas
    > (0) Sair do Programa
    ----------------------------------------------------------
    '''

    print(menu)
    menu_option = input("Escolha uma opção do menu: ")
    clear_screen()

    arquivo_carregado = False
    nome_arquivo = None

    while menu_option != "0":
        if menu_option == "1":
            arquivo_carregado, nome_arquivo = load_file()
            
        elif menu_option == "2" and arquivo_carregado:
            words_more_than_20_ch(nome_arquivo)
            if continuar():
                pass
            else:
                break;
            
            
        elif menu_option == "3" and arquivo_carregado:
            has_E(nome_arquivo)
            time.sleep(2)
        
        elif menu_option == "4" and arquivo_carregado:
            words_more_than_whished_ch(nome_arquivo)

        elif menu_option == "5" and arquivo_carregado:
            porcentagem = proibited_list(nome_arquivo)
            print (f"{porcentagem:.2f}% das palavras")

        else:
            if not arquivo_carregado:
                print("Nenhum arquivo carregado. Escolha a opção 1 primeiro.")
            else:
                print("Opção inválida. Tente novamente.")
            time.sleep(2)
            
        print(menu)
        menu_option = input("Escolha uma opção do menu: ")
        
    clear_screen()
    print("Encerrando programa...")
    time.sleep(2)

def load_file():
    menu_arquivos = '''
    Arquivos disponíveis:
    > words.txt
    ---------------------
    '''
    print(menu_arquivos)
    nome_arquivo = input("Qual arquivo você quer carregar?: ")

    while nome_arquivo != "words.txt":
        clear_screen()
        print("Arquivo indisponível para leitura, tente novamente!")
        print()
        print(menu_arquivos)
        print()
        nome_arquivo = input("Qual arquivo você quer carregar?: ")

    arquivo_carregado = True
    clear_screen()
    print("Arquivo carregado com sucesso!")
    time.sleep(2)
    return arquivo_carregado, nome_arquivo


def words_more_than_20_ch(nome_arquivo):
    count = 1
    clear_screen()
    print("Palavras com mais de 20 letras:")
    with open(nome_arquivo) as arquivo_de_entrada:
        for linha in arquivo_de_entrada:
            word = linha.strip()
            if len(word) >= 20:
                print(f"{len(word)} letras >", word)
                count += 1
    time.sleep(2)


def has_E(nome_arquivo):
    # print("Palavras sem a letra 'e':")
    count = 1
    with open(nome_arquivo) as arquivo_de_entrada:
        for linha in arquivo_de_entrada:
            word = linha.strip()
            if "e" not in word:
                print(f"palavvra {count} --> ", word)
                count += 1
        
    time.sleep(2)


def words_more_than_whished_ch(nome_arquivo):
    n_palavra = int(input("Qual a quantidade de caracteres mínimos que você deseja ver nas palavras: "))
    clear_screen()
    print(f"Palavras com mais de {n_palavra} letras:")
    with open(nome_arquivo) as arquivo_de_entrada:
        for linha in arquivo_de_entrada:
            word = linha.strip()
            if len(word) > n_palavra:
                print(word)
    time.sleep(2)


def proibited_list(nome_arquivo):
    count = 1
    # proibidas = []
    proibidas = input("Qual a palavra proibida? ")
    # for letra_proibida in palavra_proibida:
    #     proibidas.append(letra_proibida)

    with open(nome_arquivo) as arquivo_de_entrada:
        for linhas in arquivo_de_entrada:
            word = linhas.strip()
            if proibidas not in word:
                print(word)
                count += 1
    
    porcentagem = count / 113_783
    time.sleep(2)
    return porcentagem

    


def continuar():
    clear_screen();
    texto = '''
    Deseja continuar? (s/n):
    > '''
    continua = input(texto)
    if continua == "s":
        return True
    

def clear_screen():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

main()