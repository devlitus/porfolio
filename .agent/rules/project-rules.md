# Reglas del Proyecto Portfolio Gemini

Estas reglas son para asegurar la consistencia y calidad en el desarrollo del proyecto porfolio-gemini.

## 🛠 Tech Stack
- **Framework Principal:** [Astro](https://astro.build/) (v5.x)
- **Lenguaje:** TypeScript / JavaScript (ESModules)
- **Gestor de Paquetes:** npm / pnpm
- **Estilos:** CSS Vanilla (Modular o Global según corresponda)

## 📂 Estructura de Proyecto
- src/pages/: Rutas de la aplicación.
- src/components/: Componentes reutilizables (.astro).
- src/layouts/: Plantillas base para las páginas.
- public/: Activos estáticos.

## 📝 Convenciones de Código
1. **Componentes Astro:**
   - Mantener la lógica (Script) y la vista (Template) separadas visualmente dentro del archivo.
   - Usar TypeScript en la sección de "frontmatter" (\---\) de los archivos .astro.
   
2. **Estilos:**
   - Preferir estilos con scope (por defecto en Astro) para componentes.
   - Usar variables CSS para temas y colores globales.

3. **SEO & Rendimiento:**
   - Todas las páginas deben tener meta etiquetas básicas (título, descripción).
   - Optimizar imágenes y scripts para carga rápida.

## 🤖 Comportamiento del Asistente
- **Idioma:** Responder en el idioma del usuario (Español por defecto en este contexto).
- **Proactividad:** Sugerir mejoras de accesibilidad y SEO al crear nuevas páginas.
- **Validación:** Verificar que el código compile y siga las guías de Astro antes de finalizar.
