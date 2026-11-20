
// MOSTRAR PRODUCTOS EN LAS DIFERENTES PAGINAS

productosCargados.then(function(productos) {

    const contenedorProductos = document.getElementById("productos");

    if (!contenedorProductos) {
        return;
    }

    const categoria = contenedorProductos.dataset.categoria;

    let productosMostrar = productos;

    // MOSTRAR 3 PRODUCTOS POR CATEGORIA EN INICIO

    if (categoria === "inicio") {

        const categorias = [
            "ferreteria",
            "herramientas",
            "materiales",
            "seguridad"
        ];

        productosMostrar = [];

        categorias.forEach(function(nombreCategoria) {

            const productosCategoria = productos.filter(function(producto) {
                return producto.categoria === nombreCategoria;
            });

            productosMostrar = productosMostrar.concat(
                productosCategoria.slice(0, 3)
            );

        });

    } else if (categoria) {

        // FILTRAR PRODUCTOS SEGUN LA CATEGORIA

        productosMostrar = productos.filter(function(producto) {
            return producto.categoria === categoria;
        });

    }

    // GUARDAR LAS CANTIDADES SELECCIONADAS

    let cantidadesSeleccionadas = {};

    // MOSTRAR LAS TARJETAS DE PRODUCTOS

    let contenido = "";

    productosMostrar.forEach(function(producto) {

        const indice = productos.indexOf(producto);

        cantidadesSeleccionadas[indice] = 1;

        contenido += `
            <article class="producto">

                <img
                    src="${producto.imagen}"
                    alt="${producto.titulo}"
                    onerror="this.onerror=null; this.src='../imagenes/FerreMundo.png';"
                >

                <h3>${producto.titulo}</h3>

                <p>${producto.descripcion}</p>

                <p class="precio">
                    $${producto.precio.toLocaleString("es-AR")}
                </p>

                <div class="cantidad">

                    <button
                        type="button"
                        onclick="cambiarCantidad(${indice}, -1)">
                        -
                    </button>

                    <span class="numero" id="cantidad-${indice}">
                        1
                    </span>

                    <button
                        type="button"
                        onclick="cambiarCantidad(${indice}, 1)">
                        +
                    </button>

                </div>

                <button
                    type="button"
                    class="btnAgregar"
                    onclick="agregarAlCarrito(${indice})">
                    Agregar al carrito
                </button>

            </article>
        `;

    });

    if (productosMostrar.length === 0) {
        contenido = "<p>No hay productos disponibles en esta categoría.</p>";
    }

    contenedorProductos.innerHTML = contenido;

    // AUMENTAR O DISMINUIR LA CANTIDAD

    window.cambiarCantidad = function(indice, cambio) {

        if (cantidadesSeleccionadas[indice] === undefined) {
            return;
        }

        cantidadesSeleccionadas[indice] += cambio;

        if (cantidadesSeleccionadas[indice] < 1) {
            cantidadesSeleccionadas[indice] = 1;
        }

        document.getElementById("cantidad-" + indice).textContent =
            cantidadesSeleccionadas[indice];

    };

    // AGREGAR PRODUCTOS AL CARRITO

    window.agregarAlCarrito = function(indice) {

        const usuario = sessionStorage.getItem("usuario");

        if (!usuario) {
            alert("Debés iniciar sesión para comprar.");
            return;
        }

        const productoSeleccionado = productos[indice];

        if (!productoSeleccionado) {
            return;
        }

        const cantidad = cantidadesSeleccionadas[indice] || 1;

        const claveCarrito = "carrito_" + usuario;

        let carrito = JSON.parse(
            localStorage.getItem(claveCarrito)
        ) || [];

        const productoExistente = carrito.find(function(producto) {
            return producto.titulo === productoSeleccionado.titulo;
        });

        if (productoExistente) {

            productoExistente.cantidad += cantidad;

        } else {

            const nuevoProducto = {
                titulo: productoSeleccionado.titulo,
                descripcion: productoSeleccionado.descripcion,
                precio: productoSeleccionado.precio,
                imagen: productoSeleccionado.imagen,
                cantidad: cantidad
            };

            carrito.push(nuevoProducto);

        }

        localStorage.setItem(
            claveCarrito,
            JSON.stringify(carrito)
        );

        alert("¡Producto agregado al carrito!");

        // RESTABLECER LA CANTIDAD A 1

        cantidadesSeleccionadas[indice] = 1;

        document.getElementById("cantidad-" + indice).textContent = 1;

    };

});
