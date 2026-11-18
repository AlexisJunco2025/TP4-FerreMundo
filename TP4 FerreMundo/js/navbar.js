
const paginas = [
    { titulo: "Inicio", direccion: "./index.html" },
    { titulo: "Ferretería", direccion: "./ferreteria.html" },
    { titulo: "Herramientas", direccion: "./herramientas.html" },
    { titulo: "Materiales", direccion: "./materiales.html" },
    { titulo: "Seguridad", direccion: "./seguridad.html" }
];

const contenedorNavbar = document.getElementById("navbar");

if (contenedorNavbar) {

    // Verifica si el usuario inició sesión.
    if (sessionStorage.getItem("logueado") !== "true") {
        window.location.href = "./login.html";
    }

    let contenidoNavbar = `
        <nav class="navbar">
            <a href="./index.html" class="logo">
                <img src="./imagenes/FerreMundo.png" alt="Logo FerreMundo">
                FerreMundo
            </a>

            <ul class="menu">
    `;

    paginas.forEach(function(pagina) {
        contenidoNavbar += `
            <li>
                <a href="${pagina.direccion}">
                    ${pagina.titulo}
                </a>
            </li>
        `;
    });

    const usuario = sessionStorage.getItem("usuario");

    contenidoNavbar += `
            </ul>

            <p class="usuario-navbar">
                Usuario: ${usuario}
            </p>

            <a href="./carrito.html" class="carrito-navbar" title="Ver carrito">
                🛒
            </a>

            <button type="button" id="btnCerrarSesion">
                Cerrar sesión
            </button>
        </nav>
    `;

    contenedorNavbar.innerHTML = contenidoNavbar;

    const botonCerrarSesion =
        document.getElementById("btnCerrarSesion");

    botonCerrarSesion.addEventListener("click", function() {
        sessionStorage.removeItem("logueado");
        sessionStorage.removeItem("usuario");

        window.location.href = "./login.html";
    });
}
