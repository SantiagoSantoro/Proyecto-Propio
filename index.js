const productos = [
    { id: 1, nombre: "Remera", precio: 3500, categoria: "Indumentaria", talle: "M" },
    { id: 2, nombre: "Mochila", precio: 1500, categoria: "Indumentaria", talle: "M" },
    { id: 3, nombre: "Gorra", precio: 3500, categoria: "Indumentaria", talle: "M" },
    { id: 4, nombre: "Buzo", precio: 6000, categoria: "Indumentaria", talle: "M" },
    { id: 5, nombre: "Musculosa", precio: 4500, categoria: "Indumentaria", talle: "M" },
];

const carrito = [];

const productoIndex = parseInt(prompt("Ingrese el número de ID del producto que desea comprar:"
    + "\nID1. Remera"
    + "\nID2. Mochila"
    + "\nID3. Gorra"
    + "\nID4. Buzo"
    + "\nID5. Musculosa")) - 1;

const productoSeleccionado = productos.filter(producto => producto.id === (productoIndex + 1))[0];

let mensaje = `
    Id: ${productoSeleccionado.id}
    Nombre: ${productoSeleccionado.nombre}
    Precio: ${productoSeleccionado.precio}
    Categoria: ${productoSeleccionado.categoria}
    Talle: ${productoSeleccionado.talle}
    `;
alert(mensaje);

const confirmaCompra = confirm ("¿Desea comprarlo?")
if (confirmaCompra) {
    carrito.push(productoSeleccionado);
    console.log(carrito);
    alert("Producto ingresado al carrito");
} else {
    alert("Compra cancelada");
}









