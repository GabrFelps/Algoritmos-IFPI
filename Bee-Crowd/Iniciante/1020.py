'''Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. 
Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 
Este é apenas um exercício com objetivo de testar raciocínio matemático simples.'''

def main():
    idadedias = int(input())
    anos = idadedias // 365
    restoanos = idadedias % 365
    meses = restoanos // 30
    dias = restoanos % 30
    print(f'''{anos} ano(s)
{meses} mes(es)
{dias} dia(s)''')
main()