/\*\*

- DOCUMENTACIÓN DE COMPONENTES CSS
- ================================
-
- Este documento describe los archivos CSS principales y sus clases
  \*/

/_ ========================================
navbar.css - Estilos de la barra de navegación
======================================== _/

/\*
.navbar

- Contenedor principal del navbar
- Posición sticky para mantenerlo visible al scroll
- Fondo oscuro/transparente
- Z-index alto para estar sobre otros elementos

.navbar-container

- Flex container para logo y enlaces
- Alinea contenido horizontalmente
- Máximo ancho para mantener proporciones

.navbar-logo

- Imagen del logo
- Tamaño responsivo
- Transición suave en hover

.navbar-links

- Contenedor de enlaces de navegación
- Grid o flex según dispositivo
- Transición de altura para menú móvil

.hamburger

- Botón de menú para móviles
- Tres líneas (span.bar)
- Animación de rotación en estado "active"

.hamburger.active

- Estado del menú abierto
- Las líneas se transforman en X o animación personalizada

Media Query (max-width: 912px)

- Muestra hamburger
- Cambia navbar-links a columna vertical
- Ajusta z-index y overflow
  \*/

/_ ========================================
about.css - Estilos de página About
======================================== _/

/\*
.about

- Contenedor principal
- Padding vertical para espaciado
- Fondo claro/gris

.about-container

- Máximo ancho de contenido
- Centrado con margin auto

.about h1

- Título grande centrado
- Color oscuro
- Margin bottom generoso

.about h2

- Subtítulos de secciones
- Border-bottom para separación visual
- Color destacado

.about-intro

- Articulo semántico
- Fondo blanco
- Sombra sutil
- Border-radius para esquinas redondeadas

.about-values

- Sección de valores
- Contiene grid de tarjetas

.values-grid

- CSS Grid responsivo
- 3 columnas en desktop
- 1 columna en móvil
- Gap para espaciado entre tarjetas

.value-card

- Tarjeta individual
- Fondo blanco
- Padding y border-radius
- Transición en hover (transform, box-shadow)

.value-card:hover

- Transform translateY(-5px) - Elevación suave
- Box-shadow mejorada
- Efecto de profundidad

.about-mission, .about-vision, .about-team

- Bloques de contenido similar
- Fondo blanco
- Padding y sombra
- Margin bottom para separación

Media Query (max-width: 768px)

- Ajusta tamaños de fuente
- Cambia grid a columna única
- Reduce padding
  \*/

/_ ========================================
header.css - Estilos del encabezado hero
======================================== _/

/\*
header

- Contenedor principal
- Posición relativa para posicionamiento absoluto interno
- Altura mínima para efecto hero (puede ser 100vh)

.video-header

- Video de fondo
- Width: 100%, Height: 100%
- Object-fit: cover para llenar el contenedor
- Posición absolute
- Z-index bajo para estar detrás del logo

.hero-logo

- Logo superpuesto
- Posición absolute, centered
- Z-index alto para estar encima del video
- Tamaño responsivo
  \*/

/_ ========================================
cart.css - Estilos del carrito
======================================== _/

/\*
.cart-container

- Contenedor principal del carrito

.cart-items

- Lista de items en el carrito
- Puede ser flex o grid

.cart-item

- Fila individual de producto
- Contiene: imagen, nombre, precio, cantidad, botón eliminar

.cart-summary

- Resumen con total
- Botones de acciones (Comprar, Vaciar)
- Fondo destacado
  \*/

/_ ========================================
main.css - Estilos de la sección principal
======================================== _/

/\*
.products-grid

- Grid responsivo de productos
- Ajusta columnas según pantalla

.product-card

- Tarjeta de producto individual
- Contiene: imagen, nombre, descripción, precio, botón

.product-card:hover

- Efectos visuales de interactividad
- Cambio de sombra o escala
  \*/

/_ ========================================
PUNTOS DE QUIEBRE RESPONSIVOS
======================================== _/

/\*
Mobile First (< 768px)

- Una columna
- Menú hamburguesa
- Fuentes más pequeñas
- Padding reducido

Tablet (768px - 1024px)

- Dos columnas
- Menú transicional
- Tamaños medios

Desktop (> 1024px)

- Tres o más columnas
- Menú expandido
- Tamaños óptimos
- Máximo ancho de contenido
  \*/

/_ ========================================
COLORES Y VARIABLES (Recomendado)
======================================== _/

/\*
Para futuro refactor, usar variables CSS:

:root {
--primary-color: #007bff; // Azul
--secondary-color: #6c757d; // Gris
--text-dark: #333; // Texto oscuro
--text-light: #666; // Texto claro
--bg-light: #f5f5f5; // Fondo claro
--bg-white: #ffffff; // Blanco
--border-radius: 8px; // Esquinas
--box-shadow: 0 2px 4px rgba(0,0,0,0.1);
--transition: all 0.3s ease;
}
\*/
