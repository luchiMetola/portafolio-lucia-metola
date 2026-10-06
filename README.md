# Portafolio de Lucía Mestre Metola

Portafolio profesional orientado a desarrollo frontend y diseño UX/UI. Presenta proyectos, experiencia, formación y competencias técnicas mediante una interfaz responsive y accesible.

## Tecnologías

- React
- Vite
- Tailwind CSS
- JavaScript
- Fuentes locales con Fontsource y `@font-face`

## Ejecutar localmente

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Vite mostrará la dirección de desarrollo local, normalmente `http://localhost:5173`.

## Comandos disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la versión de producción
npm run preview  # Previsualiza la compilación de producción
```

## Estructura principal

```text
src/
├── components/       Componentes de cada sección del portafolio
├── data/projects.js  Proyectos, experiencia y competencias
├── App.jsx           Composición principal y animaciones de entrada
├── index.css         Importación de Tailwind y fuente local
└── main.jsx          Punto de entrada de React

public/
├── assets/           Imágenes, favicon y fuentes
└── Lucia-Mestre-Metola-CV.pdf
```

El contenido profesional se actualiza principalmente desde `src/data/projects.js`. La presentación visual se define mediante clases de Tailwind en cada componente.

## Producción

```bash
npm run build
```

La compilación se genera en `dist/`. El proyecto está preparado para desplegarse en Vercel, que publica automáticamente cada actualización enviada a la rama principal de GitHub.

## Autora

**Lucía Mestre Metola**  
Frontend y UX/UI  
[GitHub](https://github.com/luchiMetola) · [LinkedIn](https://www.linkedin.com/in/lucia-metola-b0aa50273)
