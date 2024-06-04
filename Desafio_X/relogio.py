'''
Em alguns países (como no Brasil) é mais comum usar "tempo militar"
- representar horários de 00:00 até 23:59.

Em outros países, se usa horário de 12h, ou "AM/PM" 
- 06h em tempo militar vira 6:00 AM e 18h em tempo militar vira 6:00PM.

Um detalhe interessante é que "zero hora" em horário militar vira 12AM em horário AM/PM.
 Então por exemplo, 00:35 em horário militar vira 12:35AM em AM/PM.

O desafio é escrever duas funções da forma mais simples possível:

- A primeira deve converter um horário militar para AM/PM
- A segunda deve converter um horário AM/PM para militar

Horários devem ser representados no formato:

hh:mm:ss (militar)
hh:mm:ss(AM|PM) (AM/PM)
'''
    
def militar_to_am_pm(horario):
    horas, minutos, segundos = horario.split(":") # armazena os argumentos passados no horário em variáveis, usando como separação os ":"
    xhoras = int(horas)
    xminutos = int(minutos)
    xsegundos = int(segundos)
    if xhoras > 12:
        xhoras = xhoras - 12
        tipo = "PM"
    elif xhoras < 12 and xhoras == 0:
        xhoras = 12
        tipo = "AM"
    else:
        tipo = "AM"
        
    return "{}:{}:{} {}".format(xhoras, xminutos, xsegundos, tipo)
    

def am_pm_to_militar(horario):
    horascomplet, tipo = horario.split() # armazena os argumentos passados no horário em variáveis, usando como separação o espaço
    horas, minutos, segundos = horascomplet.split(":")
    xhoras = int(horas)
    xminutos = int(minutos)
    xsegundos = int(segundos)

    if xhoras == 12 and tipo == "AM":
        xhoras = 0
    if tipo == "PM":
        xhoras += 12

    return "{}:{}:{}".format(xhoras, xminutos, xsegundos)

print(am_pm_to_militar("12:45:20 AM"))
    



    
