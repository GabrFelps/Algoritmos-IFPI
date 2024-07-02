def main():
    n = int(input())
    n1 = 0
    n2 = 1
    n3 = 1
    resultado = "0 1 1"
    for i in range (n-3):
        proximoTermo = n3+n2
        n2 = n3
        n3 = proximoTermo
        resultado += str(f' {proximoTermo}')           
    print(resultado)
main()