import os

'''[investimento.js] Mariana resolveu investir de parte de seu salário
(um pedaço(R$) inferior a 30%) de forma fixa mensal; 
O investimento escolhido rende mensalmente a uma taxa de juros de 0,01% 
até 1,0% sobre o saldo do mês. Mariana tem um dado objetivo com este
investimento. Pergunte a ela qual o objetivo e de quanto ela precisa
para realizá-lo. Além disso, peça o salário, quanto(%) ela pretende 
investir mensalmente e qual a taxa de juros do investimento
escolhido. Em seguida mostre em quantos meses ela atingirá o
objetivo. Se for acima de 12 meses mostre-o em anos e meses. 
A cada mês você deve atualizar o saldo, primeiro com o aporte
(depósito de valor do salário) e depois aplicar os créditos dos 
juros sobre esse novo saldo. Faça isso enquanto o objetivo não for
alcançado, contando os meses para serem exibidos como se pede.'''

# perguntar objetivo e quanto precisa pro seu objetivo final do investimento
# perguntar salário
# perguntar quaantos % do salário dela, ela deseja investir
# perguntar qnts % do salário ela deseja investir mensalmente
# perguntar a taxa de juros do investimento escolhido (não pode ser maior que 1)

# monstrar em quantos meses ela vai alcançar o objetivo
    # se maior que 12 meses mostrar em ano
def numberInRange(limite, mensagem):
    numero = float(input(mensagem));
    if numero > limite:
        print("Número Invalido! Digite Novamente: ");
        return numberInRange(limite, mensagem);
    return numero
    

def clear_screen():
    if os.name == 'nt':
        os.system('cls');
    else:
        os.system('clear');


def main(): 
    clear_screen();
    objetivo = input("Qual seu objetivo?: ");
    ateObjetivo = float(input("Quanto dinheiro você precisa pra alcançar seu objetivo?: "));
    salario = float(input("Qual o seu salário?: "));
    porcentagemDoSalario = numberInRange(30, "Qual porcentagem do seu salário você deseja investir?: ");
    jurosDoInvestimento = numberInRange(1, "Qual a taxa de juros do investimento escolhido? (0,01 até 1%): ");
    investimento_mensal = salario * (porcentagemDoSalario / 100);
    saldo = 0;
    count = 0;

    while saldo < ateObjetivo:
        saldo += investimento_mensal;
        saldo += saldo * (jurosDoInvestimento / 100);
        count += 1;
    
    anos = count // 12;
    meses = count % 12;

    print("-" * 70);
    print(f"O tempo necessário para atingir seu lucro desejado é: {anos} anos e {meses} meses");
    print("-" * 70);

main()
