# Documentación Técnica - Gestión de Estado y Flujos

## 📊 Gestión de Estado Global y Local

### State Management con Hooks

La aplicación utiliza **React Hooks** para gestionar el estado local. No se utiliza Redux ni Context API.

#### App.jsx

```jsx
function App() {
  // No hay estado local - Solo renderiza rutas
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppBubble />
      <Routes>...</Routes>
    </BrowserRouter>
  );
}
```

#### CartManager.jsx

```jsx
const CartManager = () => {
  // Estado del carrito
  const [cartItems, setCartItems] = useState([]); // Items agregados
  const [cartVisible, setCartVisible] = useState(false); // Visibilidad del carrito

  // Métodos para manipular estado
  const addToCart = (producto) => {
    /*...*/
  };
  const removeSelected = (ids) => {
    /*...*/
  };
  const clearCart = () => {
    /*...*/
  };
  const handleBuy = () => {
    /*...*/
  };
};
```

#### Navbar.jsx

```jsx
const Navbar = () => {
  // Estados del navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menú abierto/cerrado
  const [isHovered, setIsHovered] = useState(false); // Hover state
  const [isMobile, setIsMobile] = useState(true); // Detección de móvil

  // Effect para resize listener
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 912);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
};
```

---

## 🔄 Flujos de Datos Principales

### Flujo 1: Agregar Producto al Carrito

```
┌─────────────────────┐
│  Página Home        │
│  (Main component)   │
└──────────┬──────────┘
           │
           │ Usuario hace click en "Agregar"
           ↓
┌─────────────────────────────────────┐
│  CartManager                        │
│  - Recibe callback: addToCart()    │
│  - Actualiza estado: cartItems[]   │
│  - setCartVisible(true)             │
└──────────┬──────────────────────────┘
           │
           ↓
┌─────────────────────┐
│  Cart Component     │
│  - Recibe cartItems │
│  - Renderiza items  │
└─────────────────────┘
```

**Código de ejemplo:**

```jsx
// En Main.jsx (renderiza productos)
<button onClick={() => addToCart(producto)}>Agregar al carrito</button>;

// En CartManager.jsx
const addToCart = (producto) => {
  setCartItems((prev) => [
    ...prev,
    { ...producto, cartId: Date.now() + Math.random() },
  ]);
  setCartVisible(true);
};
```

---

### Flujo 2: Compra por WhatsApp

```
┌──────────────────────┐
│  Usuario hace click  │
│  "Realizar Compra"   │
└──────────┬───────────┘
           │
           ↓
┌────────────────────────────────────────┐
│  CartManager.handleBuy()               │
│  1. Obtiene número de WhatsApp         │
│  2. Calcula total                      │
│  3. Genera lista de productos          │
│  4. Codifica mensaje para URL          │
└──────────┬─────────────────────────────┘
           │
           ↓
┌────────────────────────────────────────┐
│  Genera URL WhatsApp Web               │
│ https://api.whatsapp.com/send          │
│  ?phone=5491167907664                  │
│  &text=...mensaje...                   │
└──────────┬─────────────────────────────┘
           │
           ↓
┌────────────────────────────────────────┐
│  Abre en nueva pestaña                 │
│  Usuario ve conversación con pedido    │
│  Agente responde automáticamente       │
└────────────────────────────────────────┘
```

**Código de ejemplo:**

```jsx
const handleBuy = () => {
  const phoneNumber = "5491167907664";

  // Calcula total
  const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

  // Genera lista de productos
  const listaProductos = cartItems
    .map((item) => `• ${item.titulo} - $${item.precio}`)
    .join("%0A");

  // Construye URL
  const mensaje = `Hola, quisiera estos productos:%0A${listaProductos}%0A%0ATotal: $${total}`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${mensaje}`;

  // Abre en nueva pestaña
  window.open(url, "_blank");
};
```

---

### Flujo 3: Navegación con React Router

```
┌──────────────────┐
│  Usuario click   │
│  en Link         │
└──────────┬───────┘
           │
           │ Link de React Router
           │ (Sin reload de página)
           ↓
┌──────────────────────────────┐
│  App.jsx                     │
│  - Detecta cambio de ruta    │
│  - React Router actualiza    │
│  - Renderiza nuevo componente│
└──────────┬───────────────────┘
           │
           ↓
┌──────────────────────────────┐
│  Nueva página se muestra     │
│  Navbar permanece           │
│  (componente global)         │
└──────────────────────────────┘
```

**Rutas configuradas:**

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/testify" element={<Testify />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

---

### Flujo 4: Toggle Menú Móvil

```
┌─────────────────────┐
│  Usuario click en   │
│  Hamburger Button   │
└──────────┬──────────┘
           │
           ↓
┌──────────────────────────────┐
│  Navbar.toggleMenu()         │
│  1. setIsMenuOpen(!valor)   │
│  2. document.body.overflow   │
│     = "hidden"/"auto"        │
└──────────┬───────────────────┘
           │
           ↓
┌──────────────────────────────┐
│  Menú aparece/desaparece    │
│  CSS: transform/opacity      │
│  Body: previene scroll       │
└──────────────────────────────┘
           │
           │ Usuario click en Link
           ↓
┌──────────────────────────────┐
│  Navbar.closeMenu()          │
│  1. setIsMenuOpen(false)    │
│  2. document.body.overflow   │
│     = "auto"                 │
└──────────────────────────────┘
```

---

## 📋 Productos - Data Flow

### Fuente de Datos: menu.json

```json
[
  {
    "id": 1,
    "titulo": "Vino Malbec",
    "descripcion": "Vino tinto de bodega boutique",
    "precio": 850,
    "imagen": "img/producto1.jpg"
  }
  // ... más productos
]
```

### Carga de Productos en Main.jsx

```jsx
// En Main.jsx (probablemente CartManager o en un Main child)
const [products, setProducts] = useState([]);

useEffect(() => {
  // Carga el JSON de productos
  fetch("/data/menu.json")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.error(err));
}, []);

// Renderiza cada producto
products.map((producto) => (
  <div key={producto.id} className="product-card">
    <img src={producto.imagen} />
    <h3>{producto.titulo}</h3>
    <p>{producto.descripcion}</p>
    <p>${producto.precio}</p>
    <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
  </div>
));
```

---

## 🎯 Patrones de Código

### 1. Spread Operator para Inmutabilidad

```jsx
// ✅ CORRECTO - No muta el estado
const addToCart = (producto) => {
  setCartItems((prev) => [
    ...prev,
    { ...producto, cartId: Date.now() + Math.random() },
  ]);
};

// ❌ INCORRECTO - Muta directamente
const addToCart = (producto) => {
  cartItems.push(producto); // ¡MAL!
  setCartItems(cartItems);
};
```

### 2. Array Filter para Eliminar Items

```jsx
// ✅ CORRECTO - Crea nuevo array sin mutación
const removeSelected = (ids) => {
  setCartItems((prev) => prev.filter((item) => !ids.includes(item.cartId)));
};

// ❌ INCORRECTO - Usa splice (muta)
const removeSelected = (ids) => {
  ids.forEach((id) => {
    const index = cartItems.findIndex((item) => item.cartId === id);
    cartItems.splice(index, 1); // ¡MAL!
  });
};
```

### 3. Cleanup en useEffect

```jsx
// ✅ CORRECTO - Limpia el listener
React.useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 912);
  };
  window.addEventListener("resize", handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

// ❌ INCORRECTO - Listeners se duplican
React.useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 912);
  };
  window.addEventListener("resize", handleResize);
  // Sin cleanup - listener se queda registrado
}, []);
```

---

## 🔍 Debugging Tips

### 1. Verificar Estado

```jsx
// Usa console.log para verificar cambios
useEffect(() => {
  console.log("CartItems actualizado:", cartItems);
}, [cartItems]);
```

### 2. React DevTools

- Instala React DevTools en Chrome/Firefox
- Inspecciona componentes y su estado
- Ve los cambios en tiempo real

### 3. Errores Comunes

- **El carrito no se actualiza**: Verifica que estés usando `setCartItems` y no mutando directamente
- **Menú no cierra**: Asegúrate que `closeMenu()` se llama en los Links
- **Estilos no aplican**: Verifica que CSS esté en la misma carpeta o importado correctamente

---

## 🚀 Mejoras Futuras

### 1. Context API para Global State

Si el carrito necesita ser compartido entre múltiples componentes alejados:

```jsx
// Crea CartContext.jsx
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

// Usa en App.jsx
<CartProvider>
  <BrowserRouter>{/* ... */}</BrowserRouter>
</CartProvider>;
```

### 2. Redux para Estado Complejo

Si la aplicación crece significativamente con más lógica de estado

### 3. API Backend

Conectar con servidor en lugar de cargar productos desde JSON

### 4. Persistencia del Carrito

Guardar carrito en localStorage:

```jsx
// Guardar
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

// Cargar al iniciar
useEffect(() => {
  const saved = localStorage.getItem("cart");
  if (saved) setCartItems(JSON.parse(saved));
}, []);
```

---

## 📚 Referencias

- [React Hooks Docs](https://react.dev/reference/react)
- [React Router Docs](https://reactrouter.com/en/main)
- [Understanding State](https://react.dev/learn/state-a-components-memory)
- [Immutability in React](https://react.dev/learn/updating-state-without-mutation)
