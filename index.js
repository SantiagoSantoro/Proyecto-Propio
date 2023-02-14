// CARRITO DE COMPRAS DE LA SECCION MERCH//

const productos = [
    { id: 1, nombre: "remera", precio: "$3500", categoria: "Indumentaria", talle: "M" },
    { id: 2, nombre: "mochila", precio: "$1500", categoria: "Indumentaria", talle: "M" },
    { id: 3, nombre: "gorra", precio: "$3500", categoria: "Indumentaria", talle: "M" },
    { id: 4, nombre: "buzo", precio: "$6000", categoria: "Indumentaria", talle: "M" },
    { id: 5, nombre: "musculosa", precio: " $ 4500", categoria: "Indumentaria", talle: "M" },
];

// productos.push({ id: 6, nombre: "Medias", precio: "1000", categoria: "Indumentaria" },);
// productos.unshift({ id: 0, nombre: "Zapatillas", precio: "12000", categoria: "Indumentaria" },);
// console.log(productos);


while (prompt) {
    const producto = prompt("Ingrese el nombre del producto que desea comprar:"
        + "\n1. Remera"
        + "\n2. Mochila"
        + "\n3. Gorra"
        + "\n4. Buzo"
        + "\n5. Musculosa");

    const filtrado = productos.filter(item => item.nombre === producto.toLowerCase());

    filtrado.forEach((item) => {
        let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: ${item.precio}
    Categoria: ${item.categoria}
    Talle: ${item.talle}
    `; alert(mensaje);
    })
}
const cards = document.getElementsByClassName("card");
console.log(card)



