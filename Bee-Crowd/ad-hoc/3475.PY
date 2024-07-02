def stringtonumb(numero):
    if numero == "zero":
        print("0")
    elif numero == "um":
        print("1")
    elif numero == "dois":
        print("2")
    elif numero == "tres":
        print("3")
    elif numero == "quatro":
        print("4")
    elif numero == "cinco":
        print("5")
    elif numero == "seis":
        print("6")
    elif numero == "sete":
        print("7")
    elif numero == "oito":
        print("8")
    elif numero == "nove":
        print("9")


def numbtostring(numero):
    if numero == "0":
        print("zero")
    elif numero == "1":
        print("um")
    elif numero == "2":
        print("dois")
    elif numero == "3":
        print("tres")
    elif numero == "4":
        print("quatro")
    elif numero == "5":
        print("cinco")
    elif numero == "6":
        print("seis")
    elif numero == "7":
        print("sete")
    elif numero == "8":
        print("oito")
    elif numero == "9":
        print("nove")


def main():
    numero = input()
    if len(numero) ==  1: 
        numbtostring(numero)
    else:
        stringtonumb(numero)
main()