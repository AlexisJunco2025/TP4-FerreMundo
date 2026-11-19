
const contenedorCarrito = document.getElementById("carrito");

// IDENTIFICAR AL USUARIO CONECTADO
const usuario = sessionStorage.getItem("usuario");
const claveCarrito = "carrito_" + usuario;

// RECUPERAR LOS PRODUCTOS DEL USUARIO
let carrito = JSON.parse(localStorage.getItem(claveCarrito)) || [];

// MOSTRAR LOS PRODUCTOS DEL CARRITO
function mostrarCarrito() {

    if (!contenedorCarrito) {
        return;
    }

    let contenido = "";
    let total = 0;

    carrito.forEach(function(producto, indice) {

        const subtotal = producto.precio * producto.cantidad;

        total += subtotal;

        contenido += `
            <article class="item-carrito">

                <div class="imagen-carrito">
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                </div>

                <div class="informacion-carrito">

                    <h3>${producto.titulo}</h3>

                    <p class="descripcion-carrito">
                        ${producto.descripcion}
                    </p>

                    <p class="precio-unitario">
                        Precio unitario:
                        <strong>
                            $${producto.precio.toLocaleString("es-AR")}
                        </strong>
                    </p>

                    <div class="controles-cantidad">

                        <span>Cantidad:</span>

                        <button
                            type="button"
                            class="btnCantidad"
                            data-accion="disminuir"
                            data-indice="${indice}">
                            −
                        </button>

                        <span class="cantidad-carrito">
                            ${producto.cantidad}
                        </span>

                        <button
                            type="button"
                            class="btnCantidad"
                            data-accion="aumentar"
                            data-indice="${indice}">
                            +
                        </button>

                    </div>

                </div>

                <div class="acciones-carrito">

                    <p class="subtotal-carrito">
                        $${subtotal.toLocaleString("es-AR")}
                    </p>

                    <button
                        type="button"
                        class="btnEliminar"
                        data-accion="eliminar"
                        data-indice="${indice}">
                        Eliminar
                    </button>

                </div>

            </article>
        `;

    });

    // MOSTRAR MENSAJE CUANDO EL CARRITO ESTÁ VACÍO
    if (carrito.length === 0) {

        contenido = `
            <div class="carrito-vacio">

                <span class="icono-carrito-vacio">🛒</span>

                <h2>Tu carrito está vacío</h2>

            </div>
        `;

    } else {

        // MOSTRAR TOTAL DE LA COMPRA
        contenido += `
            <div class="resumen-carrito">

                <div class="detalle-total">

                    <span>Total de la compra</span>

                    <h2>
                        $${total.toLocaleString("es-AR")}
                    </h2>

                </div>

            </div>
        `;

    }

    contenedorCarrito.innerHTML = contenido;

}

// GUARDAR LOS CAMBIOS EN EL ALMACENAMIENTO
function guardarCarrito() {

    localStorage.setItem(claveCarrito, JSON.stringify(carrito));

}

// MODIFICAR CANTIDADES Y ELIMINAR PRODUCTOS
if (contenedorCarrito) {

    contenedorCarrito.addEventListener("click", function(evento) {

        const boton = evento.target.closest("button[data-accion]");

        if (!boton) {
            return;
        }

        const indice = Number(boton.dataset.indice);
        const accion = boton.dataset.accion;

        if (!Number.isInteger(indice) || !carrito[indice]) {
            return;
        }

        if (accion === "aumentar") {

            carrito[indice].cantidad++;

        }

        if (accion === "disminuir") {

            if (carrito[indice].cantidad > 1) {
                carrito[indice].cantidad--;
            }

        }

        if (accion === "eliminar") {

            carrito.splice(indice, 1);

        }

        guardarCarrito();

        mostrarCarrito();

    });

}

// INICIAR EL CARRITO
mostrarCarrito();
