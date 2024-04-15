/*Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;. 
· uma mensagem indicando a possibilidade ou não de haver 2o turno**/

import {get_number, print} from "../.UTILS/utils.js"
function main(){
    console.log(`
    === PesquisaEleiçõesADS ===
    >>      candidatos:      <<
    - Lule                 (13)
    - Bolsoniri            (22)
    - Ciru Pomes           (69)
    ---------------------------
    > Indeciso             (99)
    > Outros               (98)
    > Nulo/Branco          ( 0)
    `)

    let voto = get_number("Insira seu Voto: ")
        let a = 0
        let b = 0
        let c = 0
        let indeciso = 0 
        let outro = 0
        let nulo_branco = 0 
        let qtd_votos = 0

    let resultado = receber_votos(voto, a, b, c, indeciso, outro, nulo_branco, qtd_votos)  
    let segundo_turno 

    if(resultado.porcentagem_a > 50 || resultado.porcentagem_b > 50 || resultado.porcentagem_c > 50){
        segundo_turno = `SIM`
    } else {
        segundo_turno = `NÃO`
    }

    print(`
    ====== Intenção de Votos ======
    > Candidato Lule: ${resultado.porcentagem_a.toFixed(1)}%
    > Candidato Bolsoniri: ${resultado.porcentagem_b.toFixed(1)}%
    > Candidato Ciru Pomes: ${resultado.porcentagem_c.toFixed(1)}% 
    > Indecisos: ${resultado.porcentagem_ind.toFixed(1)}
    > Nulos/Brancos: ${resultado.porcentagem_nulo.toFixed(1)}
    ------------------------------------
    Possibilidade de segundo turno: ${segundo_turno}
    
    `)
}

function receber_votos(voto, a, b, c, indeciso, outro, nulo_branco, qtd_votos){
            while(voto != -1){   
                qtd_votos++
                    if (voto === 13){
                            a++
                            
                    } else if (voto === 22){
                            b++
                            
                    } else if (voto === 69){
                            c++
                            
                    } else if (voto === 99){
                            indeciso++
                            
                    } else if (voto === 98){
                            outro++
                            
                    } else if (voto === 0){
                            nulo_branco++
                            
                    }
                    voto = get_number("Insira seu Voto: ")
            }
    
            let porcentagem_a = a / qtd_votos * 100
            let porcentagem_b = b / qtd_votos * 100
            let porcentagem_c = c / qtd_votos * 100
            let porcentagem_ind = indeciso / qtd_votos * 100
            let porcentagem_outro = outro / qtd_votos * 100
            let porcentagem_nulo = nulo_branco / qtd_votos *100
            return {porcentagem_a, porcentagem_b, porcentagem_c, porcentagem_ind, porcentagem_outro, porcentagem_nulo}
    
}

main()