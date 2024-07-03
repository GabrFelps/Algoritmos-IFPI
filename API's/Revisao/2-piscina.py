import os

'''Uma piscina é algo muito legal de ter (um amigo que
tem uma). Para evitar transbordar ao tomar banho na piscina é
bom deixar o nível da água com no máximo 85% da capacidade.
Assim uma piscina que comporta 20 mil litros de água é bom botar
só 17mil litros. Considere uma piscina estilo quadrada. Para
encher a piscina ele usará água paga (o valor é cobrado por cada
1000 litros de água, em partes inteiras. Ou seja, se usar 1 litro já
paga por 1000, ao usar 1002 já paga 2 mil litros)

a. Calcule a capacidade máxima da piscina pedindo ao usuário as
dimensões de largura, comprimento e profundidade (em cm). 1 litro é
igual a 1000 cm3
. Uma piscina por exemplo de capacidade → L=100cm x C=100cm x P=100cm → 1000 litros, e deve ser cheia até
850 litros apenas.

b. Informe até quantos litros é recomendado encher a piscina.

c. Peça ao usuário para informar o valor a ser pago por cada 1000 litros
na concessionária de água de sua cidade, e informe quanto ele
gastará para encher sua piscina;

d. Mensalmente é necessário repor 10% da água devido a banho e
evaporação, informe ao usuário também o gasto mensal para manter
a piscina no nível ideal.
'''

def clear_screen():
    if os.name == 'nt':
        os.system('cls');
    else:
        os.system('clear');

def main ():
    clear_screen()
    largura  = float(input("Insira a largura da psicina em cm: "))
    altura = float(input("Insira a altura da piscina em cm: "))
    profundidade = float(input("Insira a profundidade da piscina em cm: "))
    print("")
    valorDaConcessionaria = float(input("Insira o valor cobrado a cada 1000L pela concessionária: ")) # 200

    volumeDaPiscina = (largura * altura * profundidade) * 0.85
    volumeEmLitros = volumeDaPiscina / 1000
    constanteDeMultiplicacaoDoValor = volumeEmLitros // 1000
    
    if constanteDeMultiplicacaoDoValor == 0:
        valorPagamento = valorDaConcessionaria
    elif volumeEmLitros % 1000 > 0:
        valorPagamento = valorDaConcessionaria * (constanteDeMultiplicacaoDoValor + 1)
    else: 
        valorPagamento = valorDaConcessionaria * constanteDeMultiplicacaoDoValor

    valorReposicao = valorPagamento * 0.1

    print("-" * 75)
    print(f'''
    A quantidade de litros recomendável para encher sua piscina é: {volumeEmLitros:.0f}
    Gasto para encher a piscina: {valorPagamento:.2f}
    Gasto para manter mensalmente a piscina: {valorReposicao:.2f} 
    ''')
    print("-" * 75)
main()