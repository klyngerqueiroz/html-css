let form = document.querySelector('form')
let email = document.getElementById("email")
let senha = document.getElementById("password")
let textForm = document.getElementById("textForm")
let textEmail = document.getElementById("textFormEmail")
let textPassword = document.getElementById("textFormSenha")



form.addEventListener("submit", (e)=>{
    if(email.value == '' && senha.value == '') {
    textForm.textContent = 'preencha todos os dados';
}else if
    (validarEmail(email.value) === true && validarSenha(password.value) === true){
     textForm.textContent = 'Cadastro realizado'
}else{
    textForm.textContent = 'Solicitação negada'
}
    console.log(email.value)
    console.log(password.value)
    e.preventDefault()
});

/****FUNÇÕES***/

function validarEmail(email){
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; 
    return emailPattern.test(email)
}

function validarSenha(password){
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password)
}


/******VALIDAR EMAIL***/

email.addEventListener("keyup", ()=>{
    if(validarEmail(email.value) !==true){
    textEmail.textContent = 'ex: username@dominio.com*'
    }else{
        textEmail.textContent = ''
    }
})

password.addEventListener("keyup", ()=>{
    if(validarSenha(password.value)!==true){
        textPassword.textContent = "Sua senha precisa ter no minimo 8 caracteres,ex: Teste@123.*"
    }else{
        textPassword.textContent = ''
    }
})