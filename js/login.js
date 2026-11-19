
// INICIO DE SESIÓN

const formularioLogin = document.getElementById("formLogin");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const correo = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;

        const usuarios = JSON.parse(localStorage.getItem("usuariosFerreMundo")) || [];

        const usuarioEncontrado = usuarios.find(function(usuario) {
            return usuario.email === correo && usuario.password === password;
        });

        if (usuarioEncontrado) {

            sessionStorage.setItem("logueado", "true");
            sessionStorage.setItem("usuario", usuarioEncontrado.email);

            window.location.href = "./index.html";

        } else {

            alert("El correo electrónico o la contraseña son incorrectos.");

        }

    });

}


// REGISTRO DE USUARIOS

const formularioRegistro = document.getElementById("formRegistro");

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const correo = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const usuarios = JSON.parse(localStorage.getItem("usuariosFerreMundo")) || [];

        const correoRegistrado = usuarios.find(function(usuario) {
            return usuario.email === correo;
        });

        if (correoRegistrado) {

            alert("Este correo electrónico ya se encuentra registrado.");

        } else {

            const nuevoUsuario = {
                nombre: nombre,
                apellido: apellido,
                email: correo,
                password: password,
                fechaNacimiento: fechaNacimiento
            };

            usuarios.push(nuevoUsuario);

            localStorage.setItem("usuariosFerreMundo", JSON.stringify(usuarios));

            alert("¡Tu cuenta fue creada correctamente! Ahora podés iniciar sesión.");

            window.location.href = "./login.html";

        }

    });

}