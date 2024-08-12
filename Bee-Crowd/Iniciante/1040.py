def main():
    N1, N2, N3, N4 = map(float, input().split())
    Media1 = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10
    retornar_situacao_aluno(Media1)

    
def retornar_situacao_aluno(Media1):
    if Media1 >= 7:
        print(f"Media: {Media1:.1f}")
        print("Aluno aprovado.")
    elif Media1 >= 5:
        N_PF, situacao, media_PF = retornar_situacao_PF(Media1)
        print(f"Media: {Media1:.1f}")
        print("Aluno em exame.")
        print(f"Nota do exame: {N_PF:.1f}")
        print(situacao)
        print(f"Media final: {media_PF:.1f}")
    elif Media1 < 5:
        print(f"Media: {Media1:.1f}")
        print("Aluno reprovado.")


def retornar_situacao_PF(Media):
    N_PF =  float(input())
    media_PF = (N_PF + Media) / 2
    situacao = "Aluno reprovado." if media_PF < 5 else "Aluno aprovado."
    
    return N_PF, situacao, media_PF
    
main()