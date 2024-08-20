let listaDeTareas = [];
 
// funcion para agregar tareas a la lista
function agregarTarea(tarea) {
    listaDeTareas.push({tarea, completada: false})
    console.log(`Tarea ${tarea} ha sido agregada a la lista`)
}
 
// funcion para completar una tarea en base a la posicion en la lista
function completarTarea(indice) {
    if (indice >= 0 && indice < listaDeTareas.length) {
        listaDeTareas[indice].completada = true;
        console.log(`Tarea ${listaDeTareas[indice].tarea} ha sido marcada como completada.`)
    } else {
        console.log("Índice de tarea no válido")
    }
};
 
// funcion para eliminar una tarea en base a la posicion en la lista
function eliminarTarea(indice) {
    if (indice >= 0 && indice < listaDeTareas.length) {
        const tareaEliminada = listaDeTareas.splice(indice, 1);
        console.log(`Tarea ${tareaEliminada[0].tarea} ha sido eliminada de la lista.`)
    } else {
        console.log("Índice de tarea no válido")
    }
};
 
//* probando los metodos desarrollados hasta el momento
// agregarTarea("hacer la cama")
// console.log(listaDeTareas)
// completarTarea(0)
// console.log(listaDeTareas)
// eliminarTarea(0)
// console.log(listaDeTareas)
 
 
function mostrarTareas() {
    if ( listaDeTareas.length === 0 ) {
        console.log("La lista de tareas está vacía.")
    } else {
        console.log("Lista de tareas: ");
        listaDeTareas.forEach((tarea, indice) => {
            const estado = tarea.completada ? 'Completada' : 'Pendiente';
            console.log(`${indice + 1}. ${tarea.tarea} - ${estado}`)
        })
    }
};
 
// probando mostra tareas
// mostrarTareas()
 
function finalizarLista() {
    if (listaDeTareas.length === 0) {
        console.log("La lista de tareas está vacía.")
    } else {
        console.log("Lista de tareas finalizada.")
        listaDeTareas = [];
    }
}
 
// probando finalizarLista
// finalizarLista()
// console.log(listaDeTareas)
 
function iniciarGestionDeTareas() {
    let seguirFuncionando = true;
 
    while (seguirFuncionando) {
        const accion = prompt("¿Qué acción deseas hacer en la lista? (agregar / completar / eliminar / mostrar /finalizar):").toLowerCase();
 
        switch (accion) {
            case 'agregar':
                const tarea = prompt("Ingresa la tarea que deseas agregar:");
                agregarTarea(tarea);
                break;
            case 'completar':
                const indiceCompletar = parseInt(prompt("Ingresa el número de la tarea que deseas completar")) - 1;
                completarTarea(indiceCompletar);
                break;
            case 'eliminar':
                const indiceEliminar = parseInt(prompt("Ingresa el número de la tarea que deseas completar")) - 1;
                eliminarTarea(indiceEliminar);
                break;
            case 'mostrar':
                mostrarTareas();
                break;
            case 'finalizar':
                finalizarLista();
                seguirFuncionando = false
                break;
            default:
                console.log("Acción no reconocida. Por favor, intenta nuevamente.");
        }
        if (accion != 'finalizar') {
            const respuesta = prompt("¿Deseas realizar otra acción? (s / n):").toLowerCase();
            if (respuesta != 's') {
                seguirFuncionando = false
            }
        }
    }
}
 
iniciarGestionDeTareas();