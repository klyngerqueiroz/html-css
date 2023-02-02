let form = document.querySelector('form')
let email = document.getElementById("email")
let textEmail = document.getElementById("textFormEmail")

form.addEventListener("submit", (e)=>{
    if(email.value == '') {
    textForm.textContent = 'Preencha o campo E-mail';
}else if
    (validarEmail(email.value) === true){
     textForm.textContent = 'Email enviado'
}else{
    textForm.textContent = 'Solicitação negada'
}
    e.preventDefault()
});

/***FUNÇÃO PARA VALIDAR E-MAIL*****/
function validarEmail(email){
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; 
    return emailPattern.test(email)
}

/******VALIDAR EMAIL***/

email.addEventListener("keyup", ()=>{
    if(validarEmail(email.value) !==true){
    textEmail.textContent = ''
    }else{
        textEmail.textContent = ''
    }
})