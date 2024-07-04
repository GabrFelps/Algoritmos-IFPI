import os
'''
Em 2021 o Brasil voltou a enfrentar crise na matriz energética devido ao baixo nível das águas nos reservatórios das hidrelétricas
brasileiras. Devido a isso os consumidores deverão arcar com custos extras (bandeira) para bancar outras matrizes energéticas, como usinas
termoelétricas. Neste mês de Junho a bandeira estabelecida pelo governo federal foi a Vermelha Patamar 2, que significa que a cada 100 KWh de
consumo será acrescido uma taxa extra de R$ 8,00.
O Cálculo da energia elétrica para o consumidor final é feito baseado em KWh e em faixas.
Valores hipotéticos:

● Consumo de até 30KWh isento de tarifa.
● Até 100 KWh será cobrado R$ 0,59 por cada um cada de todo os KWh consumidos;
● acima de 100KWh o valor de R$ 0,75 por cada um de todos os KWh consumidos.

Sobre o valor tarifado/apurado são 25% de ICMS e 15% de PIS/CONFIS.
A taxa de iluminação pública é cobrada apenas para os consumidores que passarem de 80KWh por mês, e custa 6% do valor tarifado (antes do
impostos).
Considerando os dados acima construa um software que receba dois dados:
Leitura Atual e Leitura Anterior do medidor de energia e faça todo o cálculo do "Talão de Energia" conforme detalhado acima.
Como saída apresente os dados que compõem assim como o valor total a ser pago.
Exemplo:
Consumo 000 KWh
Valor Faturado R$ 0,00
Bandeira R$ 0,00 (x bandeiras)
ICMS R$ 0,00
PIS/CONFIS
Taxa Iluminação R$ 0,00
'''

def clear_screen():
    if os.name == 'nt':
        os.system('cls');
    else:
        os.system('clear');


def main():
    clear_screen()
    leituraAnterior = int(input("Qual o valor da leitura do mês anterior?: "))
    leituraAtual = int(input("Qual o valor da leitura atual?: "))

    valorKWh = abs(leituraAtual - leituraAnterior)

    if valorKWh <= 30:
        tarifa = 0
    elif valorKWh <= 100:
        tarifa = valorKWh * 0.59
    else:
        tarifa = valorKWh * 0.75

    taxaDeIluminacao = tarifa * 0.06 if valorKWh > 80 else 0
    
    icms = (tarifa + taxaDeIluminacao) * 0.25
    pis = (tarifa + taxaDeIluminacao) * 0.15

    bandeira = valorKWh // 100

    valor = tarifa + icms + pis + bandeira + taxaDeIluminacao

    print("-" * 40)
    print(f'''
    Consumo: {valorKWh} KWh
    Valor Faturado: R$ {valor:.2f}
    Bandeira: R${(bandeira * 8):.2f} ({bandeira} bandeiras)
    ICMS: R${icms:.2f}
    PIS/CONFIS: R${pis:.2f}
    Taxa Iluminação: R$ {taxaDeIluminacao:.2f}
    ''')
    print("-" * 40)

main()