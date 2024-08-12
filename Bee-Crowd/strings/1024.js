

function ehLetra(caractere){
    if ((caractere.charCodeAt() > 64 && caractere.charCodeAt() < 91)
    || (caractere.charCodeAt() > 96 && caractere.charCodeAt() < 123)){
        return true;
    }
    
    return false;
}

function tresParaDireita(texto){
    let novo_texto = "";
    
    for (var charindex in texto){
        if (ehLetra(texto.charAt(charindex))){
            novo_texto += String.fromCharCode(texto.charCodeAt(charindex) + 3);
            continue;
        }
        novo_texto += texto.charAt(charindex);
        }
    
    return novo_texto;
}


function inverter(texto){
    let novo_texto = "";
    for (let i = texto.length -1; i > -1; i--){
        novo_texto += texto.charAt(i);
    }
    
    return novo_texto;
}


function umParaEsquerda(texto){
    let novo_texto = "";
    let aux = "";
    let metade = parseInt(Math.floor(texto.length/2));
    
    for (let i = (texto.length - 1); i >= metade-1; i--){
        novo_texto += String.fromCharCode(texto.charCodeAt(i) - 1);
    }
    
    for (let i = 0; i < metade;  i++){
        aux += texto.charAt(i);
    }
    
    return aux + novo_texto;
    
}


function main(){
    const num =  parseInt(lines.shift());
    
    for (let i = 0; i < num; i++){
        let texto = lines.shift();
        texto = tresParaDireita(texto);
        texto = inverter(texto);
        texto = umParaEsquerda(texto);
        
        console.log(texto);
    }
}


main();