let form = document.querySelector('form')

form.addEventListener("submit", (e)=>{
  if(username.value == '' && url.value == ''){
    alert('Todos os campos precisam ser preenchidos')
  }else if
    (validarUrl(urlInput.value) === true && validarUser(usernameInput.value) === true && validarBotao() ===true){
    alert('Informações enviadas')
  }else{
    alert('Requisição negada')
  }
    e.preventDefault()
  
})
 
//---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {

  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

 
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //

function validarUrl(urlInput){
    let urlInputPattern =  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; 
    return urlInputPattern.test(urlInput)
}

function validarUser(usernameInput){
let usernameInputPattern = /^[A-Za-z0-9_-]{3,15}$/; //Qualquer username, entre 3 e 15 caracteres com letras, números, underline e traço
return usernameInputPattern.test(usernameInput)
}

function validarBotao(){
  var idadeMenor = document.getElementById('idade-menor')
  var idadeMaior = document.getElementById('idade-maior')
  
  if(idadeMenor.checked == true){
    return true
  }else if
    (idadeMaior.checked !== true){
    return false
    }else{
      return true;
    }
}
// Validar valor do input//

let urlInput = document.getElementById("url");
let urlLabel = document.querySelector('label[for="url"]');
let urlHelper = document.getElementById("url-helper");

togglePopup(urlInput, urlLabel)

urlInput.addEventListener("keyup", ()=>{
        if(validarUrl(urlInput.value)!==true){
     
       estilizarInputIncorreto(urlInput, urlHelper);
       urlHelper.textContent = "Ex: https://minhanoticia.com";
  } else {
        urlHelper.textContent = ''
    estilizarInputCorreto(urlInput, urlHelper);
  }
    })

    // Validar valor do input
    let usernameInput = document.getElementById("username");
    let usernameLabel = document.querySelector('label[for="username"]');
    let usernameHelper = document.getElementById("username-helper");

    togglePopup(usernameInput, usernameLabel)

    usernameInput.addEventListener("keyup", (e)=> {
       
      if(validarUser(usernameInput.value)!==true){
      
        usernameHelper.textContent = "nome precisa ter 3 ou mais caracteres";
        estilizarInputIncorreto(usernameInput, usernameHelper)
      } else {
        usernameHelper.textContent = ''
        estilizarInputCorreto(usernameInput, usernameHelper);
      }
    })
    

