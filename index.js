// CARRITO DE COMPRAS DE LA SECCION MERCH//

const productos = [
    { id: 1, nombre: "Remera", precio: "$3500", categoria: "Indumentaria", talle: "M" },
    { id: 2, nombre: "Mochila", precio: "$1500", categoria: "Indumentaria", talle: "M" },
    { id: 3, nombre: "Gorra", precio: "$3500", categoria: "Indumentaria", talle: "M" },
    { id: 4, nombre: "Buzo", precio: "$6000", categoria: "Indumentaria", talle: "M" },
    { id: 5, nombre: "Musculosa", precio: " $ 4500", categoria: "Indumentaria", talle: "M" },
];

const producto = parseInt(prompt("Ingrese el número de ID del producto que desea comprar:"
    + "\nID1. Remera"
    + "\nID2. Mochila"
    + "\nID3. Gorra"
    + "\nID4. Buzo"
    + "\nID5. Musculosa"));

const filtrado = productos.filter(item => item.id === producto);

const productoElegido =

    filtrado.find((item) => {
        let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: ${item.precio}
    Categoria: ${item.categoria}
    Talle: ${item.talle}
    `; alert(mensaje);
    });

const confirmaCompra = confirm ("¿Desea comprarlo?")
 if (confirmaCompra) {
    producto.push(item => item.id === producto)

    alert("producto ingresado al carrito")
}








