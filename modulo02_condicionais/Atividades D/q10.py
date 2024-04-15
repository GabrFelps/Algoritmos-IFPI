#Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

def validar_data(day, month, year):
    validation = 0
    if day <= 31:
        # se o mês não tiver 31 dias, mais um if para 30 dias
        validation += 1
    if month <= 12:
    # se o mês for "2", mais um if para verificar o dia
        validation += 1
    if year <= 2024:
        # Auto-explicativo
        validation += 1 
    
    if validation == 3:
        return True
    else:
        return False


def main():
    dia = int(input('Digite o dia: \n'
                    '> '))
    mes = int(input('Digite o mes: \n'
                    '> '))
    ano = int(input('Digite o ano: \n'
                    '> '))
    
    print(validar_data(dia, mes, ano))


if __name__ == '__main__':
    main()