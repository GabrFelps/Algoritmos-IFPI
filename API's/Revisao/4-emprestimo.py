import os
'''João precisa de um dinheiro emprestado para
comprar um Notebook para estudar programação. Para isso, foi ao
RSBank fazer uma simulação. As taxas de empréstimo do banco
obedecem à regra dos Juros Compostos Mensais, ou seja, o valor é
calculado cumulativamente mês a mês, ou seja, aplica-se os juros
sobre o valor total no primeiro mês e esse passa a ser a base para o
segundo mês.

Porém a taxa de juros aplicada é calculada de acordo com o prazo
de parcelamento (vide tabela) e à SELIC, atualmente em 13,75%
(abril/2023). O usuário só pode parcelar o empréstimo em até 24x
(min. 2 parcelas). Valor mínimo de empréstimo é de um salário
mínimo. Valor máximo de parcela é 40% da Renda Mensal do
Cliente.

Antes de calcular os juros é necessário calcular o IOF (Imposto sobre
Operações Financeiras) pago ao Governo Federal antes de aplicar
os Juros. O IOF é calculado da seguinte forma: 0,38% sobre valor
total (independente do prazo) + 0,0082% por cada dia do prazo do
empréstimo. Considere todos os meses com 30 dias. Os juros são
aplicados sobre o valor a ser recebido pelo Cliente + IOF

Prazo           Taxa
Até 6x          50% da SELIC
de 7x a 12x     75% da SELIC
de 12x a 18x    100% da SELIC
Acima de 18x    130% da SELIC

● Peça ao usuário Renda Mensal, Valor Empréstimo e Prazo
desejados, valide os dados a serem recebidos.
● Calcule e escreva na tela:
a. Valor Pedido
b. Valor do IOF
c. Valor dos Juros a pagar
d. Valor Total a pagar (ex.: "R$ 5148,00")
e. Valor da Parcela Mensal (ex.: "16x de R$ 321,75")
f. Comprometimento da Renda Mensal (%)
g. Se Empréstimo APROVADO ou NEGADO (se a
renda mensal suporta a parcela)
'''

def clear_screen():
    if os.name == 'nt':
        os.system('cls');
    else:
        os.system('clear');

def main():
    clear_screen()
    rendaMensal = float(input("Qual sua renda mensal?: "))
    valorEmprestimo = float(input("Qual o valor que você quer de empréstimo: "))
    prazoDesejado = int(input("Em quantas vezes você quer parcelar?: "))
    if prazoDesejado > 24 or prazoDesejado < 2:
        print("Valor Invalido! Insira Novamente")
        prazoDesejado = int(input("Em quantas vezes você quer parcelar?: "));
    selic = 0.1375
    count = 0
    iofFixo = valorEmprestimo * 0.0038
    iofDiario = valorEmprestimo * 0.000082 * prazoDesejado * 30
    iof = iofFixo + iofDiario
    print(iof)
    if prazoDesejado <= 6:
        valorPagamento = valorEmprestimo * (0.5 * selic)
    elif prazoDesejado >= 7 and prazoDesejado <= 12:
        valorPagamento = valorEmprestimo * (0.75 * selic)
    elif prazoDesejado >= 13 and prazoDesejado <= 18:
        valorPagamento = valorEmprestimo * selic
    else:
        valorPagamento = valorEmprestimo * (1.3 * selic)

    valorJuros = valorEmprestimo - valorPagamento - iof
    parcela = valorPagamento / prazoDesejado
    comprometimentoRenda = (parcela / rendaMensal) * 100

    if parcela > 0.4 * rendaMensal:
        situacao = "NEGADO"
    else: 
        situacao = "APROVADO"
    
    print("-" * 55)
    print(f'''
    Valor pedido: {valorEmprestimo:.2f}
    Valor IOF: {iof:.2f}
    Valor do Juros a Pagar: {valorJuros:.2f}
    Valor total a pagar: {valorPagamento:.2f}
    Valor da Parcela Mensal: {prazoDesejado}x de R${parcela:.2f}
    Comprometimento da Renda Mensal (%): {comprometimentoRenda:.0f}%
    Situacao: {situacao}
    ''')   
    print("-" * 55)
main()  