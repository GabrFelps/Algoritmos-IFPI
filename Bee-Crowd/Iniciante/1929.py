
def main():
    a, b, c, d = list(map(int, input().split()))
    
    if a > b and a > c:
        if a >= b + c:
            print("N")
    elif b > a and b > c:
        if b >= c + b:
            print("N")
    elif c > a and c > b:
        if c >= a + b:
            print("N")
    elif b > c and b > d:
        if b >= a + d:
            print("N")
    elif c > b and c > d:
        if c >= b + a:
            print("N")
    elif d > b and d > c:
        if d >= b + c:
            print("N")
    elif a > d and a > b:
        if a >= b + d:
            print("N")
    elif b > a and b > d:
        if b >= a + d:
            print("N")
    elif d > a and d > b:
        if d >= a + b:
            print("N")
    elif a > c and a > d:
        if a >= c + d:
            print("N")
    elif c > a and c > d:
        if c >= d + a:
            print("N")
    elif d > a and d > c:
        if d >= a + c:
            print("N")
    else: 
        print("S")
main()

