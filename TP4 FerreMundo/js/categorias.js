
const categorias = [
    {
        titulo: "Ferretería",
        descripcion: "Productos para reparación y mantenimiento.",
        imagen: "./imagenes/ferreteria.jpg",
        direccion: "./ferreteria.html"
    },
    {
        titulo: "Herramientas",
        descripcion: "Herramientas para todos tus proyectos.",
        imagen: "./imagenes/herramientas.jpg",
        direccion: "./herramientas.html"
    },
    {
        titulo: "Materiales",
        descripcion: "Materiales para construcción y reparación.",
        imagen: "./imagenes/materiales.jpg",
        direccion: "./materiales.html"
    },
    {
        titulo: "Seguridad",
        descripcion: "Elementos de protección personal.",
        imagen: "./imagenes/seguridad.avif",
        direccion: "./seguridad.html"
    }
];

const contenedorCategorias = document.getElementById("categorias");

if (contenedorCategorias) {
    let contenido = "";

    categorias.forEach(function(categoria) {
        contenido += `
            <article class="producto tarjeta-categoria">
                <img
                    src="${categoria.imagen}"
                    alt="${categoria.titulo}"
                >

                <h3>${categoria.titulo}</h3>

                <p>${categoria.descripcion}</p>

                <a class="boton-categoria"
                   href="${categoria.direccion}">
                    Ver productos
                </a>
            </article>
        `;
    });

    contenedorCategorias.innerHTML = contenido;
}
