// CARGAR PRODUCTOS DESDE EL ARCHIVO JSON

const productosCargados = fetch("../data/productos.json")
    .then(function(respuesta) {

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los productos.");
        }

        return respuesta.json();

    })
    .catch(function(error) {

        console.error("Error al cargar los productos:", error);

        return [];

    });
