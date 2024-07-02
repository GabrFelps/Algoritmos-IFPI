'''
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, 
e informe-o expresso no formato horas:minutos:segundos.
'''
def main():
    n = int(input())
    horas = (n//3600)
    restodashoras = n % 3600
    minutos = restodashoras // 60
    segundos = restodashoras % 60

    print(f"{horas}:{minutos}:{segundos}")
main()


