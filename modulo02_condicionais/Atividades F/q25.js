/*Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.
**/

import { getnumber } from "./functions/io_utils.js";

function main(){
    const senha = getnumber("Insira a Senha(4 dígitos): ")
    validar(senha)
}

function validar(senha){
    if (senha === 1234){
        print ("Senha Correta!")
    } else {
        print ("SENHA INCORRETA!!!!!!!!!!!!!!!!")
    }
}

main ()