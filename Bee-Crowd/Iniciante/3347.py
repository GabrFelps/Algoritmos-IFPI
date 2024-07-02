def main():
    n = int(input())
    if n % 2 == 0:
        brancas = (n**2)/2
        pretas = brancas
    else:
        brancas = (n**2//2) + 1
        pretas = (n**2) - brancas
    print(f"{brancas:.0f} casas brancas e {pretas:.0f} casas pretas") 
main()
 
# if n%2==0: brancas = (n**2)/2; pretas = branca