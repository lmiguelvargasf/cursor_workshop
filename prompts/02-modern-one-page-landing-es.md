# Contexto

Eres un Ingeniero Frontend Senior experto y Diseñador UI/UX. Tu tarea es construir una landing page de una sola página, moderna y de alta conversión, usando **React (Next.js App Router)** y **Tailwind CSS**.

A continuación se encuentra la información central de la página. Por favor, usa estos datos para completar el texto y los enlaces.

## Datos del proyecto

- **Marca/Nombre:** [INSERTA NOMBRE / NOMBRE DEL NEGOCIO]
- **Tipo:** [ej., Portafolio personal / startup tecnológica / servicio freelance]
- **Objetivo principal:** [ej., Generar leads / Mostrar proyectos / Vender un servicio]
- **Público objetivo:** [ej., Fundadores tech / negocios locales / reclutadores]
- **CTA principal:** [ej., Agendar una llamada / Ver mi trabajo / Contáctame]
- **Email:** [INSERTA TU EMAIL]
- **WhatsApp:** [INSERTA TU WHATSAPP O ELIMINA ESTO]
- **Enlaces sociales:** [INSERTA LINKEDIN / X / INSTAGRAM]

---

## 1. Arquitectura y estado global

En lugar de escribir los datos de forma rígida (hardcode) en los componentes, **primero crea un archivo `constants/content.ts`**.
Almacena todos los datos del proyecto, textos y enlaces en este archivo. Cada componente debe importar su texto y enlaces desde este objeto de configuración para que pueda actualizar mi sitio fácilmente más adelante en un solo lugar. Agrega comentarios como `// ACTUALIZA TU INFO AQUÍ`.

## 2. Stack tecnológico y sistema de diseño

- **Framework:** Next.js (App Router) y Tailwind CSS.
- **Íconos:** Usa `lucide-react`.
- **Animaciones:** Usa `framer-motion` para animaciones de entrada sutiles (ej., fade up al hacer scroll).
- **Tipografía:** Sans-serif moderna y limpia (Inter, Geist o similar).
- **Estética:** Limpia, con mucho espacio en blanco, estilo "SaaS" o "portafolio premium". Usa una paleta de colores refinada (grises/zinc sutiles para fondos, y un color de alto contraste para los botones principales).

## 3. Requisitos de las secciones

Construye la página con los siguientes 5 componentes modulares en este orden exacto:

### 1. Encabezado y navegación

- Encabezado fijo (sticky) con efecto glassmorphism (`backdrop-blur`).
- Lado izquierdo: marca/nombre.
- Lado derecho: botón de CTA principal.

### 2. Sección hero

- Titular `H1` grande e impactante (usa un degradado sutil en palabras clave).
- Un subtítulo persuasivo que explique la propuesta de valor.
- Dos botones: CTA principal (fondo sólido, efecto de escala al pasar el cursor) y un CTA secundario (contorno o ghost).
- Asegúrate de que el diseño esté visualmente equilibrado, ya sea centrado o en pantalla dividida.

### 3. Acerca de / misión

- Una sección simple y limpia que explique quién soy o qué hace el proyecto.
- Evita los muros de texto. Usa un diseño de dos columnas o un bloque de texto estrecho y muy legible.

### 4. Servicios / cuadrícula de valor

- Una cuadrícula de tarjetas o estilo "Bento-box" de 3 columnas.
- Cada tarjeta debe incluir: un ícono de `lucide-react`, un título en negrita y una breve descripción del beneficio/servicio.
- Agrega un resaltado de borde sutil o un efecto de elevación al pasar el cursor (hover).

### 5. CTA final y pie de página

- Una franja de alto contraste (ej., fondo oscuro) para romper el scroll y dar un último empuje hacia el CTA principal.
- Un pie de página limpio que contenga: email, enlace de WhatsApp, íconos sociales y un aviso de copyright.

## 4. Reglas técnicas

- **Diseño responsivo:** El diseño debe ser impecable en móviles (`px-4`, columnas apiladas) y escritorio (`max-w-7xl`, `md:grid-cols-3`).
- **Código limpio:** Separa las secciones en sus propios componentes funcionales dentro de una carpeta `components/`.
- **Texto de relleno:** NO uses "Lorem Ipsum". Genera texto de relleno realista y profesional basado en el "Tipo" y el "Público objetivo" proporcionados arriba.

## 5. Instrucciones de ejecución

- **Cero suposiciones:** Si alguna de las instrucciones anteriores es ambigua, si falta información crucial o si hay dependencias conflictivas, **DETENTE y hazme las preguntas necesarias** antes de empezar a generar código o planificar la estructura.
