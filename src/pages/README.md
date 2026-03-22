# Pages

Esta carpeta contiene las páginas principales de la aplicación.

## 📌 Propósito
Las páginas representan vistas completas que el usuario puede navegar.

## 🧭 Ejemplos en este proyecto
- `HomePage.jsx` → Página principal
- `ProductDetail.jsx` → Detalle de un producto

## ⚙️ Responsabilidades
- Manejar la lógica principal de la vista
- Consumir datos desde `context/` o `lib/`
- Componer múltiples componentes de `components/`

## 📏 Reglas
- No duplicar lógica que pueda ir en `context/`
- Mantener la estructura clara y legible
- Separar lógica compleja en hooks o contextos

## 🔄 Flujo típico
1. La página obtiene datos (context o API)
2. Procesa la información necesaria
3. Renderiza componentes reutilizables

## 💡 Buenas prácticas
- Mantener las páginas lo más limpias posible
- Delegar UI a `components/`
- Evitar componentes muy grandes


# Este archivo README.md sera eliminado antes de hacer merge a la rama main