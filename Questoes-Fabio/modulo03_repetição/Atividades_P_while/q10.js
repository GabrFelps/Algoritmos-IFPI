/**Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:

· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.

O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não. */

import { get_number, print } from "../.UTILS/utils.js"

function main(){
    let qtd_containers = get_number("Número de containers: ")
    let peso_container = 0
    let count = 1

    while (count <= qtd_containers){
        peso_container = get_number(`Peso do Container ${count} (Kg)`)
        peso_container += peso_container
        count++
    }


    let numero_bilhete = 1
    let qtd_passageiros = 0
    let qtd_bagagens 
    while (numero_bilhete !== 0){
        //número do bilhete, quantidade de bagagens
        qtd_bagagens = 0
        print(`
        Passageiro ${qtd_passageiros}
        -----------------------------`)
        numero_bilhete = get_number("Numero do bilhete: ")
        qtd_bagagens = get_number("Quantidade de bagagens: ")
        qtd_bagagens += qtd_bagagens
        qtd_passageiros++
    }

    let peso_bagagens = qtd_bagagens * 10
    let peso_passageiros_s_bagagem = qtd_passageiros * 70
    let peso_passageiros = peso_passageiros_s_bagagem + peso_bagagens
    let peso_avião_sem_combustivel = peso_container + peso_passageiros
    let peso_combustivel = 500_000 - peso_avião_sem_combustivel
    let quantidade_combustivel = peso_combustivel / 1.5

    /** a quantidade de passageiros, a quantidade total de volume
    de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
    mensagem indicando a liberação da decolagem ou não */

    let resultado = `
    =============== Dados do voo ===============
    Quantidade de Passageiros = ${qtd_passageiros}
    Volume da Bagagem = ${peso_bagagens} Kg
    Peso dos Passageiros = ${peso_passageiros_s_bagagem} Kg
    Peso da Carga = ${peso_container}
    Quantidade possível de combustível = ${quantidade_combustivel} L
    `

    if (peso_avião_sem_combustivel >= 500_000){
        print(`
        ${resultado}
        -------------------------------------------------------------------------
        DECOLAGEM NÃO LIBERADA!! o peso da carga é muito grande para decolagem.`)
    } else if (quantidade_combustivel < 10_000){
        print(`
        ${resultado}
        ------------------------------------------------------------------------------------
        DECOLAGEM NÃO LIBERADA!! o quantidade de combustível é insuficiente (${quantidade_combustivel}L)`)
    } else {
        print(`
        ${resultado}
        -------------------------------------------------------------------------
        DECOLAGEM LIBERADA!!`)
    }

}
main()