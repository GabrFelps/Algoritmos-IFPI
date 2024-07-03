import os
'''
Uma loja presenteia suas clientes com descontos
(cashback) progressivos de acordo com suas compras. Desta
forma, para compras mensais de até R$ 250 reais, é feita a
conversão (geração) de cashback de 5%; Para compras acima de
R$ 250 até R$ 500, 7% de cashback; De R$ 500 até R$ 750, 8%
de cashback; E para compras acima de R$ 750 é aplicado
primeiramente as regras anteriores até R$ 750 do valor em cada
faixa, e 25% sobre o valor acima de R$ 750. Operações de
cashbacks progressivos têm o objetivo de incentivar as suas
clientes a comprarem mais e ao mesmo tempo serem
compensadas por isso.

a. Implemente um software para auxiliar no cálculo do
cashback mensal de suas clientes (devem ser lidos N
compras Nome Cliente e Valor Compras).

b. Informe quanto foi o faturamento total (soma das vendas);
Quanto foi distribuído em cashback; Qual o valor em reais e
percentual investido em cashback pela loja; Maior, menor e
valor médio pago em cashback.
'''
def clear_screen():
    if os.name == 'nt':
        os.system('cls');
    else:
        os.system('clear');

def computarFaturamento (numeroDeCompras):
    count = 0;
    menorValor = 223456786756453454657;
    maiorValor = 0;
    totalCashback = 0;
    totalCompras = 0;
    while count < numeroDeCompras:
        nomeCliente = input("Qual o nome do(a) cliente: ");
        valorDaCompra = float(input("Qual o valor da compra?: "));
        totalCompras += valorDaCompra;

        if valorDaCompra <= 250:
            valorDaCompra *= 0.05;
            totalCashback += valorDaCompra;
        elif valorDaCompra > 250 and valorDaCompra <= 500:
            valorDaCompra *= 0.07;
            totalCashback += valorDaCompra;
        elif valorDaCompra > 500 and valorDaCompra <= 750:
            valorDaCompra *= 0.08;
            totalCashback += valorDaCompra;
        elif valorDaCompra > 750:
            valorDaCompra = (valorDaCompra - 750) * 0.25 + (750 * 0.08);
            totalCashback += valorDaCompra;

        if valorDaCompra > maiorValor:
            maiorValor = valorDaCompra;
        if valorDaCompra < menorValor:
            menorValor = valorDaCompra;
        
        count+=1;
    return totalCompras, totalCashback, maiorValor, menorValor, numeroDeCompras


def retornarSituacaoDoFaturamento(totalCompras, totalCashback, maiorValor, menorValor, numeroDeCompras):
    print("-" * 55);
    print(f'''
        Faturamento Total: R${totalCompras:.2f}
        Valor distribuido em Cashback: R${totalCashback:.2f}
        Percentual do Cashback: {((totalCashback / totalCompras) * 100):.0f}%
        Maior valor pago em Cashback: R${maiorValor:.2f}
        Menor valor pago em Cashback: R${menorValor:.2f}
        Valor médio pago em Cashback: R${(totalCashback / numeroDeCompras):.2f}
        ''');
    print("-" * 55);

def main ():
    clear_screen()
    numeroDeCompras = int(input("Qual a quantidade de vendas?: "));
    totalCompras, totalCashback, maiorValor, menorValor, numeroDeCompras = computarFaturamento(numeroDeCompras)
    retornarSituacaoDoFaturamento(totalCompras, totalCashback, maiorValor, menorValor, numeroDeCompras)
    
main()