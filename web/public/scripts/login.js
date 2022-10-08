let formsRegister = document.forms.login
let inputsRegister = formsRegister.elements

inputsRegister.email.addEventListener("change", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(!validator.isEmail(value)){
        msg = "Debes ingresar una dirección de email válida"
    }

    if(msg){
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        field.classList.remove("invalid")
        field.classList.add("valid")
    }
});


inputsRegister.password.addEventListener("change", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(!validator.isLength(value,{min:1})){
        msg = "Por favor, colocar una contraseña"
    }

    if(msg){
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        field.classList.remove("invalid")
        field.classList.add("valid")
    }
});


formsRegister.addEventListener("submit", function(e){
    e.preventDefault()
    let isCorrect = false

    if(e.target.querySelectorAll(".labelFieldset.valid").length === 2){
        isCorrect = true
    }
    if(isCorrect){
        e.target.submit()
    } else{
        Swal.fire({
            title: "Error",
            text: "Por favor, revisa que todos los campos estén correctos",
            icon: "error",
            confirmButtonColor: "#049473"
        })
    }
})