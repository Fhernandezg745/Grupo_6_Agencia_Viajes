let formAreaCreateProducts = document.forms.createPr
let inputsCreateUpProd = formAreaCreateProducts.elements

inputsCreateUpProd.tittle.addEventListener("input", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(!validator.isLength(value,{min:5})){
        msg = "Debes colocar al menos 5 caracteres"
    }

    if(msg){
        tittle.classList.remove("valid")
        tittle.classList.add("invalid")
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        tittle.classList.remove("invalid")
        tittle.classList.add("valid")
        field.classList.remove("invalid")
        field.classList.add("valid")
        feed.innerText = " "
        let check = document.createElement("span");
        check.classList.add("fa-solid", "fa-circle-check");
        feed.appendChild(check);
        }
});


inputsCreateUpProd.shortDescription.addEventListener("input", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(!validator.isLength(value,{min:20})){
        msg = "Debes colocar al menos 20 caracteres"
    }

    if(msg){
        shortDescription.classList.remove("valid")
        shortDescription.classList.add("invalid")
        field.classList.remove("valid")
        field.classList.add("invalid")
        feed.innerText = msg
    } else {
        shortDescription.classList.remove("invalid")
        shortDescription.classList.add("valid")
        field.classList.remove("invalid")
        field.classList.add("valid")
        feed.innerText = " "
        let check = document.createElement("span");
        check.classList.add("fa-solid", "fa-circle-check");
        feed.appendChild(check);
    }
});

inputsCreateUpProd.image.addEventListener("change", function(e) {
    let field = e.target.parentElement
    let files = e.target.files
    let feed = field.querySelector(".msg-error")
    let msg = null
    if(files.length == 0){
        msg = "Debes subir un archivo"
    } else if(!validator.isMimeType(files[0].type)){
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
        field.classList.add("valid");
        feed.innerText = " "
        let check = document.createElement("span");
        check.classList.add("fa-solid", "fa-circle-check");
        feed.appendChild(check);
    }
});

formAreaCreateProducts.addEventListener("submit", function(e){
    e.preventDefault()
    let isCorrect = false

    if(e.target.querySelectorAll(".labelFieldset.valid").length === 3){
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