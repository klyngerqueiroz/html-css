 /* Mostrar popup de campo obrigatório
 function togglePopoup(input, label){
    input.addEventListener("focus", () => {
       label.classList.add("required-popup");
     });
   
     // Ocultar popup de campo obrigatório
     input.addEventListener("blur", () => {
       label.classList.remove("required-popup");
     });
    }
   */
    function inputCorreto(input, texto){
       texto.classList.remove("visible");
       input.classList.remove("error");
       input.classList.add("correct");
    }
   
    function inputErro(input, texto){
       texto.classList.add("visible");
       input.classList.add("error");
       input.classList.remove("correct");
    }
   
    function validateEmail(email){
        let validate = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()+\-.,;?\^.,;?><:{}\[\]])[\w!@#$%&*()+\-.,;?\^.,;?><:{}\[\]]{6,12}$/;
        return validate.test()
    }   
    //----------VALIDAR NOME--------------//
   
   let nameInput = document.getElementById("name");
   let nameLabel = document.querySelector('label[for="name"]');
   let nameTexto = document.getElementById("iname");
   
   //togglePopoup(nameInput, nameLabel);
   
   //---------VALIDAR INPUT---------//
   nameInput.addEventListener("change", (e)=>{
       let res = e.target.value
   
       if(res.length < 3){
           nameTexto.innerText = 'O usuario deve conter mais de 3 caracteres ';
           inputErro(nameInput, nameTexto)
       }else{
           inputCorreto(nameInput, nameTexto);
       }
   })
   
   
   //----------VALIDAR EMAIL-----//
   
   let emailInput = document.getElementById("email");
   let emailLabel = document.querySelector('label[for="email"]');
   let emailTexto = document.getElementById("iemail");
   
   //togglePopoup(emailInput, emailLabel);
   
   emailInput.addEventListener("change", (e)=>{
       let res = e.target.value
       if(res.includes("@") && res.includes(".com")){
           inputCorreto(emailInput, emailLabel)
       }else{
           emailTexto.innerText = "Insira um email válido"
           inputErro(emailInput, emailLabel)
           
       }
   })
   
   //******VALIDAR SENHA*******//
   
   let senhaInput = document.getElementById("senha");
   let senhaLabel = document.querySelector('label[type="password"]');
   let senhaTexto = document.getElementById("isenha")
   
   //togglePopoup(senhaInput, senhaLabel)

      
   senhaInput.addEventListener("blur", (e)=>{
       let res = e.target.value
       if(res.length < 8){
           senhaTexto.innerText ='senha precisar ter mais de 7 caracteres'
           inputErro(senhaInput, senhaLabel)
       }else{
           inputCorreto(senhaInput, senhaLabel)
       }
   })
   
   //---VALIDAR BOTÃO-----//
   let btnSubmit = document.querySelector('button[type="submit"]')
   let inputsCorretos = {
    name: false,
    email: false,
    senha:false
   }
   btnSubmit.addEventListener("click", function(e){
    if(inputsCorretos.name === false ||
       inputsCorretos.email === false ||
       inputsCorretos.senha === false){
        e.preventDefault();
        alert("preencha todos os dados")
       }else{
        alert("formulario enviado com sucesso")
       }
   })
        