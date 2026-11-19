# FerreMundo

**Proyecto final – Aplicaciones Web I**

**Alumno:** Alexis Junco  
**Institución:** IES 21

## Descripción

FerreMundo es un sitio web de comercio electrónico desarrollado como proyecto académico. Permite explorar productos de ferretería, herramientas, materiales y elementos de seguridad, crear una cuenta de usuario y gestionar un carrito de compras.

## Funcionalidades

- Navegación entre las distintas secciones del sitio.
- Visualización de productos organizados por categorías.
- Registro de usuarios.
- Inicio y cierre de sesión.
- Agregado de productos al carrito.
- Modificación de cantidades.
- Cálculo de subtotales y total de compra.
- Eliminación de productos del carrito.
- Almacenamiento de información mediante `localStorage` y `sessionStorage`.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- DOM
- localStorage y sessionStorage
- Git y GitHub

## Estructura del proyecto

```text
TP4-FerreMundo-Git/
│
├── index.html
├── ferreteria.html
├── herramientas.html
├── materiales.html
├── seguridad.html
├── carrito.html
├── login.html
├── registro.html
│
├── imagenes/
│
├── js/
│   ├── carrito.js
│   ├── categorias.js
│   ├── data.js
│   ├── login.js
│   ├── navbar.js
│   └── productos.js
│
├── styles/
│   └── styles.css
│
└── readme.md
```

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar el archivo `index.html` utilizando la extensión Live Server.
4. Navegar por las diferentes secciones del sitio.

## Almacenamiento y usuarios

El proyecto utiliza `localStorage` para conservar los usuarios registrados y los carritos de compra, y `sessionStorage` para mantener la sesión iniciada.

El registro y el inicio de sesión tienen fines demostrativos y funcionan del lado del cliente. El proyecto no utiliza un servidor ni una base de datos externa.

## Repositorio

[GitHub – TP4 FerreMundo](https://github.com/AlexisJunco2025/TP4-FerreMundo)