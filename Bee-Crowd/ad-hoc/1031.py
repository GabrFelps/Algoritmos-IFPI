import random

def main():
    m = 1
    while m != 0:
        m = int(input())
        jafoi = []
        nfoi = [1,]
        for i in range (1,m):
            item = random.randint(2,m)
            if item not in nfoi:
                nfoi.append(item)
        if m != 0 : print(nfoi)



    
    
    
main()