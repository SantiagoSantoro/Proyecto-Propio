const productos = [
    { id: 1, nombre: "Remera", precio: 3500, categoria: "Indumentaria", talle: "M" },
    { id: 2, nombre: "Mochila", precio: 1500, categoria: "Indumentaria", talle: "M" },
    { id: 3, nombre: "Gorra", precio: 3500, categoria: "Indumentaria", talle: "M" },
    { id: 4, nombre: "Buzo", precio: 6000, categoria: "Indumentaria", talle: "M" },
    { id: 5, nombre: "Musculosa", precio: 4500, categoria: "Indumentaria", talle: "M" },
];

const carrito = [];

const productoId = parseInt(prompt("Ingrese el número de ID del producto que desea comprar:"
    + "\nID1. Remera"
    + "\nID2. Mochila"
    + "\nID3. Gorra"
    + "\nID4. Buzo"
    + "\nID5. Musculosa"));

const productoSeleccionado = productos.filter(producto => producto.id === productoId)[0];

if (!productoSeleccionado) {
    alert("El valor ingresado no es válido. Por favor, ingrese un número entre 1 y " + productos.length + ".");
} else {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
    while (isNaN(cantidad) || cantidad <= 0) {
        alert("El valor ingresado no es válido. Por favor, ingrese un número mayor que cero.");
        cantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
    }

    let mensaje = `
        Id: ${productoSeleccionado.id}
        Nombre: ${productoSeleccionado.nombre}
        Precio unitario: ${productoSeleccionado.precio}
        Cantidad: ${cantidad}
        Precio total: ${productoSeleccionado.precio * cantidad}
        Categoria: ${productoSeleccionado.categoria}
        Talle: ${productoSeleccionado.talle}
        `;
    alert(mensaje);

    const confirmaCompra = confirm ("¿Desea comprarlo?")
    if (confirmaCompra) {
        for (let i = 0; i < cantidad; i++) {
            carrito.push(productoSeleccionado);
        }
        console.log(carrito);
        alert(`Producto ingresado al carrito (${cantidad} unidades)`);
    } else {
        alert("Compra cancelada");
    }
}






