

/*
case Sensitive = reconhece letras maiusculas e minusculas

por tag: getElementById()
por Id: getElementById()
por Nome: getElementByName()
por classe: getElementsByClassName()
por seletor: querySelector()

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto =  document.querySelector("#assunto")
let nomeOk = false
let emailok = false
let assuntook = false
let mapa = document.querySelector("#mapa")

nome.style.width = "50%"
email.style.width = "50%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <3 ) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeok = true
    }
}

function validaEmail () {
    textEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@")==-1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'

    }else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailok = true
    }
    

}

function validaAssunto() {
    let txtassunto = document.querySelector("#txtAssunto")
    
     if(assunto.value.length >= 100){
        txtassunto.innerHTML = "Seu Texto é muito grande, digite no máximo 100 caracteres"
        txtassunto.style.color = "red"
    }else {
        txtAssunto.style.display = "none"
        assuntook = true
    }
 }



function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulario enviado com sucesso!")
    }else {
        alert ("Preencha o formulario corretamente antes de enviar")

    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"

}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"

}


