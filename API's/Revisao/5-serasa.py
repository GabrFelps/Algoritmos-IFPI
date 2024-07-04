import os
import time
'''A SERASA começou a implantar o Serasa Score 2.0 em 2021. O Score é uma forma de avaliar o perfil do consumidor no momento da
aquisição de crédito, seja cartão de crédito ou financiamento de um veículo, apartamento ou empréstimo pessoal. Desta forma são avaliadas algumas
entradas de dados históricos consumidor e, caso não esteja negativado, apresentando um valor entre 0 e 1000.
Baseado nisso, faça um programa que receba valores de 0 a 100 em cada um dos 3 critérios de cálculo, ou seja, como se fosse uma Escala, no item
a. você pode ter de 0 a 100, se for 100, por exemplo, significa 100% dos pontos previstos, assim Score 1.0 (260) e Score 2.0 (620), se fosse 50%
então esse item a. seria 130 e 310, respectivamente em cada Score 1.0 e 2.0. Aplique essa formula de cada uma e apresente o valor do Score tanto
versão Score 1.0 quanto na versão Score 2.0.

Exemplo entrada:
a: 70
b: 55
c: 100
Saída:
Score 1.0: valor - categoria
Score 2.0: valor - categoria'''

def clear_screen():
    if os.name == 'nt':
        os.system('cls');
    else:
        os.system('clear');


def main():
    clear_screen();
    criterioA = int(input("Qual a porcentagem dos pontos previstos você tem no critério A?: "));
    criterioB = int(input("Qual a porcentagem dos pontos previstos você tem no critério B?: "));
    criterioC = int(input("Qual a porcentagem dos pontos previstos você tem no critério C?: "));

    score1_0 = 260 * (criterioA/100) + 570 * (criterioB/100) + 170 * (criterioC/100);
    score2_0 = 620 * (criterioA/100) + 190 * (criterioB/100) + 190 * (criterioC/100);

    if score1_0 <= 400:
        categoria = "baixo";
    elif score1_0 > 400 and score1_0 <= 600:
        categoria = "regular";
    elif score1_0 > 600 and score1_0 <= 800:
        categoria = "bom";
    else:
        categoria = "muito bom";

    if score2_0 <= 300:
        categoria2 = "baixo";
    elif score2_0 > 300 and score1_0 <= 500:
        categoria2 = "regular";
    elif score2_0 > 500 and score1_0 <= 700:
        categoria2 = "bom";
    else:
        categoria2 = "muito bom";    

    print("-" * 35)
    print(f'''
    Score 1.0: {score1_0:.0f} - {categoria}
    Score 2.0: {score2_0:.0f} - {categoria2}
    ''')
    print("-" * 35)
main()

