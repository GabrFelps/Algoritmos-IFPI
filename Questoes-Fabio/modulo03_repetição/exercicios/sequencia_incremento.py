def main():
    qtd = int(input("Quantos números terá a sequência?\n> "));
    num = 0;
    for i in range(1,qtd+1):
        num+= i;
        print(num);
        

main();