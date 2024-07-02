import os;
import webbrowser;
import time
def clear_screen():
    if os.name == 'nt':
        os.system('cls');
    else:
        os.system('clear');


def main():
    resposta = 0;
    while resposta != 5:
        menu = '''
        [1] - Se voce for o Nicolas 
        [2] - Se voce for o Kawa
        [3] - Se voce for o Pedro
        [4] - Se voce for o Felipe
        [5] - Sair
        '''
        print('-' * 40);
        print(menu);
        print('-' * 40);
        resposta = int(input("Insira sua opcao: "));

        if resposta == 1:
            clear_screen()
            webbrowser.open("https://img.quizur.com/f/img62ec6190112589.16364963.jpg?lastEdited=1659658673")
        elif resposta == 2:
            clear_screen()
            webbrowser.open("https://static.quizur.com/i/b/57edaa14180e39.56914534Shrek.jpg")
        elif resposta == 3:
            clear_screen()
            webbrowser.open("https://img.quizur.com/f/img600e09cc407d90.85392957.jpg?lastEdited=1611532768")
        elif resposta == 4:
            clear_screen()
            print("pra mim n tem nada, eu que fiz o programa")
        elif resposta == 5:
            clear_screen()
            print("saindo...")
            time.sleep(2)
            break;  
        else:
            print("Numero Invalido! insira novamente")
            main()
main()
