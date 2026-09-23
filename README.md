# Portafolio de Lucía Mestre Metola — React + Vite

Portafolio profesional desarrollado con React y Vite. El contenido está organizado en componentes reutilizables y archivos de datos para que sea sencillo de editar.

## Ejecutar el proyecto

Abrí una terminal dentro de la carpeta y ejecutá:

```bash
npm install
npm run dev
```

Vite mostrará una dirección local, normalmente `http://localhost:5173`.

## Crear la versión de producción

```bash
npm run build
```

El resultado se genera dentro de `dist/`.

## Dónde editar cada parte

- `src/data/projects.js`: proyectos, experiencia y tecnologías.
- `src/components/Hero.jsx`: presentación principal.
- `src/components/Header.jsx`: navegación.
- `src/components/About.jsx`: perfil profesional.
- `src/components/Contact.jsx`: correo, LinkedIn y GitHub.
- `src/index.css`: colores, tipografías, tamaños y adaptación responsive.
- `public/assets/`: imágenes de los proyectos.
- `public/Lucia-Mestre-Metola-CV.pdf`: CV descargable.

## Publicar en Vercel

1. Creá un repositorio en GitHub y subí esta carpeta.
2. Iniciá sesión en Vercel y elegí **Add New > Project**.
3. Importá el repositorio.
4. Vercel detectará Vite automáticamente.
5. Verificá que el comando sea `npm run build` y la carpeta de salida sea `dist`.
6. Seleccioná **Deploy**.

Cada nuevo cambio que subas a la rama principal de GitHub generará una nueva publicación.
