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

let cantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
while (isNaN(cantidad) || cantidad <= 0) {
    cantidad = parseInt(prompt("La cantidad ingresada no es válida. Por favor, ingrese un número entero mayor a cero:"));
}

const productoConCantidad = {
    producto: productoSeleccionado,
    cantidad: cantidad
};

let mensaje = `
    Id: ${productoConCantidad.producto.id}
    Nombre: ${productoConCantidad.producto.nombre}
    Precio: ${productoConCantidad.producto.precio}
    Cantidad: ${productoConCantidad.cantidad}
    Categoria: ${productoConCantidad.producto.categoria}
    Talle: ${productoConCantidad.producto.talle}
    `;
alert(mensaje);

const confirmaCompra = confirm("¿Desea comprarlo?")
if (confirmaCompra) {
    carrito.push(productoConCantidad);
    console.log(carrito);
    alert("Producto ingresado al carrito");
} else {
    alert("Compra cancelada");
}








