# 🚀 Guía Rápida para Desarrolladores

## 📖 Quick Start

### 1. Iniciar el Proyecto

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`

### 2. Compilar para Producción

```bash
npm run build
npm run preview
```

### 3. Verificar Código

```bash
npm run lint
```

---

## 📁 Dónde Encontrar Qué

| Necesidad            | Ubicación                  | Archivo                    |
| -------------------- | -------------------------- | -------------------------- |
| Agregar nueva página | `src/assets/pages/`        | `NuevaPage.jsx`            |
| Agregar componente   | `src/assets/components/`   | `Nuevo.jsx`                |
| Agregar ruta         | `src/App.jsx`              | `<Route path="..." ... />` |
| Modificar estilos    | `src/assets/components/*/` | `*.css`                    |
| Agregar productos    | `src/assets/data/`         | `menu.json`                |
| Imágenes/videos      | `public/img/`              | `*.jpg, *.mp4`             |
| Estilos globales     | `src/`                     | `App.css`, `index.css`     |

---

## 🎨 Crear un Nuevo Componente

### Paso 1: Crear archivo

```
src/assets/components/MiComponente/MiComponente.jsx
src/assets/components/MiComponente/micomponente.css
```

### Paso 2: Código base

```jsx
/**
 * MiComponente.jsx - Descripción breve
 */

import "./micomponente.css";

/**
 * Componente MiComponente
 * @returns {JSX.Element}
 */
function MiComponente() {
  return (
    <div className="mi-componente">
      <h2>Mi Componente</h2>
      <p>Contenido aquí</p>
    </div>
  );
}

export default MiComponente;
```

### Paso 3: Importar donde se necesite

```jsx
import MiComponente from "./assets/components/MiComponente/MiComponente";

// Usar
<MiComponente />;
```

---

## 📄 Crear una Nueva Página

### Paso 1: Crear estructura

```
src/assets/pages/nuevapagina/
  ├── NuevaPage.jsx
  └── nuevapagina.css
```

### Paso 2: Código de página

```jsx
/**
 * NuevaPage.jsx - Descripción de la página
 */

import "./nuevapagina.css";

function NuevaPage() {
  return (
    <section className="nueva-page">
      <h1>Nueva Página</h1>
      {/* Contenido */}
    </section>
  );
}

export default NuevaPage;
```

### Paso 3: Agregar ruta en App.jsx

```jsx
import NuevaPage from "./assets/pages/nuevapagina/NuevaPage";

// En <Routes>
<Route path="/nueva-pagina" element={<NuevaPage />} />;
```

### Paso 4: Agregar link en Navbar.jsx

```jsx
<Link to="/nueva-pagina" onClick={closeMenu}>
  Nueva Página
</Link>
```

---

## 🛒 Modificar el Carrito

### Ubicación: `src/assets/components/CartManager.jsx`

### Agregar nueva funcionalidad

```jsx
// Ejemplo: Modificar cantidad
const updateQuantity = (cartId, newQuantity) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.cartId === cartId ? { ...item, cantidad: newQuantity } : item
    )
  );
};
```

### Modificar mensaje de WhatsApp

```jsx
// En handleBuy()
const listaProductos = cartItems
  .map((item) => `• ${item.titulo} - $${item.precio}`)
  .join("%0A");

// Personaliza este mensaje
const mensaje = `Hola, quisiera estos productos:%0A${listaProductos}%0A%0ATotal: $${total}`;
```

---

## 🎯 Modificar Estilos

### Estructura CSS

```
src/assets/components/navbar/navbar.css
src/assets/pages/about/about.css
src/App.css
src/index.css (estilos globales)
```

### Responsive: Breakpoints

```css
/* Móvil (por defecto) */
.mi-clase {
  width: 100%;
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .mi-clase {
    width: 50%;
    font-size: 1.1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .mi-clase {
    width: 30%;
    font-size: 1.2rem;
  }
}
```

---

## 📊 Trabajar con Datos

### Archivo de productos: `src/assets/data/menu.json`

### Estructura

```json
[
  {
    "id": 1,
    "titulo": "Nombre del Producto",
    "descripcion": "Descripción breve",
    "precio": 1000,
    "imagen": "img/nombre.jpg"
  }
]
```

### Cargar productos

```jsx
useEffect(() => {
  fetch("/data/menu.json")
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);
```

---

## 🔗 Crear Enlaces Internos

### SPA Links (Sin reload)

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">Sobre nosotros</Link>
```

### Enlaces externos (normales)

```jsx
<a href="https://ejemplo.com" target="_blank">
  Enlace externo
</a>
```

---

## 🖼️ Agregar Imágenes y Videos

### Ubicación

```
public/img/
  ├── logo.png
  ├── producto.jpg
  └── video.mp4
```

### Usar en componentes

```jsx
// Imagen
<img src="img/logo.png" alt="Logo" />

// Video
<video src="img/video.mp4" autoPlay loop muted />
```

---

## 🐛 Debugging Común

### Problema: Component no renderiza

```jsx
// 1. Verifica que esté importado
import MiComponente from "...";

// 2. Verifica que esté en el JSX
function App() {
  return <MiComponente />; // ← debe estar aquí
}

// 3. Revisa la consola del navegador (F12)
```

### Problema: Estilos no aplican

```jsx
// 1. Verifica que CSS esté importado
import "./micomponente.css";

// 2. Verifica que la clase sea correcta
<div className="mi-componente"> {/* Sin guiones duplicados */}

// 3. Revisa selectores CSS (puede haber mayor especificidad)
.mi-componente { /* principal */
  color: red;
}
.mi-componente .titulo { /* más específico */
  color: blue; /* esto ganará */
}
```

### Problema: Carrito no se actualiza

```jsx
// ✅ USAR: Inmutabilidad
setCartItems((prev) => [...prev, newItem]);

// ❌ NO USAR: Mutación directa
cartItems.push(newItem);
setCartItems(cartItems);
```

### Problema: Enlaces de navegación no funcionan

```jsx
// Verifica que App.jsx esté dentro de <BrowserRouter>
<BrowserRouter>
  <Navbar /> {/* Los Link funcionan aquí */}
  <Routes>...</Routes>
</BrowserRouter>

// Links fuera de BrowserRouter no funcionan
```

---

## 📱 Testing Responsive

### En el navegador

1. Abre DevTools: `F12` o `Ctrl+Shift+I`
2. Click en icono de teléfono (Toggle device toolbar)
3. Selecciona dispositivo o tamaño personalizado

### Breakpoints a probar

- Móvil: 375px
- Tablet: 768px
- Desktop: 1440px

---

## 🚀 Deployment

### En Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

### En Netlify

1. Push código a GitHub
2. Conecta repositorio en netlify.com
3. Configuración automática (detecta Vite)

### En tu propio servidor

```bash
npm run build
# Sube contenido de carpeta 'dist' al servidor
```

---

## 📚 Estructura de Carpetas - Referencia Rápida

```
talentoTechReact/
├── src/
│   ├── assets/
│   │   ├── components/          ← Componentes reutilizables
│   │   │   ├── CartManager.jsx
│   │   │   ├── navbar/
│   │   │   ├── header/
│   │   │   └── ...
│   │   ├── data/                ← Datos (JSON)
│   │   │   └── menu.json
│   │   └── pages/               ← Páginas de aplicación
│   │       ├── home/
│   │       ├── about/
│   │       ├── contact/
│   │       └── testify/
│   ├── App.jsx                  ← Raíz de la app
│   ├── main.jsx                 ← Punto de entrada
│   ├── index.css                ← Estilos globales
│   └── App.css
├── public/
│   └── img/                     ← Imágenes y videos
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎓 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Compilación
npm run build            # Compilar para producción
npm run preview          # Ver versión compilada localmente

# Calidad de código
npm run lint             # Verificar con ESLint

# Instalar nuevos paquetes
npm install nombre-paquete
npm install -D nombre-paquete  # dev dependency

# Ver procesos en puertos
netstat -ano | findstr :5173   # Windows PowerShell

# Limpiar cache
npm cache clean --force
```

---

## 📖 Documentación Relacionada

- [README.md](./README.md) - Documentación general del proyecto
- [TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md) - Flujos y estados
- [CSS_DOCUMENTATION.md](./CSS_DOCUMENTATION.md) - Guía de estilos

---

**Última actualización**: 29 de Noviembre, 2025
**Autor**: Dario Guaraz
