# 🚀 Portfolio Personal - Juan Miguel Bogado

Portfolio profesional moderno construido con Astro 5, React 19 y Tailwind CSS 4. Diseñado para mostrar proyectos, habilidades y experiencia de manera atractiva y accesible.

![Astro](https://img.shields.io/badge/Astro-5.15.3-FF5D01?logo=astro)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?logo=typescript)

## ✨ Características

### 🎨 Diseño Moderno
- **Hero section impactante** con gradientes animados y CTAs prominentes
- **Cards de proyectos mejoradas** con tech badges, gradient overlays y múltiples acciones
- **Animaciones suaves** con fade-in on scroll (Intersection Observer API)
- **Diseño responsive** mobile-first con breakpoints estandarizados

### 🌓 Dark Mode
- Toggle de tema con persistencia en localStorage
- Soporte para `prefers-color-scheme`
- Sin flash al cargar (script inline de inicialización)
- Transiciones suaves entre temas
- Todas las secciones optimizadas para dark mode

### 🎯 Sistema de Diseño
- **Paleta de colores** consistente con variables CSS
- **Escala tipográfica** profesional
- **Espaciado** y **border radius** estandarizados
- **Sombras** y **transiciones** definidas

### ♿ Accesibilidad
- Skip-to-content link
- ARIA labels en elementos interactivos
- Contraste WCAG AA
- Focus states visibles
- Soporte para `prefers-reduced-motion`

### 📱 Responsive
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly (mínimo 44x44px)
- Optimizado para todas las pantallas

### 🎬 Animaciones
- Fade-in on scroll automático
- Gradiente de fondo animado en Hero
- Formas decorativas con animación float
- Hover effects sutiles en cards
- Transiciones suaves globales

## 🗂️ Estructura del Proyecto

```text
portfolio-json/
├── src/
│   ├── assets/
│   │   ├── img/          # Imágenes (avatar, logos)
│   │   └── projects/     # Screenshots de proyectos
│   ├── components/
│   │   ├── icons/        # Iconos SVG
│   │   ├── sections/     # Secciones del portfolio
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Education.astro
│   │   │   └── Certificate.astro
│   │   ├── AnimatedSection.astro
│   │   ├── DarkModeToggle.astro
│   │   └── Section.astro
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal
│   ├── pages/
│   │   └── index.astro   # Página principal
│   ├── stores/
│   │   └── theme.js      # Store de nanostores para tema
│   ├── styles/
│   │   └── global.css    # Estilos globales y variables
│   └── utils/
│       └── animations.ts # Utilidades de animación
├── public/
│   ├── documents/        # CV en PDF
│   └── fonts/           # Fuentes personalizadas
├── cv.json              # Datos del portfolio
└── astro.config.mjs
```

## 🛠️ Stack Tecnológico

- **Framework:** Astro 5.15.3
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS 4.1.11
- **Language:** TypeScript 5.5.4
- **State:** Nanostores (dark mode)
- **Animations:** CSS + Intersection Observer API

## 📋 Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview

# Type checking
npm run astro check
```

## 📝 Configuración

### cv.json

Todos los datos del portfolio se centralizan en `cv.json`:

```json
{
  "basics": {
    "name": "Tu Nombre",
    "label": "Tu Título",
    "email": "email@example.com",
    "summary": "Tu descripción...",
    "profiles": [...]
  },
  "projects": [
    {
      "name": "Nombre del Proyecto",
      "description": "Descripción...",
      "highlights": ["react", "nodejs", "postgresql"],
      "url": "https://...",
      "repository-url": "https://github.com/...",
      "image": "proyecto.png"
    }
  ],
  "skills": {...},
  "education": [...],
  "certificates": [...]
}
```

### Personalización de Colores

Edita `src/styles/global.css` para cambiar la paleta:

```css
@theme {
  --color-primary-500: #8b5cf6;  /* Color principal */
  --color-accent-500: #06b6d4;   /* Color de acento */
  /* ... más colores ... */
}
```

## 🎨 Características Destacadas

### Tech Badges con Colores

Los proyectos muestran badges de tecnologías con colores específicos:
- React: `#61dafb`
- Node.js: `#68a063`
- PostgreSQL: `#336791`
- Tailwind: `#06b6d4`
- Y más...

### Animaciones de Scroll

Todas las secciones se animan automáticamente al entrar en viewport:

```astro
<Section title="Mi Sección">
  <!-- El contenido se anima automáticamente -->
</Section>
```

### Dark Mode Automático

El toggle de dark mode se muestra en la esquina superior derecha y persiste la preferencia del usuario.

## 🚀 Deployment

Este proyecto está listo para deployarse en:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

```bash
# Build
npm run build

# La carpeta dist/ contiene los archivos estáticos
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Juan Miguel Bogado**
- LinkedIn: [Juan Miguel Bogado](https://www.linkedin.com/in/juan-miguel-bogado/)
- GitHub: [@JuanmiB](https://github.com/JuanmiB)
- Email: bogadojuanmiguel@gmail.com

---

**Desarrollado con ❤️ usando Astro + React + Tailwind**
