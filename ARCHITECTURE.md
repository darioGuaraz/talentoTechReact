# 🏗️ Arquitectura del Proyecto

## Visión General

WinerWines es una aplicación de e-commerce **Single Page Application (SPA)** construida con React y React Router. La arquitectura es modular, escalable y sigue patrones de React modernos.

---

## 🎯 Principios Arquitectónicos

### 1. **Component-Based Architecture**

- Componentes pequeños, reutilizables y con responsabilidad única
- Estructura jerárquica clara
- Props para comunicación entre componentes

### 2. **Single Page Application (SPA)**

- Navegación sin recarga de página
- Router dinámico con React Router
- Mejor experiencia de usuario

### 3. **Mobile-First Design**

- Diseño responsivo comenzando en móvil
- Media queries para adaptar a dispositivos más grandes
- Menú hamburguesa para pantallas pequeñas

### 4. **State Management Local**

- useState para estado local de componentes
- Props para pasaje de datos
- Callbacks para comunicación bidireccional

---

## 📦 Estructura de Capas

```
┌─────────────────────────────────────────────┐
│          CAPA DE PRESENTACIÓN                │
│  (Componentes React - JSX + CSS)            │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│       CAPA DE LÓGICA DE APLICACIÓN           │
│  (Hooks, State, Event Handlers)             │
└──────────────────────┬──────────────────────┘
                       │
┌──────────────────────▼──────────────────────┐
│        CAPA DE DATOS / SERVICIOS             │
│  (JSON, APIs, Integración WhatsApp)         │
└─────────────────────────────────────────────┘
```

---

## 🔗 Diagrama de Componentes

```
App (BrowserRouter)
├── Navbar (Global)
│   └── Links (React Router)
├── WhatsAppBubble (Global)
└── Routes
    ├── Home (Page)
    │   ├── Header (Componente)
    │   └── CartManager (Componente)
    │       ├── Main (Muestra productos)
    │       └── Cart (Muestra carrito)
    ├── About (Page)
    ├── Testify (Page)
    └── Contact (Page)
```

---

## 🔄 Flujo de Datos

### Unidireccional (One-way Data Flow)

```
┌────────────────────┐
│  Componente Padre  │
│  (State)           │
└─────────┬──────────┘
          │
          ├─ Props ──────────────────────┐
          │                              │
          ↓                              ↓
    ┌──────────────┐           ┌──────────────┐
    │ Hijo A       │           │ Hijo B       │
    │ (Props)      │           │ (Props)      │
    └──────────────┘           └──────────────┘
          │                              │
          └──────────┬───────────────────┘
                     │
          Callback (HandleChange)
                     │
                     ↓
          ┌────────────────────┐
          │  Componente Padre  │
          │  setEstado()       │
          └────────────────────┘
```

### Ejemplo en CartManager

```
CartManager (Estado: cartItems)
    ↓ Props
    ├── Main (muestra productos)
    │   └── onClick → addToCart (callback)
    │       ↑
    │       └── Actualiza: cartItems
    │
    └── Cart (muestra carrito)
        └── onClick → removeSelected (callback)
            ↑
            └── Actualiza: cartItems
```

---

## 🎨 Estructura CSS

### Enfoque: Componentes con Estilo Local

```
CartManager.jsx ──┬─→ ./cart/cart.css
                  └─→ ./main/main.css

About.jsx ───────→ ./about/about.css

Header.jsx ──────→ ./header/header.css
```

### Prioridad CSS

```
1. Estilos globales (index.css, App.css)
2. Estilos de componentes (component.css)
3. Estilos inline (último recurso)
```

---

## 🔐 Seguridad

### CORS y Externa

```jsx
// ✅ WhatsApp Web API
const url = `https://api.whatsapp.com/send?phone=...`;
window.open(url, "_blank");

// ✅ Protección de enlaces externos
<a href="url" target="_blank" rel="noopener noreferrer">
  {/* rel="noopener noreferrer" previene ataques */}
</a>;
```

### localStorage (Si se implementa)

```jsx
// Para carrito persistente
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const loadCart = () => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
};
```

---

## 📊 Escalabilidad

### Fase Actual (MVP)

- ✅ Carrito de compras básico
- ✅ 4 páginas (Home, About, Testify, Contact)
- ✅ Navegación con React Router
- ✅ Integración WhatsApp

### Fase 2 (Mejoras)

- ⏳ Context API para estado global
- ⏳ Filtros y búsqueda de productos
- ⏳ Sistema de autenticación
- ⏳ Carrito persistente (localStorage)

### Fase 3 (Evolución)

- ⏳ Backend API (Node.js/Express)
- ⏳ Base de datos (MongoDB/PostgreSQL)
- ⏳ Sistema de pagos (Stripe/MercadoPago)
- ⏳ Panel administrativo
- ⏳ Órdenes y tracking

---

## 🔄 Patrones de Diseño Utilizados

### 1. **Container / Presentational Pattern**

```jsx
// Container (Lógica)
const CartManager = () => {
  const [cartItems, setCartItems] = useState([]);
  // Lógica...
  return <CartComponent items={cartItems} />;
};

// Presentational (UI)
const CartComponent = ({ items }) => {
  return <div>{items.map(...)}</div>;
};
```

### 2. **Higher Order Component (HOC) - Potencial**

```jsx
// Para futuro: Componentes con datos
const withData = (WrappedComponent) => {
  return () => {
    const [data, setData] = useState([]);
    // Cargar datos
    return <WrappedComponent data={data} />;
  };
};
```

### 3. **Render Props - Potencial**

```jsx
// Para futuro: Lógica reutilizable
<DataFetcher query="/api/products">
  {(data) => <ProductList products={data} />}
</DataFetcher>
```

---

## 🔌 Integraciones Externas

### WhatsApp Web API

```
Cliente → Click "Comprar"
    ↓
Genera URL con número y mensaje
    ↓
https://api.whatsapp.com/send?phone=...&text=...
    ↓
Abre en navegador (nueva pestaña)
    ↓
WhatsApp Web / App en dispositivo
```

### Datos de Productos

```
public/data/menu.json
    ↓ (fetch)
CartManager.jsx
    ↓ (useState)
Main.jsx renderiza productos
```

---

## 📈 Rendimiento

### Optimizaciones Implementadas

- ✅ Code splitting automático con Vite
- ✅ Lazy loading de rutas (React Router)
- ✅ CSS local por componente
- ✅ Imágenes en formato moderno

### Mejoras Futuras

- ⏳ React.memo para componentes
- ⏳ useMemo para cálculos costosos
- ⏳ useCallback para callbacks optimizados
- ⏳ Compresión de imágenes
- ⏳ Caching estratégico

---

## 🧪 Testing

### Estructura Sugerida

```
src/
├── components/
├── pages/
├── __tests__/
│   ├── components/
│   │   └── Navbar.test.jsx
│   └── pages/
│       └── Home.test.jsx
```

### Ejemplo de Test

```jsx
import { render, screen } from "@testing-library/react";
import Navbar from "../components/navbar/Navbar";

describe("Navbar", () => {
  test("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
```

---

## 🚀 Pipeline CI/CD

### GitHub Actions (Sugerido)

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run lint
      - run: npm run build
```

---

## 📋 Decisiones Arquitectónicas

| Decisión        | Razón                              | Alternativa                 |
| --------------- | ---------------------------------- | --------------------------- |
| React 19        | Última versión, mejor rendimiento  | Vue, Angular                |
| React Router v7 | Estándar de facto para SPA         | Tanstack Router             |
| CSS local       | Simplicidad, sin dependencias      | Tailwind, styled-components |
| useState        | Estado simple, suficiente para MVP | Redux, Zustand              |
| Vite            | Rápido, moderno, desarrollo ágil   | Webpack, Parcel             |

---

## 🔐 Control de Versiones

### Branch Strategy

```
main (producción)
  │
  └─ develop (desarrollo)
      │
      ├─ feature/carrito
      ├─ feature/nuevo-componente
      └─ bugfix/problema
```

### Commits Semánticos

```
feat:  Nuevas características
fix:   Corrección de bugs
docs:  Cambios en documentación
style: Cambios de formato
refactor: Cambios sin función nueva
test:  Agregar/actualizar tests
chore: Cambios en build/dependencias
```

---

## 📚 Referencias de Arquitectura

- [React Architecture Best Practices](https://react.dev/learn)
- [Component Design Patterns](https://www.patterns.dev/posts/component-types/)
- [Software Architecture Patterns](https://www.oreilly.com/library/view/software-architecture-patterns/)
- [12 Factor App](https://12factor.net/)

---

**Última actualización**: 29 de Noviembre, 2025
**Mantenedor**: Dario Guaraz
