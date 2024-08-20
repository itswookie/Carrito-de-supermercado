let listaCarrito = [];
let listaProductos = [
    { producto: "Leche", precio: 1000 },
    { producto: "Pan de Molde", precio: 2000 },
    { producto: "Queso", precio: 1200 },
    { producto: "Mermelada", precio: 890 },
    { producto: "Azúcar", precio: 1300 }
];
var muestraUnica = true;  // mostrar la lista en la consola una única vez

// Funcion para mostrar listado de producto
function mostrarProductos() {
    if (muestraUnica) {
        console.log("Lista de Productos: ");
        for (let i = 0; i < listaProductos.length; i++) {
            if (listaProductos.length > 0) {
                console.log(`${[i + 1]}. ${listaProductos[i].producto} - $${listaProductos[i].precio}`)
            }
        }
        muestraUnica = false;
    }
}
// mostrarProductos()   // probando mostrarProductos


// Funcion para agregar productos
function agregarProducto(indice) {
    if (indice >= 0 && indice < listaProductos.length) {
        const productoSeleccionado = listaProductos[indice];
        listaCarrito.push([productoSeleccionado.producto, productoSeleccionado.precio]);
    } else {
        alert(`Número seleccionado no válido.`)
    }
}
// agregarProducto(3); // probando agregarProducto al array listaDeCarrito

// Funcion para asignar Cantidad de productos
function cantidadProducto(indice) {
    if (indice > 1) {
        const productoSeleccionado = listaCarrito[listaCarrito.length - 1];
        for (let i = 0; i < indice - 1; i++) {
            listaCarrito.push([productoSeleccionado[0], productoSeleccionado[1]]);
        }
        console.log(`Has añadido el producto ${productoSeleccionado[0]} con el valor de $${productoSeleccionado[1]} por ${indice} cantidad de veces.`);
    } else {
        alert(`Se ha añadido su ${listaCarrito[listaCarrito.length - 1][0]} al carrito.`)
        console.log(`Has añadido el producto ${listaCarrito[listaCarrito.length - 1][0]} con el valor de $${listaCarrito[listaCarrito.length - 1][1]}.`);
    }
}

// Funcion para Recorrer el Carrito de compras
function recorrerCarrito() {
    console.log('Su carrito de compras:')
    listaCarrito.forEach((producto, indice) => {
        console.log(`${indice + 1}. ${producto[0]} - $${producto[1]}`);
    });
}

// Funcion para total de la compra.
function calcularCarrito() {
    const totalCarrito = listaCarrito.reduce(function (acumulador, compra) {
        return acumulador + compra[1];  // no funcionó con compra.precio, entregaba un NaN desde el switch... preguntar (?)
    }, 0);
    return totalCarrito;
}

function iniciarCarrito() {
    let menuRun = true;

    while (menuRun) {
        const accion = parseInt(prompt("¿Qué acción deseas hacer para tu carrito?\n1. Agregar Producto\n2. Carrito de Compras\n3. Total del carrito.\n4. Finalizar compra."));

        switch (accion) {
            case 1: // agregar producto
                mostrarProductos();
                const indiceProducto = parseInt(prompt("Ingrese el número del producto que deseas añadir al carrito")) - 1;
                agregarProducto(indiceProducto);
                if (indiceProducto < listaProductos.length) { // validación número superior al índice de lista predefinida
                    const indiceCantidad = parseInt(prompt("Ingrese la cantidad de productos que deseas añadir al carrito"));
                    cantidadProducto(indiceCantidad);
                    break;
                }
                break;
            case 2: // carrito de compras
                recorrerCarrito();
                break;
            case 3: // carrito precio total
                alert(`El precio total de su carrito es: $${calcularCarrito()}`)
                console.log(`Total: $${calcularCarrito()}`)
                break;
            case 4: // finalizar lista
                alert(`El cobro total es de: $${calcularCarrito()}\nMuchas gracias por su preferencia.`)
                menuRun = false
                break;
            default:
                console.log("Acción no reconocida. Por favor, intenta nuevamente.");
                break;
        }
        if (accion != 4) {
            const respuesta = prompt("¿Deseas realizar otra acción? (s / n):").toLowerCase();
            if (respuesta == 'n') {
                menuRun = false
            } else {
                alert("Intente nuevamente.")
            }
        }
    }
}

iniciarCarrito();