
const contenedorCarrito = document.getElementById("carrito");

// Identificar al usuario conectado
const usuario = sessionStorage.getItem("usuario");
const claveCarrito = "carrito_" + usuario;

// Recuperar los productos de ese usuario
let carrito = JSON.parse(localStorage.getItem(claveCarrito)) || [];

function mostrarCarrito() {
    let contenido = "";
    let total = 0;

    carrito.forEach(function(producto, indice) {
        const subtotal = producto.precio * producto.cantidad;

        total += subtotal;

        contenido += `
            <article class="producto">
                <img src="${producto.imagen}" alt="${producto.titulo}">

                <h3>${producto.titulo}</h3>

                <p>${producto.descripcion}</p>

                <p>Precio: $${producto.precio.toLocaleString("es-AR")}</p>

                <p>Cantidad: ${producto.cantidad}</p>

                <p class="precio">
                    Subtotal: $${subtotal.toLocaleString("es-AR")}
                </p>

                <button type="button" class="btnEliminar" data-indice="${indice}">
                    Eliminar
                </button>
            </article>
        `;
    });

    if (carrito.length === 0) {
    contenido = "<p>Tu carrito está vacío.</p>";
} else {
    contenido += `
        <div class="total-carrito">
            <h2>Total: $${total.toLocaleString("es-AR")}</h2>
        </div>
    `;
}

    contenedorCarrito.innerHTML = contenido;
}

// Eliminar productos del carrito
contenedorCarrito.addEventListener("click", function(evento) {
    if (evento.target.classList.contains("btnEliminar")) {
        const indice = Number(evento.target.dataset.indice);

        carrito.splice(indice, 1);

        localStorage.setItem(claveCarrito, JSON.stringify(carrito));

        mostrarCarrito();
    }
});

mostrarCarrito();
