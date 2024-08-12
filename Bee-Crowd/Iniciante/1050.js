var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    let n = Number(lines.shift())
    if (n == 61){
        console.log("Brasilia")
    }else if (n == 71){
        console.log("Salvador")
    }else if (n == 11){
        console.log("Sao Paulo")
    }else if (n == 21){
        console.log("Rio de Janeiro")
    }else if (n == 32){
        console.log("Juiz de Fora")
    }else if (n == 19){
        console.log("Campinas")
    }else if (n == 27){
        console.log("Vitoria")
    }else if (n == 31){
        console.log("Belo Horizonte")
    }else{
        console.log("DDD nao cadastrado")
    }
}
main()
