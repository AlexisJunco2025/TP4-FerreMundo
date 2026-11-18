
const contenedorProductos = document.getElementById("productos");

if (contenedorProductos) {
    const categoria = contenedorProductos.dataset.categoria;

    console.log("Categoría detectada:", categoria);
    console.log("Productos cargados:", productos);
    console.log("Cantidad de productos:", productos.length);

    let productosMostrar = [];

    // PRODUCTOS DESTACADOS EN LA PÁGINA DE INICIO
    if (categoria === "inicio") {
        const nombresCategorias = [
            "ferreteria",
            "herramientas",
            "materiales",
            "seguridad"
        ];

        nombresCategorias.forEach(function(nombreCategoria) {
            const productosCategoria = productos.filter(function(producto) {
                return producto.categoria === nombreCategoria;
            });

            productosMostrar = productosMostrar.concat(
                productosCategoria.slice(0, 2)
            );
        });

    } else {
        // PRODUCTOS DE CADA CATEGORÍA
        productosMostrar = productos.filter(function(producto) {
            return producto.categoria === categoria;
        });
    }

    // ESTABLECER CANTIDAD INICIAL
    productosMostrar.forEach(function(producto) {
        producto.cantidad = 1;
    });

    // MOSTRAR PRODUCTOS EN PANTALLA
    function mostrarProductos() {
        let contenido = "";

        productosMostrar.forEach(function(producto, indice) {
            contenido += `
                <article class="producto">
                    <img src="${producto.imagen}" alt="${producto.titulo}">

                    <h3>${producto.titulo}</h3>

                    <p>${producto.descripcion}</p>

                    <p class="precio">
                        $${producto.precio.toLocaleString("es-AR")}
                    </p>

                    <div class="cantidad">
                        <button type="button" class="btnMenos" data-indice="${indice}">-</button>

                        <span class="numero">${producto.cantidad}</span>

                        <button type="button" class="btnMas" data-indice="${indice}">+</button>
                    </div>

                    <button type="button" class="btnAgregar" data-indice="${indice}">
                        Añadir al carrito
                    </button>
                </article>
            `;
        });

        if (productosMostrar.length === 0) {
            contenido = "<p>No hay productos en esta categoría.</p>";
        }

        contenedorProductos.innerHTML = contenido;
    }

    mostrarProductos();

    // CONTROLES DE CANTIDAD Y CARRITO
    contenedorProductos.addEventListener("click", function(evento) {
        const indice = Number(evento.target.dataset.indice);

        // AUMENTAR CANTIDAD
        if (evento.target.classList.contains("btnMas")) {
            productosMostrar[indice].cantidad++;
            mostrarProductos();
        }

        // DISMINUIR CANTIDAD
        if (evento.target.classList.contains("btnMenos")) {
            if (productosMostrar[indice].cantidad > 1) {
                productosMostrar[indice].cantidad--;
                mostrarProductos();
            }
        }

        // AGREGAR PRODUCTO AL CARRITO
        if (evento.target.classList.contains("btnAgregar")) {
            const productoSeleccionado = productosMostrar[indice];

            // Recuperar el carrito guardado
          const usuario = sessionStorage.getItem("usuario");
          const claveCarrito = "carrito_" + usuario;

            let carrito = JSON.parse(localStorage.getItem(claveCarrito)) || [];
            // Buscar si el producto ya existe en el carrito
            const productoExistente = carrito.find(function(producto) {
                return producto.titulo === productoSeleccionado.titulo &&
                       producto.categoria === productoSeleccionado.categoria;
            });

            if (productoExistente) {
                productoExistente.cantidad += productoSeleccionado.cantidad;
            } else {
                carrito.push({
                    titulo: productoSeleccionado.titulo,
                    descripcion: productoSeleccionado.descripcion,
                    precio: productoSeleccionado.precio,
                    imagen: productoSeleccionado.imagen,
                    categoria: productoSeleccionado.categoria,
                    cantidad: productoSeleccionado.cantidad
                });
            }

            // Guardar el carrito actualizado
            localStorage.setItem(claveCarrito, JSON.stringify(carrito));

            alert("Producto agregado al carrito: " + productoSeleccionado.titulo);

            // Restablecer la cantidad seleccionada
            productoSeleccionado.cantidad = 1;

            mostrarProductos();
        }
    });
}
