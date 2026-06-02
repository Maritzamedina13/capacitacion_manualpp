# Ruta del Manual de Prácticas Profesionales ITM

Aplicación web interactiva y **gamificada** para comprender, capítulo por capítulo, el
**Manual de Prácticas Profesionales ITM (MDE 001 · V5)**. Sigue la metodología **OVA**
(Objeto Virtual de Aprendizaje): cada módulo presenta un objetivo, contenido interactivo,
un reto de evaluación y retroalimentación inmediata.

- **6 módulos** OVA, uno por bloque temático del manual.
- **Insignias** desbloqueables (una por módulo) y sistema de **XP**.
- **4 tipos de actividad**: opción múltiple, verdadero/falso, relacionar y ordenar secuencias.
- Umbral de aprobación del **70 %** por módulo (con reintento y repaso).
- **Constancia final** imprimible / exportable a PDF, con nombre, fecha, insignias y folio de verificación.
- El **progreso se guarda** automáticamente en el navegador (`localStorage`).

---

## Cómo ejecutarlo

La app es 100 % estática (HTML + CSS + JavaScript con React vía CDN). No requiere
instalación de dependencias.

### Opción A — Servidor local con Python (recomendado)

Desde la carpeta del proyecto:

```bash
# Python 3
python -m http.server 8000
```

Luego abre en el navegador: <http://localhost:8000/>

> Usar un servidor local (en vez de abrir el archivo directamente) evita problemas de
> carga de los módulos JSX y permite trabajar cómodamente desde **Visual Studio Code**
> (extensión *Live Server* o la terminal integrada).

### Opción B — Abrir el archivo directamente

Abre `index.html` con doble clic. Funciona en la mayoría de navegadores modernos.

---

## Estructura del proyecto

```
.
├── index.html              # Punto de entrada de la aplicación
├── js/
│   ├── styles.css          # Tokens de diseño (paleta institucional, Montserrat) y estilos base
│   ├── content.js          # Contenido OVA de los 6 módulos
│   ├── quizzes.js          # Banco de preguntas por módulo
│   ├── components.jsx      # Componentes compartidos (iconos, insignias, XP, confeti)
│   ├── welcome.jsx         # Pantalla de bienvenida + captura de nombre
│   ├── map.jsx             # Mapa de niveles (desbloqueo secuencial)
│   ├── quiz.jsx            # Motor de quiz (4 tipos de actividad)
│   ├── module.jsx          # Flujo de módulo: intro → contenido → reto → resultado
│   ├── certificate.jsx     # Constancia final imprimible
│   └── app.jsx             # Orquestador + persistencia (localStorage)
└── recursos/
    ├── Manual de Prácticas Profesionales ITM V5.md   # Fuente del contenido
    ├── logo-itm-1.png
    └── logo-itm-2.png
```

---

## Módulos

1. **Fundamentos de las Prácticas** — Introducción y Capítulo I
2. **El Lenguaje de las Prácticas** — Capítulo II (acrónimos y definiciones)
3. **Objetivos y Estructura** — Capítulo III
4. **Modalidades de Práctica** — Capítulo IV
5. **El Proceso Integral** — Capítulo V
6. **Deberes, Derechos y Reglamento** — Capítulos VI–IX

---

## Tecnología

- **React 18** y **Babel Standalone** (cargados desde CDN).
- **Montserrat** (Google Fonts).
- Sin build: los archivos `.jsx` se transpilan en el navegador.

---

## Personalización

- **Logo**: la cabecera y la constancia usan un *wordmark* tipográfico «ITM». Los archivos
  oficiales están en `recursos/`; pueden integrarse reemplazando el componente `ITMMark`
  en `js/components.jsx`.
- **Contenido y preguntas**: se editan en `js/content.js` y `js/quizzes.js`.
- **Colores**: la paleta institucional por facultad está en `js/styles.css` y en
  `js/content.js` (campo `colors` de cada módulo).

---

_Basado en el Manual de Prácticas Profesionales ITM · MDE 001 (V5) · Oficina de Prácticas
Profesionales ITM._
