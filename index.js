// const productos = [
//   { id: 1, nombre: "Remera Blanca", precio: 3500, categoria: "Indumentaria", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/remerablanca.jpeg" },
//   { id: 2, nombre: "Buzo", precio: 6000, categoria: "Indumentaria", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/buzo.jpg" },
//   { id: 3, nombre: "Gorra", precio: 3500, categoria: "Indumentaria", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/gorra.jpg" },
//   { id: 4, nombre: "Remera Negra", precio: 3500, categoria: "Indumentaria", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/remeranegra.jpg" },
//   { id: 5, nombre: "Cuadro", precio: 4000, categoria: "Varios", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/cuadro.jpg" },
//   { id: 6, nombre: "Pin", precio: 500, categoria: "Varios", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/pin.jpg" },
//   { id: 7, nombre: "Remera Celeste", precio: 3500, categoria: "Indumentaria", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/remeraceleste.jpeg" },
//   { id: 8, nombre: "Sticker", precio: 500, categoria: "Varios", talle: "M", img: "https://raw.githubusercontent.com/SantiagoSantoro/Proyecto-propio/main/imagenes/sticker.jpg" },
// ];

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("lista-carrito");
const botonVaciarCarrito = document.getElementById("boton-vaciar-carrito");
const totalCarrito = document.getElementById("total-carrito");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];



fetch("../data.json")
  .then((response) => response.json())
  .then((productos) => {
    mostrarProductos(productos);
    console.log(productos)
  })
  .catch((error) => {
    console.error("Error al obtener los productos:", error);
  });

function mostrarProductos(productos) {
  const contenedorProductos = document.getElementById("contenedor-productos");

  productos.forEach((producto) => {
    const item = document.createElement("div");
    item.classList.add("producto", "card-producto");
    item.innerHTML = `
      <div class="card">
        <img src="${producto.img}" style="max-width: 100%">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h4 class="card-subtitle">${producto.categoria}<h4>
          <p class="card-text">$${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-dark">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(item);
  });
}


function agregarAlCarrito(idProducto) {
  const producto = productos.find((p) => p.id === idProducto);
  carrito.push(producto);
  actualizarCarrito();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Producto agregado al carrito',
    showConfirmButton: true,
    timer: 1500
  })
  // Almacenar en el Local Storage
  localStorage.setItem("carrito", JSON.stringify(carrito));

}

actualizarCarrito()

function actualizarCarrito() {
  const contenedorCarrito = document.getElementById("lista-carrito");
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.classList.add("producto");
    item.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}" style="width: 400px; height: 400px; border-radius: 5px;">
      <p>${producto.nombre} - $${producto.precio}</p>
      <button onclick="eliminarDelCarrito(${producto.id})" class="btn btn-danger">Eliminar</button>
    `;
    contenedorCarrito.appendChild(item);
  });


  // Actualizar total de la compra
  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
  const totalCarrito = document.getElementById("total-carrito");
  totalCarrito.innerText = `Total de la compra: $${total}`;
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

botonVaciarCarrito.addEventListener("click", () => {
  Swal.fire({
    title: '¿Está seguro de que desea vaciar el carrito?',
    text: "Esta acción no se puede deshacer",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, vaciar carrito'
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();
      Swal.fire(
        '¡Carrito vaciado!',
        '',
        'success'
      )
    }
  })
})

function eliminarDelCarrito(idProducto) {
  const productoIndex = carrito.findIndex((p) => p.id === idProducto);
  carrito.splice(productoIndex, 1);
  actualizarCarrito();

  // Actualizar Local Storage

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito() {
  carrito.splice(0, carrito.length);
  actualizarCarrito();

}


window.addEventListener("load", () => {
  mostrarProductos();

});





