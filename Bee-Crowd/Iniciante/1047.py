def main():
    hora_inicio, minuto_inicio, hora_termino, minuto_termino = list(map(int,input().split()))

    hora_final = hora_termino - hora_inicio
    minuto_final = minuto_termino - minuto_inicio
    if (hora_inicio == hora_final and minuto_final != minuto_inicio):
        hora_final = 23
        minuto_final = minuto_termino - minuto_inicio
    elif(hora_final < 0):
        hora_final = 24 + (hora_termino - hora_inicio)

    if(minuto_final < 0):
        minuto_final = 60 + (minuto_termino - minuto_inicio)
        if hora_inicio != hora_termino:
            hora_final = hora_final - 1

    if (hora_termino == hora_inicio and minuto_termino == minuto_inicio):
        print("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
    else:
        print(f"O JOGO DUROU {hora_final} HORA(S) E {minuto_final} MINUTO(S)")
main()  