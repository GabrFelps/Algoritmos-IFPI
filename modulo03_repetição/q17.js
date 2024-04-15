import {question} from "readline-sync"
/**Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').
*/

function main(){
    let contador = 1
    let nome = getstring(`Nome da candidata ${contador}: `)
    let altura = getnumber(`Altura da candidata ${contador}: `)
    let peso = getnumber(`Peso da candidata ${contador}: `)
    let maioraltura = altura
    let menoraltura = altura
    let maiorpeso = peso
    let menorpeso = peso
    
    while(nome.toLowerCase() != "fim"){

        contador++

        if(maioraltura < altura){
            maioraltura = altura
        }
        if(menoraltura > altura){
            menoraltura = altura
        }
        if(maiorpeso < peso){
            maiorpeso =  peso
        }
        if(menorpeso > peso){
            menorpeso = peso
        }

        nome = getstring(`Nome da candidata ${contador}: `)
        if (nome.toLowerCase()!= "fim"){
        altura = getnumber(`Altura da candidata ${contador}: `)
        peso = getnumber(`Peso da candidata ${contador}: `)
        }
        
    }

    console.log(`
    A candidata mais alta mede: ${maioraltura}
    A candidata mais baixa mede: ${menoraltura}
    A candidata mais thais carla pesa: ${maiorpeso} 
    A candidata menos thais carla pesa: ${menorpeso}
    `)
}

function getstring(msg){
    return String(question(msg))
}

function getnumber(msg){
    return Number(question(msg))
} 

main()