def ordenar(a,b,c):
    maior = 0
    meio = 0
    menor = 0
    if a > b and a > c:
        maior = a
        if b > c:
            meio = b
            menor = c
        else:
            meio = c
            menor = b
    if b > c and b > a:
        maior = b
        if c > a:
            meio = c
            menor = a
        else:
            meio = a
            menor = c
    if c > b and c > a:
        maior = c
        if b > a:
            meio = b
            menor = a
        else:
            meio = a
            menor = b   

    return maior, meio, menor
    
        
def main():
    A, B, C = input().split(" ")
    A = float(A)
    B = float(B)
    C = float(C)
    ordenar(A, B, C)
    print(A, B, C)
    if A > 0 and B > 0 and C > 0:
        if A >= B + C:
            print("NAO FORMA TRIANGULO")
        else:   
            if A**2 == B**2 + C**2:
                print("TRIANGULO RETANGULO")
            elif A**2 > B**2 + C**2:
                print("TRIANGULO OBTUSANGULO")
            elif A**2 < B**2 + C**2:
                print("TRIANGULO ACUTANGULO")
                if A == B and B == C:
                    print("TRIANGULO EQUILATERO")
                elif A == B and A != C or C == A and C != B or B == C and B != A:
                    print("TRIANGULO ISOSCELES")
                
main()