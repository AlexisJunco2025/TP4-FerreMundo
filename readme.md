# FerreMundo

**Proyecto final – Aplicaciones Web I**  
**Alumno:** Alexis Junco  
**Institución:** IES Siglo 21

## Descripción

FerreMundo es un sitio web de comercio electrónico de demostración orientado a productos de ferretería, herramientas, materiales y elementos de seguridad. Permite recorrer el catálogo, registrarse, iniciar sesión y administrar un carrito de compras.

## Funcionalidades

- Navegación entre Inicio y las cuatro categorías.
- Carga de productos desde `data/productos.json` mediante `fetch`.
- Registro, inicio y cierre de sesión.
- Selección de cantidades desde las tarjetas de productos.
- Agregado de productos al carrito.
- Modificación de cantidades, cálculo de subtotales y total.
- Eliminación de productos del carrito.
- Almacenamiento de usuarios y carritos mediante `localStorage`.
- Almacenamiento de la sesión mediante `sessionStorage`.

## Tecnologías utilizadas

- HTML5 y CSS3.
- JavaScript y DOM.
- JSON y Fetch API.
- `localStorage` y `sessionStorage`.
- Git, GitHub y GitHub Pages.

## Estructura del proyecto

```text
TP4-FerreMundo-Git/
├── data/
│   └── productos.json
├── docs/
│   └── Documentacion-Final-FerreMundo.pdf
├── imagenes/
├── js/
│   ├── carrito.js
│   ├── categorias.js
│   ├── data.js
│   ├── login.js
│   ├── navbar.js
│   └── productos.js
├── paginas/
│   ├── index.html
│   ├── ferreteria.html
│   ├── herramientas.html
│   ├── materiales.html
│   ├── seguridad.html
│   ├── carrito.html
│   ├── login.html
│   └── registro.html
├── styles/
│   └── styles.css
├── video/
│   └── FerreMundo-Explicacion.mp4
└── readme.md
```

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar `paginas/login.html` mediante Live Server.
4. Registrarse o iniciar sesión para acceder a la tienda.
5. Recorrer las categorías y probar el carrito.

Se recomienda utilizar Live Server porque los productos se cargan mediante `fetch` desde un archivo JSON.

## Mejora significativa

Se agregaron controles para aumentar o disminuir la cantidad de unidades directamente en cada tarjeta antes de agregar el producto al carrito. Además, cada usuario cuenta con su propio carrito almacenado en `localStorage`.

## Roadmap

1. Estructura de páginas y carpetas.
2. Diseño visual con CSS.
3. Navegación y organización de categorías.
4. Registro, inicio de sesión, carga JSON con Fetch API y carrito.
5. Pruebas y correcciones.
6. Publicación y documentación final.

## Publicación

- **Sitio web:** https://alexisjunco2025.github.io/TP4-FerreMundo/
- **Repositorio:** https://github.com/AlexisJunco2025/TP4-FerreMundo
- **Video:** https://github.com/AlexisJunco2025/TP4-FerreMundo/tree/main/video

## Alcance y limitaciones

El proyecto funciona del lado del navegador y utiliza `localStorage` y `sessionStorage`. No cuenta con servidor propio ni base de datos externa, no procesa pagos reales y su autenticación es demostrativa.
