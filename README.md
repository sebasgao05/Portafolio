# Portafolio

## Documnetacion

### Archivos y Carpetas detro de este proyexto

#### `index.html`

- Este es el archivo principal de la página web. Contiene la estructura HTML que define el contenido y la disposición de la página de inicio del portafolio.

#### `css/`

- Este directorio almacena los archivos de hojas de estilo en cascada (CSS) que se utilizan para dar formato y estilo a la página web.

#### `fonts/`

- Aquí se encuentran las fuentes tipográficas utilizadas en el sitio web, proporcionando estilos de texto personalizados.

#### `images/`

- Este directorio contiene las imágenes utilizadas en la página web, como fotos de proyectos, íconos y otros elementos gráficos.

#### `js/`

- En este directorio se almacenan los archivos JavaScript que añaden interactividad y funcionalidades dinámicas al sitio web.

### `index.html` 

#### Navegación (`nav`)

- Barra de navegación responsiva que permite acceder a las diferentes secciones del portafolio.
- Utiliza anclas (`#id`) para la navegación interna.

#### Secciones

- **Inicio:** Sección de presentación principal (hero section).
- **Sobre Mí:** Información personal y profesional del desarrollador.
- **Proyectos:** Galería o listado de proyectos realizados.
- **Habilidades:** Presentación de habilidades técnicas y competencias.
- **Contacto:** Información o formulario para establecer contacto.

#### Scripts

- Enlaza al archivo principal de JavaScript (`main.js`) para la funcionalidad interactiva del sitio.

### `css/`

#### `css/base.css`

**Función:** Establece los estilos base y la normalización para todo el sitio.

**Incluye:**

- Reset de márgenes, padding y box-sizing.
- Estilos base para elementos HTML (`body`, `a`, `ul`, `li`, `h1-h6`).
- Normalización entre navegadores.
- Configuración de accesibilidad básica.
- Definición de colores y tipografía base.
- Utilidades generales (`clearfix`, `display`, `visibilidad`).

#### `css/fonts.css`

**Función:** Gestiona la carga e implementación de fuentes tipográficas.

**Incluye:**

- Importaciones de fuentes web (Google Fonts, Typekit).
- Definición de fuentes locales con `@font-face`.
- Configuración de pesos y estilos de fuente.
- Definición de familias de fuentes principales y de respaldo.
- Variables de fuentes para uso en todo el sitio.
- Optimización de carga de fuentes.

#### `css/main.css`

**Función:** Contiene los estilos principales y específicos del portafolio.

**Incluye:**

- Estilos de layout y estructura de páginas.
- Estilos para componentes específicos del portafolio.
- Estilos de secciones (`header`, `hero`, `sobre mí`, `proyectos`, `habilidades`, `contacto`).
- Animaciones y transiciones personalizadas.
- Media queries para diseño responsivo.
- Temas y variaciones de color.

#### `css/carousel/`

**Función:** Directorio que almacena hojas de estilo de terceros.

**Incluye:**

- Frameworks CSS (posiblemente Bootstrap, Tailwind, etc.).
- Librerías de animación (`animate.css`, etc.).
- Componentes específicos de terceros.
- `Normalize.css` u otras normalizaciones populares.
- Plugins jQuery o específicos de componentes.

#### `css/font-awesome/`

**Función:** Contiene los archivos de la librería Font Awesome para iconos.

**Incluye:**
- CSS principal de Font Awesome.

- Archivos de fuentes en diferentes formatos (`.woff`, `.woff2`, `.ttf`, `.eot`, `.svg`).
- Clases de utilidad específicas de Font Awesome.
- Variaciones de iconos (sólidos, regulares, marcas).
- Posibles personalizaciones específicas para el proyecto.

#### `css/micons/`

**Función:** Biblioteca de iconos personalizada o específica (Micons).

**Incluye:**
- Archivos de fuentes para los iconos.

- Hoja de estilos para implementación de iconos.
- Posible documentación o guía de uso.
- Clases CSS para diferentes tamaños y variaciones.
- Estilos específicos para animaciones o transiciones de iconos.
- Configuración para implementación de iconos en el portafolio.

### `fonts/`

#### 1. Propósito de la carpeta `fonts/`

- Almacena fuentes personalizadas que no están disponibles de forma nativa en los navegadores.
- Garantiza que la página web se vea igual en todos los dispositivos y navegadores.

#### 2. Tipos de archivos comunes

- **`.ttf` (TrueType Font):** Formato estándar compatible con la mayoría de los navegadores.
- **`.woff` (Web Open Font Format):** Optimizado para la web, con compresión para reducir el tamaño.
- **`.woff2`:** Versión mejorada de WOFF, con mayor compresión y mejor rendimiento.
- **`.eot` (Embedded OpenType):** Usado principalmente para compatibilidad con Internet Explorer (menos común hoy en día).
- **`.svg` (Scalable Vector Graphics):** Usado en versiones antiguas de iOS (raro en proyectos modernos).

#### 3. Estructura típica de la carpeta

- **Archivos de fuentes:** Ejemplo: `Roboto-Regular.ttf`, `OpenSans-Bold.woff2`.
- **Subcarpetas (opcional):** Organización por familias de fuentes o tipos (ej: `fonts/Roboto/`, `fonts/IconFonts/`).
- **Archivo de configuración (opcional):** Un archivo CSS con reglas `@font-face` para cargar las fuentes.

#### 4. Beneficios de usar fuentes personalizadas

- **Consistencia visual:** La página se ve igual en todos los dispositivos.
- **Personalización:** Permite usar tipografías únicas que reflejen la identidad del portafolio.
- **Optimización:** Formatos como WOFF2 reducen el tiempo de carga.

### `images/`

#### 1. Propósito de la carpeta `images/`

- Almacena imágenes utilizadas en el proyecto.
- Incluye fotos personales, capturas de pantalla, logos, íconos y fondos.

#### 2. Contenido típico

- **Fotos personales:** Ejemplo: `profile.jpg`, `banner.jpg`.
- **Capturas de pantalla:** Ejemplo: `project1-screenshot.png`.
- **Logos de tecnologías:** Ejemplo: `react-logo.png`, `nodejs-logo.svg`.
- **Íconos o gráficos:** Ejemplo: `icon-heart.png`, `background-pattern.jpg`.
- **Imágenes de fondo:** Ejemplo: `hero-bg.jpg`, `contact-bg.png`.

#### 3. Estructura de la carpeta

- **Plana:** Todas las imágenes en la raíz de `images/`.
- **Organizada por secciones:** Subcarpetas como `profile/`, `projects/`, `logos/`.

#### 4. Uso en el proyecto

#### En HTML':'

```viewthtml
<img src="images/profile.jpg" alt="Foto de perfil">
```

#### En CSS':'

```viewcss
.hero-section {
  background-image: url('../images/hero-bg.jpg');
}
```

### `js/`

#### 1. Propósito de la carpeta `js/`
- La carpeta `js/` almacena archivos de **JavaScript** que se utilizan para:
    - Añadir interactividad a la página (animaciones, eventos, etc.).
    - Manipular el DOM (Document Object Model) para cambiar contenido dinámicamente.
    - Realizar peticiones a APIs o servicios externos.
    - Validar formularios o gestionar la lógica del frontend.

#### 2. Contenido típico de la carpeta `js/`

Archivo principal (`main.js`)

- Contiene el código JavaScript principal del proyecto.
- Ejemplo de funcionalidades:
    - Animaciones al hacer scroll.
    - Cambios dinámicos en el contenido (ej: mostrar/ocultar secciones).
    - Eventos de clic o hover.

#### Archivos específicos por funcionalidad

- Algunos proyectos dividen el código en varios archivos para mantenerlo organizado.
- Ejemplos:
  - `form-validation.js`: Validación de formularios de contacto.
  - `animations.js`: Lógica para animaciones personalizadas.
  - `api-requests.js`: Manejo de peticiones a APIs externas.

#### Librerías o plugins externos

- Si el proyecto utiliza librerías como jQuery, ScrollReveal, o AOS (Animate On Scroll), estos archivos pueden estar en la carpeta `js/`.
- Ejemplos:
  - `jquery.min.js`: Librería jQuery.
  - `aos.js`: Librería para animaciones al hacer scroll.

#### Archivos de configuración

- Algunos proyectos incluyen archivos de configuración para inicializar librerías o definir constantes.
- Ejemplo:
  - `config.js`: Define variables globales o configuraciones iniciales.

### 3. Estructura de la carpeta `js/`
La estructura puede variar dependiendo de la complejidad del proyecto. Algunas opciones comunes son:

#### Estructura plana

- Todos los archivos JavaScript están en la raíz de la carpeta `js/`.
- Ejemplo:

### `js/`

#### 1. `jquery-2.1.3.min.js`

**Descripción:**  
Este archivo es una versión minificada de jQuery 2.1.3. jQuery es una biblioteca de JavaScript rápida, pequeña y rica en funciones que simplifica la manipulación del DOM, el manejo de eventos, las animaciones y las solicitudes AJAX en el desarrollo web.

**Uso:**  
jQuery se utiliza para:
    - Simplificar la interacción con el DOM.
    - Realizar animaciones.
    - Manejar eventos.
    - Realizar solicitudes AJAX.

**Documentación oficial:**  
[jQuery 2.1.3 Documentation](https://api.jquery.com/)

#### 2. `main.js`

**Descripción:**  
Este archivo contiene el código JavaScript personalizado para un sitio web. Incluye funcionalidades como preloader, animaciones, manejo de eventos, validación de formularios, y más.

**Funcionalidades principales:**

- **Preloader:** Muestra una animación de carga antes de que la página esté completamente cargada.
- **FitText:** Ajusta el tamaño del texto para que se ajuste al ancho de su contenedor.
- **Owl Carousel:** Configura un carrusel de imágenes con navegación y paginación.
- **Alert Boxes:** Maneja la visualización y cierre de alertas.
- **Stat Counter:** Muestra animaciones de contadores estadísticos.
- **Masonry:** Organiza los elementos en un diseño de malla.
- **Modal Popup:** Configura ventanas emergentes modales.
- **Navigation Menu:** Maneja la navegación del menú y el desplazamiento suave.
- **Contact Form:** Valida y envía un formulario de contacto mediante AJAX.
- **Back to Top:** Muestra un botón para volver al principio de la página.

**Dependencias:**  
Este archivo depende de jQuery y posiblemente de otras bibliotecas como `magnific-popup` para los modales y `waypoints` para las animaciones de desplazamiento.

#### 3. `modernizr.js`

**Descripción:**  
Modernizr es una biblioteca de JavaScript que detecta las características de HTML5 y CSS3 en el navegador del usuario. Esto permite a los desarrolladores escribir código que se adapte a las capacidades del navegador.

**Uso:**  
Modernizr se utiliza para detectar si el navegador del usuario soporta ciertas características de HTML5 y CSS3, como animaciones CSS, geolocalización, canvas, etc. Esto permite a los desarrolladores proporcionar alternativas o polyfills para navegadores que no soportan ciertas características.

**Documentación oficial:**  
[Modernizr Documentation](https://modernizr.com/docs/)

#### 4. `pace.min.js`

**Descripción:**  
Pace es una biblioteca de JavaScript que automáticamente muestra una barra de progreso en la parte superior de la página mientras se cargan los recursos. Es útil para mejorar la experiencia del usuario al mostrar el progreso de la carga de la página.

**Uso:**  
Pace se utiliza para mostrar una barra de progreso mientras la página se carga. Puede configurarse para rastrear diferentes tipos de recursos, como solicitudes AJAX, eventos de retardo, y más.

**Documentación oficial:**  
[Pace Documentation](https://codebyzach.github.io/pace/)

### Resumen de la carpeta `js/`

- **`jquery-2.1.3.min.js`:** Biblioteca principal para manipulación del DOM y AJAX.
- **`main.js`:** Código personalizado para funcionalidades específicas del sitio web.
- **`modernizr.js`:** Detección de características del navegador.
- **`pace.min.js`:** Barra de progreso de carga de la página.

---

### Cómo funcionan juntos

1. **`jquery-2.1.3.min.js`':'** Proporciona las funciones básicas de jQuery que son utilizadas por `main.js` para manipular el DOM, manejar eventos y realizar animaciones.
2. **`modernizr.js`:** Se utiliza para asegurarse de que el sitio web funcione correctamente en diferentes navegadores, detectando las características disponibles.
3. **`pace.min.js`:** Mejora la experiencia del usuario mostrando una barra de progreso mientras la página se carga, lo que es especialmente útil en sitios web con muchos recursos.

---

### Ejemplo de uso

#### Incluir las bibliotecas en el HTML':'

```html
<head>
    <script src="js/jquery-2.1.3.min.js"></script>
    <script src="js/modernizr.js"></script>
    <script src="js/pace.min.js"></script>
    <script src="js/main.js"></script>
</head>
```
