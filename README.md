# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🎨 Cómo usar el Design System con Tailwind (Vite + Tailwind v4)

## 🧠 Idea clave

Estamos usando variables en `@theme`, y **Tailwind se encarga de convertirlas en clases automáticamente**.

👉 **NO usamos `var()` en la mayoría de los casos.**

---

## 🎯 Reglas básicas

### ✅ Usa directamente (automático con Tailwind)

| Tipo       | Ejemplo                           |
| ---------- | --------------------------------- |
| Colores    | `bg-primary`, `text-on-surface`   |
| Fondos     | `bg-surface`, `bg-surface-low`    |
| Tipografía | `text-display-md`, `text-body-lg` |
| Fuentes    | `font-display`, `font-body`       |

---

## 🎨 Colores

```jsx
<div className="bg-surface text-on-surface">
  Hola
</div>
```

```jsx
<button className="bg-primary text-white px-6 py-3 rounded-full">
  Comprar
</button>
```

---

## 🔤 Tipografía

```jsx
<h1 className="text-display-md font-display">
  Título
</h1>

<p className="text-body-lg">
  Descripción
</p>
```

---

## 📏 Espaciado (spacing)

👉 Aquí usamos Tailwind normal:

```jsx
<div className="p-6 mt-8">
  Contenido
</div>
```

---

## 🔵 Border Radius

```jsx
<div className="rounded-xl">
  Card
</div>
```

---

## 🌈 Gradientes (caso especial)

👉 Aquí SÍ usamos `var()`:

```jsx
<button className="bg-[var(--gradient-primary)] text-white px-6 py-3 rounded-full">
  Acción
</button>
```

---

## 🚨 Reglas del sistema

* ❌ No usar `border`
* ✅ Usar colores de `surface-*` para separar secciones
* ✅ Usar espacio (`p-6`, `mt-8`) en vez de líneas
* ❌ No usar negro puro (`#000`)
* ✅ Usar `text-on-surface`

---

## 🧠 Resumen rápido

```txt
Colores → bg-primary, bg-surface
Texto → text-on-surface
Tipografía → text-display-md
Spacing → p-6, mt-8
Radius → rounded-xl
Gradientes → bg-[var(--gradient-primary)]
```

---

## 🚀 Ejemplo completo

```jsx
<div className="bg-surface p-12">
  <div className="bg-surface-lowest p-6 rounded-xl">
    
    <h2 className="text-headline-sm font-display">
      Producto local
    </h2>

    <p className="text-body-lg mt-4">
      Descubre lo auténtico.
    </p>

    <button className="bg-primary text-white px-6 py-3 rounded-full mt-6">
      Comprar
    </button>

  </div>
</div>
```

---

## 🔥 Regla final

> Si dudas: usa `surface` para fondos, `primary` para acciones y más espacio en vez de líneas.

