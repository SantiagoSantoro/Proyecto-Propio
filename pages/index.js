
const productos = [
    { id: 1, nombre: "Remera", precio: "$3500", categoria: "Indumentaria" },
    { id: 2, nombre: "Mochila", precio: "$1500", categoria: "Indumentaria" },
    { id: 3, nombre: "Gorra", precio: "$3500", categoria: "Indumentaria"},      //LO PUSE CON LA PRIMERA MAYUSCULA
    { id: 4, nombre: "Buzo", precio: "$6000", categoria: "Indumentaria" },
    { id: 5, nombre: "Musculosa", precio: " $ 4500", categoria: "Indumentaria" },
 ];

productos.push({ id: 6, nombre: "Medias", precio: "1000", categoria: "Indumentaria" },);
productos.unshift({ id: 0, nombre: "Zapatillas", precio: "12000", categoria: "Indumentaria" },);
console.log(productos);

const producto = prompt("Ingrese el nombre del producto que quiere comprar"); //CONSULTAR PARA QUE LEA MINUSCULAS toLowerCase
const filtrado = productos.filter (item => item.nombre === producto);

filtrado.forEach( (item) => {
    let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: ${item.precio}
    Categoria: ${item.categoria}
    `;     alert(mensaje);
})