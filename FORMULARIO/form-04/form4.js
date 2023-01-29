
let username = document.getElementById('username')
let url = document.getElementById('url')
let form = document.querySelector('form')
let idade = document.getElementById('idade')

form.addEventListener("submit", (e)=>{
  if(username.value == '' && url.value == ''){
    alert('Todos os campos precisam ser preenchidos')
  }else if
    (validarUrl(urlInput.value) === true && username.value === true){
    alert('Informações enviadas')
  }else{
    alert('Requisição negada')
  }
    e.preventDefault()
})

//---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
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
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
})


function validarUrl(url){
    let urlPattern =  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/; 
    return urlPattern.test(url)
}

// ---------- VALIDAÇÃO URL ---------- //
let urlInput = document.getElementById("url");
let urlLabel = document.querySelector('label[for="url"]');
let urlHelper = document.getElementById("url-helper");

togglePopup(urlInput, urlLabel)

// Validar valor do input

url.addEventListener("keyup", ()=>{
        if(validarUrl(url.value)!==true){
       // Adicionar estilos dinâmicos se o valor estiver correto
       estilizarInputIncorreto(urlInput, urlHelper);
       urlHelper.innerText = "Precisa inserir um endereço válido";
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    estilizarInputCorreto(urlInput, urlHelper);
  }
    })
    /*

    // validar checkbox //

    let idadeInput = document.getElementById('idade')
    let idadeLabel = document.getElementById('labe[for="idade"]')

    idade.addEventListener("change", (e)=>{
      if(checkbox.checked){
        console.log("botao checado !")
      }else{
        console.log("não marcou")
      }
    } )*/