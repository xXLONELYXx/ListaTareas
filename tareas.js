function agregarTarea() {
    // Obtenemos el valor del campo de una tarea
    let nuevaTareaTexto = document.getElementById("NuevaTarea").value;

    // Validamos que el valor no sea vacío 
    if (nuevaTareaTexto === "") {
        alert("Por favor ingrese una tarea");
        return;
    }

    // Crear elemento en la lista 
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;

    // Crear botón eliminar 
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() { 
        nuevaTarea.remove();
    }

    // Agregar el botón de eliminar al elemento de la lista 
    nuevaTarea.appendChild(botonEliminar);

    // Agregar elemento a la lista 
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // Limpiar el cuadro de texto del nombre de la tarea 
    document.getElementById("NuevaTarea").value = "";
}
