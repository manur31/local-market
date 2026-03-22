# Context

Esta carpeta contiene los contextos globales de la aplicación utilizando React Context API.

## 📌 Propósito
Centralizar el manejo del estado global para evitar prop drilling y facilitar el acceso a datos desde cualquier parte de la app.

## 🧠 Contextos en este proyecto
- `AuthContext.jsx` → Maneja autenticación (login, logout, usuario actual)
- `ProductContext.jsx` → Maneja productos (listar, obtener detalles, etc.)
- `OrderContext.jsx` → Maneja órdenes (crear, listar, estado de órdenes)

## ⚙️ Responsabilidades
- Gestionar estado global
- Manejar lógica de negocio
- Conectar con servicios externos (ej: Supabase desde `lib/`)
- Proveer funciones y datos a los componentes

## 📏 Reglas
- No colocar UI aquí
- No mezclar múltiples responsabilidades en un mismo context
- Mantener cada context enfocado en una sola entidad o dominio

## 🔄 Flujo típico
1. El context obtiene o modifica datos (ej: desde Supabase)
2. Guarda esos datos en su estado interno
3. Expone datos y funciones mediante un Provider
4. Los componentes consumen ese estado con `useContext`

## 🧩 Estructura recomendada de un context
Cada archivo debería incluir:
- Creación del contexto (`createContext`)
- Provider (componente que envuelve la app)
- Funciones para manejar el estado
- Exportación de un hook personalizado (opcional pero recomendado)

## 💡 Buenas prácticas
- Crear hooks como `useAuth()`, `useProducts()` para simplificar el uso
- Manejar loading y errores dentro del context
- Evitar lógica innecesaria en los componentes
- Mantener el código limpio y modular

## 🚀 Ejemplo de uso

```jsx
const { products, getProducts } = useProducts();
```

# Este archivo README.md sera eliminado antes de hacer merge a la rama main