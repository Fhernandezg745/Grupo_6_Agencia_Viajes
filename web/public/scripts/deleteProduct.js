let formDelete = document.forms.deleteProductSelection

formDelete.addEventListener("click", function(e){
    e.preventDefault()

    Swal.fire({
        text: "¿Estás seguro que deseas eliminar este producto?",
        icon: "warning",
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#049473"
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            text: 'Producto eliminado con éxito',
            confirmButtonColor: "#049473"
        })
          return formDelete.submit()
        } 
      })
})