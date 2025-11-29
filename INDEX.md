# 📖 Índice de Documentación del Proyecto

Bienvenido a WinerWines! Este archivo te guía hacia toda la documentación disponible.

## 📚 Documentos Disponibles

### 1. **README.md** - Inicio Rápido ⭐

- Descripción general del proyecto
- Instalación y configuración
- Guía de uso básico
- Stack de tecnologías
- Deployment

**Cuándo leer**: Primero que todo, para entender qué es el proyecto.

---

### 2. **DEVELOPER_GUIDE.md** - Guía para Desarrolladores 👨‍💻

- Quick start de desarrollo
- Dónde encontrar cada cosa
- Cómo crear componentes y páginas
- Cómo modificar el carrito
- Cómo cambiar estilos
- Debugging común

**Cuándo leer**: Cuando vayas a trabajar en desarrollo.

---

### 3. **TECHNICAL_DOCUMENTATION.md** - Documentación Técnica 🔧

- Gestión de estado con Hooks
- Flujos de datos principales (4 flujos detallados)
- Patrones de código
- Debugging técnico
- Mejoras futuras recomendadas

**Cuándo leer**: Para entender cómo funciona el código internamente.

---

### 4. **ARCHITECTURE.md** - Arquitectura del Sistema 🏗️

- Visión general arquitectónica
- Estructura de capas
- Diagramas de componentes
- Flujo de datos unidireccional
- Estructura CSS
- Seguridad
- Escalabilidad y fases de crecimiento
- Patrones de diseño utilizados
- Integraciones externas

**Cuándo leer**: Para entender cómo está organizado el proyecto globalmente.

---

### 5. **CSS_DOCUMENTATION.md** - Documentación de Estilos 🎨

- Explicación de cada archivo CSS
- Descripción de clases y selectores
- Puntos de quiebre responsivos
- Colores y variables (para futuro)

**Cuándo leer**: Cuando necesites modificar estilos.

---

## 🗂️ Estructura de Archivos Documentados

### Componentes con Comentarios Inline

```
✅ src/App.jsx                          - Componente raíz con rutas
✅ src/main.jsx                         - Punto de entrada
✅ src/assets/components/navbar/Navbar.jsx  - Navegación responsive
✅ src/assets/components/header/Header.jsx  - Sección hero
✅ src/assets/components/whatsappBuble/WhatsappBubble.jsx - Botón WhatsApp
✅ src/assets/pages/home/Home.jsx       - Página principal
✅ src/assets/pages/about/About.jsx     - Página Quiénes Somos
```

### Archivos de Datos

```
📄 src/assets/data/menu.json           - Productos de la tienda
```

### Archivos CSS Principales

```
🎨 src/assets/components/navbar/navbar.css
🎨 src/assets/pages/about/about.css
🎨 src/App.css
🎨 src/index.css
```

---

## 🎯 Guía de Lectura por Rol

### 👨‍💻 Desarrollador Frontend (Nuevo)

1. Lee: **README.md** (5 min)
2. Lee: **DEVELOPER_GUIDE.md** (15 min)
3. Revisa: Código en `src/App.jsx` con comentarios
4. Consulta: **TECHNICAL_DOCUMENTATION.md** según necesites

### 🏗️ Arquitecto de Software

1. Lee: **ARCHITECTURE.md** (20 min)
2. Lee: **TECHNICAL_DOCUMENTATION.md** (15 min)
3. Revisa: Estructura de carpetas
4. Sugiere mejoras para fases 2 y 3

### 🎨 Diseñador / Especialista CSS

1. Lee: **DEVELOPER_GUIDE.md** sección "Modificar Estilos"
2. Lee: **CSS_DOCUMENTATION.md** (completo)
3. Modifica: Archivos en `src/assets/`

### 👔 Project Manager / Product Owner

1. Lee: **README.md** (Características y Estructura)
2. Consulta: **ARCHITECTURE.md** sección "Escalabilidad"
3. Comprende: Las fases de crecimiento (Fase 1, 2, 3)

---

## 🔍 Buscar Por Tema

### Carrito de Compras

- Cómo funciona → TECHNICAL_DOCUMENTATION.md (Flujo 2)
- Dónde está → DEVELOPER_GUIDE.md (Modificar el Carrito)
- Código detallado → src/assets/components/CartManager.jsx

### Navegación y Rutas

- Visión general → README.md (Estructura del Proyecto)
- Cómo funciona → TECHNICAL_DOCUMENTATION.md (Flujo 3)
- Código → src/App.jsx y src/assets/components/navbar/Navbar.jsx

### Estilos y Responsivo

- Qué existe → CSS_DOCUMENTATION.md
- Cómo modificar → DEVELOPER_GUIDE.md (Modificar Estilos)
- Breakpoints → CSS_DOCUMENTATION.md (Puntos de Quiebre)

### Agregar Nueva Página

- Paso a paso → DEVELOPER_GUIDE.md (Crear una Nueva Página)
- Estructura → README.md (Estructura del Proyecto)

### Integración WhatsApp

- Cómo funciona → TECHNICAL_DOCUMENTATION.md (Flujo 2)
- Código → src/assets/components/whatsappBuble/WhatsappBubble.jsx
- Modificar → DEVELOPER_GUIDE.md (Sección WhatsApp en Carrito)

---

## 💡 Preguntas Frecuentes (FAQ)

### "¿Por dónde empiezo?"

→ Lee **README.md** y luego **DEVELOPER_GUIDE.md**

### "¿Cómo agrego una nueva página?"

→ **DEVELOPER_GUIDE.md** sección "Crear una Nueva Página"

### "¿Cómo modifico los estilos?"

→ **DEVELOPER_GUIDE.md** sección "Modificar Estilos"

### "¿Cómo entiendo los flujos de datos?"

→ **TECHNICAL_DOCUMENTATION.md** - Lea los 4 flujos principales

### "¿Cómo se ve la arquitectura global?"

→ **ARCHITECTURE.md** desde el inicio

### "¿Qué cambios se recomiendan para el futuro?"

→ **ARCHITECTURE.md** sección "Escalabilidad"

### "¿Cómo hago deploy?"

→ **README.md** sección "Deployment"

### "¿Dónde están los productos?"

→ `src/assets/data/menu.json`

---

## 🔄 Flujo de Trabajo Típico

### Tarea: Agregar nueva página "FAQ"

1. **Planificación**

   - Lee: ARCHITECTURE.md (entender estructura)

2. **Desarrollo**

   - Sigue: DEVELOPER_GUIDE.md (pasos exactos)
   - Copia: Estructura de About.jsx como referencia
   - Agrega: Ruta en App.jsx

3. **Estilos**

   - Lee: CSS_DOCUMENTATION.md (para consistencia)
   - Crea: faq.css

4. **Testing**

   - Navega por la app
   - Revisa responsividad
   - Verifica en móvil

5. **Commit**
   - Usa: Commits semánticos (ver ARCHITECTURE.md)
   - Ejemplo: `feat: add FAQ page`

---

## 🚀 Checklist Antes de Hacer Deploy

- ✅ Leer **README.md** sección Deployment
- ✅ Ejecutar `npm run lint`
- ✅ Ejecutar `npm run build`
- ✅ Ejecutar `npm run preview`
- ✅ Probar en navegador localmente
- ✅ Probar en móvil (DevTools)
- ✅ Verificar enlaces funcionen
- ✅ Verificar WhatsApp abre correctamente

---

## 📞 Soporte y Contacto

Para problemas o preguntas:

1. Revisa el **DEVELOPER_GUIDE.md** sección "Debugging Común"
2. Consulta **TECHNICAL_DOCUMENTATION.md**
3. Abre un issue en GitHub
4. Contacta vía WhatsApp (botón flotante)

---

## 📝 Versiones de Documentación

| Documento                  | Versión | Fecha      |
| -------------------------- | ------- | ---------- |
| README.md                  | 1.0     | 29/11/2025 |
| DEVELOPER_GUIDE.md         | 1.0     | 29/11/2025 |
| TECHNICAL_DOCUMENTATION.md | 1.0     | 29/11/2025 |
| ARCHITECTURE.md            | 1.0     | 29/11/2025 |
| CSS_DOCUMENTATION.md       | 1.0     | 29/11/2025 |
| INDEX.md (este archivo)    | 1.0     | 29/11/2025 |

---

## 🎓 Recursos Externos Útiles

- [React Official Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---

## 🔐 Próximos Pasos Recomendados

1. **Corto Plazo (Este Sprint)**

   - Agregar más productos a menu.json
   - Personalizar página About
   - Mejorar estilos con feedback

2. **Mediano Plazo**

   - Implementar carrito persistente con localStorage
   - Agregar página de Términos y Condiciones
   - Mejorar SEO

3. **Largo Plazo**
   - Backend API con Node.js
   - Base de datos
   - Sistema de pagos
   - Panel administrativo

---

**Última actualización**: 29 de Noviembre, 2025
**Mantenedor**: Dario Guaraz
**Estado**: ✅ Documentación Completa v1.0
