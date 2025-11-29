# WinerWines 🍷

Plataforma de e-commerce especializada en vinos boutique argentinos. Conectamos a clientes con pequeñas bodegas, proyectos artesanales e ingenieros apasionados por la viticultura.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Documentación de Componentes](#documentación-de-componentes)
- [Contribuir](#contribuir)

---

## ✨ Características

- **🛒 Carrito de Compras**: Gestión completa de productos con agregar/eliminar items
- **📱 Responsive Design**: Interfaz adaptada para móvil, tablet y desktop
- **🧭 Navegación SPA**: Enrutamiento dinámico con React Router Dom
- **💬 Integración WhatsApp**: Botón flotante y compra directa vía WhatsApp
- **📺 Videos Hero**: Secciones con videos autoreproducibles
- **🎨 Interfaz Moderna**: Diseño limpio y profesional

---

## 📁 Estructura del Proyecto

```
talentoTechReact/
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── CartManager.jsx          # Gestor del carrito de compras
│   │   │   ├── header/
│   │   │   │   ├── Header.jsx           # Sección de encabezado
│   │   │   │   └── header.css
│   │   │   ├── navbar/
│   │   │   │   ├── Navbar.jsx           # Barra de navegación responsive
│   │   │   │   └── navbar.css
│   │   │   ├── cart/
│   │   │   │   ├── Cart.jsx             # Componente visual del carrito
│   │   │   │   └── cart.css
│   │   │   ├── main/
│   │   │   │   ├── Main.jsx
│   │   │   │   └── main.css
│   │   │   ├── whatsappBuble/
│   │   │   │   ├── WhatsAppBubble.jsx   # Botón flotante WhatsApp
│   │   │   │   └── whatsAppBubble.css
│   │   ├── data/
│   │   │   └── menu.json                # Datos de productos
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   └── Home.jsx             # Página principal
│   │   │   ├── about/
│   │   │   │   ├── About.jsx            # Página "Quiénes Somos"
│   │   │   │   └── about.css
│   │   │   ├── testify/
│   │   │   │   ├── Testify.jsx          # Página de testimonios
│   │   │   │   └── testify.css
│   │   │   └── contact/
│   │   │       ├── Contact.jsx          # Página de contacto
│   │   │       └── contact.css
│   ├── App.jsx                          # Componente raíz con rutas
│   ├── App.css
│   ├── main.jsx                         # Punto de entrada
│   └── index.css
├── public/
│   └── img/                             # Imágenes y videos
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Instalación

### Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/darioGuaraz/talentoTechReact.git
cd talentoTechReact
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

4. **Compilar para producción**

```bash
npm run build
```

---

## 💻 Uso

### Navegación Principal

La aplicación tiene 4 rutas principales accesibles desde el navbar:

| Ruta       | Descripción                                         |
| ---------- | --------------------------------------------------- |
| `/`        | Página principal con Header y catálogo de productos |
| `/about`   | Información sobre WinerWines, misión y valores      |
| `/testify` | Testimonios de clientes                             |
| `/contact` | Formulario de contacto                              |

### Carrito de Compras

1. Explora los vinos en la página principal
2. Haz clic en "Agregar al carrito"
3. Visualiza tu carrito en tiempo real
4. Presiona "Comprar" para ser redirigido a WhatsApp con tu pedido automático

---

## 🛠️ Tecnologías

### Frontend

- **React 19.1** - Librería UI
- **React Router DOM 7.9** - Enrutamiento SPA
- **Vite 7** - Build tool y dev server
- **CSS3** - Estilos y responsive design

### Herramientas de Desarrollo

- **ESLint** - Linter de código
- **Webpack** - Bundler (usado en envíos)

### Librerías Adicionales

- **SweetAlert2 11.26** - Alertas y notificaciones

---

## 🏗️ Arquitectura

### Flujo de la Aplicación

```
App.jsx (BrowserRouter)
    ↓
    ├── Navbar (Componente Global)
    ├── WhatsAppBubble (Componente Global)
    └── Routes
        ├── Home (Header + CartManager)
        ├── About (Presentación de empresa)
        ├── Testify (Testimonios)
        └── Contact (Formulario contacto)
```

### Patrones Utilizados

1. **SPA (Single Page Application)**: Navegación sin recarga de página
2. **Component-Based**: Componentes reutilizables y modulares
3. **State Management**: useState para estado local
4. **Responsive Design**: Mobile-first con media queries

---

## 📚 Documentación de Componentes

### App.jsx

**Función**: Componente raíz de la aplicación

**Responsabilidades**:

- Configura BrowserRouter para navegación SPA
- Define todas las rutas estáticas
- Renderiza Navbar y WhatsAppBubble globalmente

**Props**: Ninguno

**Rutas**:

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/testify" element={<Testify />} />
<Route path="/contact" element={<Contact />} />
```

---

### Navbar.jsx

**Función**: Barra de navegación principal responsive

**Responsabilidades**:

- Mostrar logo con enlace a Home
- Proporcionar navegación entre páginas
- Manejar menú hamburguesa en móviles (≤912px)
- Controlar overflow del body cuando menú está abierto

**Estados Locales**:

- `isMenuOpen`: Boolean - Controla visibilidad del menú
- `isHovered`: Boolean - Detecta hover en navbar
- `isMobile`: Boolean - Detecta si la pantalla es móvil

**Funciones Principales**:

- `toggleMenu()`: Alterna estado del menú
- `closeMenu()`: Cierra el menú y restaura scroll
- Hook `useEffect`: Detecta cambios de tamaño de ventana

**Características**:

- Links con React Router (no recarga de página)
- Menú dinámico basado en ancho de pantalla
- Prevención de scroll en móvil con menú abierto

---

### Home.jsx

**Función**: Página principal de la aplicación

**Responsabilidades**:

- Mostrar Header (sección destacada)
- Mostrar CartManager (catálogo y carrito)

**Componentes Hijos**:

- `<Header />` - Sección de bienvenida
- `<CartManager />` - Gestor de productos y carrito

---

### About.jsx

**Función**: Página "Quiénes Somos" de la empresa

**Responsabilidades**:

- Presentar información de WinerWines
- Mostrar misión, visión y valores
- Explicar el modelo de funcionamiento

**Secciones**:

1. **Hero Section**: Video de fondo + logo
2. **Introducción**: Descripción general de la empresa
3. **Valores**: Grid de 3 tarjetas (Curaduría, Transparencia, Cultura)
4. **Misión**: Objetivo y propósito de la empresa
5. **Visión**: Aspiraciones futuras
6. **Funcionamiento**: Explicación del proceso de compra

**Componentes Utilizados**:

- Video autoreproducible
- Grid responsivo para tarjetas
- Estructura semántica HTML5

---

### CartManager.jsx

**Función**: Gestor completo del carrito de compras

**Responsabilidades**:

- Cargar y mostrar productos desde menu.json
- Permitir agregar/eliminar items del carrito
- Calcular total de compra
- Integrar con WhatsApp para enviar pedidos

**Estados Locales**:

- `products`: Array - Lista de productos
- `cart`: Array - Productos en el carrito
- `total`: Number - Total de la compra

---

### WhatsAppBubble.jsx

**Función**: Botón flotante de contacto por WhatsApp

**Responsabilidades**:

- Mostrar botón flotante fijo en pantalla
- Abrir conversación de WhatsApp al hacer clic
- Mantener posición fija durante scroll

---

## 🎯 Flujo de Datos

### Carrito de Compras

```
Product Item
    ↓ (Click "Agregar")
CartManager (estado: cart)
    ↓ (Visual)
Cart (muestra items)
    ↓ (Click "Comprar")
WhatsApp Integration
    ↓
Mensaje automático con pedido
```

### Navegación

```
Usuario hace click en Navbar Link
    ↓
Link de React Router (sin recarga)
    ↓
App.jsx renderiza ruta correspondiente
    ↓
Nueva página se muestra
```

---

## 🔧 Configuración

### vite.config.js

Configuración del build tool Vite para desarrollo rápido

### package.json

```json
{
  "scripts": {
    "dev": "vite", // Inicia dev server
    "build": "vite build", // Compila para producción
    "lint": "eslint .", // Verifica código
    "preview": "vite preview" // Previsualiza build
  }
}
```

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho          | Características  |
| ----------- | -------------- | ---------------- |
| Móvil       | < 912px        | Menú hamburguesa |
| Tablet      | 912px - 1024px | Transición       |
| Desktop     | > 1024px       | Menú expandido   |

---

## 🐛 Debugging

### Errores Comunes

**1. Rutas no funcionan**

- Verificar que BrowserRouter envuelva las Routes
- Confirmar que los paths de importación sean correctos

**2. Estilos no aplican**

- Revisar que las clases CSS estén correctamente nombradas
- Verificar media queries para responsive

**3. WhatsApp no abre**

- Confirmar que el número está en formato correcto
- Revisar que la integración esté habilitada

---

## 🚀 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Luego conectar carpeta 'dist' en Netlify
```

### GitHub Pages

```bash
npm run build
# Subir contenido de 'dist' a gh-pages branch
```

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Ver archivo LICENSE para más detalles.

---

## 👥 Autor

**Dario Guaraz**

- GitHub: [@darioGuaraz](https://github.com/darioGuaraz)
- Email: contacto@example.com

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Soporte

Para reportar bugs o hacer sugerencias:

- Abre un Issue en GitHub
- Contacta por WhatsApp al botón flotante

---

## 🎓 Recursos Útiles

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)
- [CSS Grid Guide](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)

---

**Última actualización**: 29 de Noviembre, 2025
**Versión**: 1.0.0
