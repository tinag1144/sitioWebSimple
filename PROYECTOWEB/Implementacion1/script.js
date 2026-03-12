// variable para guardar el estado de los colores
let estado = 0

//funcipn para mostrar el texto
const mostrarTexto = (event) => {

    if(event.key === "Enter"){

        // traigo el texto que ingresó el usuario
        let texto = document.getElementById("texto").value

        // se muestra en un alert
        alert(texto)
    }

}

// función para cambiar los colores de la pagina
const cambiarColor = () => {

    estado++

    if(estado > 2){
        estado = 0
    }

    if(estado === 0){
        document.body.style.background = "white"
        document.body.style.color = "black"
    }

    if(estado === 1){
        document.body.style.background = "black"
        document.body.style.color = "white"
    }

    if(estado === 2){
        document.body.style.background = "lightblue"
        document.body.style.color = "red"
    }

}