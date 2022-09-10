let formsRegister = document.forms.register
let inputsRegister = formsRegister.elements

inputsRegister.firstName.addEventListener("input", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(!validator.isLength(value,{min:2})){
        msg = "Debes colocar al menos 2 caracteres"
    }

    if(msg){
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        field.classList.remove("invalid")
        field.classList.add("valid")
        feed.innerText = "Correcto"
    }
});

inputsRegister.lastName.addEventListener("input", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(!validator.isLength(value,{min:2})){
        msg = "Debes colocar al menos 2 caracteres"
    }

    if(msg){
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        field.classList.remove("invalid")
        field.classList.add("valid")
        feed.innerText = "Correcto"
    }
});

inputsRegister.email.addEventListener("input", function(e) {
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
        feed.innerText = "Correcto"
    }
});

inputsRegister.password.addEventListener("input", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".msg-error")
    let msg = null
    let config = {
        minLength: 7,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }
    if(!validator.isLength(value,{min:8})){
        msg = "Debes colocar un mínimo de 8 caracteres"
    } else if(!validator.isStrongPassword(value, config)){
        msg = "La contraseña debe tener al menos 1 número, 1 mayúscula, 1 minúscula y carácter especial"
    }

    if(msg){
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        field.classList.remove("invalid")
        field.classList.add("valid")
        feed.innerText = "Correcto"
    }
});

/*inputsRegister.avatar.addEventListener("change", function(e) {
    let field = e.target.parentElement
    let files = e.target.files
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(files.length == 0){
        msg = "Debes subir un archivo"
    } else if(!validator.isMimeType(file[0].type)){
        msg = "El archivo no tiene un formato válido"
    } else if(!["jpg", "svg", "png", "jpeg", "gif"].includes(files[0].type.split("/")[1])){
        msg = "El archivo no tiene un formato de imagen válido"
    }

    if(msg){
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        field.classList.remove("invalid")
        field.classList.add("valid")
    }
});*/

formsRegister.addEventListener("submit", function(e){
    e.preventDefault()
    let isCorrect = false

    if(e.target.querySelectorAll(".labelFieldset.valid").length === 4){
        isCorrect = true
    }
    if(isCorrect){
        e.target.submit()
    } else{
        Swal.fire({
            title: "Error",
            text: "Por favor, revisa que todos los campos estén correctos",
            icon: "error"
        })
    }
})