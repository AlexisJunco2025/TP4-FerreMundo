
const formulario = document.getElementById("formLogin");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const correo = document.getElementById("email").value;

        sessionStorage.setItem("logueado", "true");
        sessionStorage.setItem("usuario", correo);

        window.location.href = "./index.html";
    });
}
