def main():
    dicionario = {
        11: "São Paulo", 
        19: "Campinas", 
        21: "Rio de Janeiro", 
        27: "Vitoria", 
        31: "Belo Horizonte",
        32: "Juiz de Fora", 
        61: "Brasília", 
        71: "Salvador"
        }
    n = int(input())
    if n in dicionario.keys():
        print(dicionario[n])
    else:
        print("DDD nao cadastrado")
main()