let formDelete = document.forms.deleteProductSelection

formDelete.addEventListener("click", function(e){
    e.preventDefault()

    Swal.fire({
        text: "¿Estás seguro que deseas eliminar este producto?",
        icon: "warning",
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Producto eliminado con éxito',
          )
        } formDelete.submit()
      })
})