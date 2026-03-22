# Components

Esta carpeta contiene componentes reutilizables de la interfaz de usuario (UI).

## 📌 Propósito
Los componentes aquí deben ser:
- Reutilizables
- Independientes de páginas específicas
- Enfocados en UI y lógica simple

## 🧱 Ejemplos en este proyecto
- `Header.jsx` → Barra de navegación principal
- `Footer.jsx` → Pie de página
- `CardProducto.jsx` → Tarjeta para mostrar productos
- `CardBusiness.jsx` → Tarjeta para mostrar negocios

## 📏 Reglas
- No hacer llamadas directas a APIs aquí (usar `lib/` o `context/`)
- Mantenerlos lo más simples posible
- Recibir datos mediante `props`

## 💡 Buenas prácticas
- Dividir componentes grandes en componentes más pequeños
- Mantener estilos organizados (Tailwind o CSS)
- Usar nombres claros y descriptivos


# Este archivo README.md sera eliminado antes de hacer merge a la rama main