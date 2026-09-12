# Sistema de Recursos Humanos

Sistema integral de gestión de Recursos Humanos con un panel principal de acceso
a los distintos módulos/trámites del personal.

## Estado actual (v0.1)

Panel principal con diseño oscuro *glassmorphism* y dos paneles iniciales:

- **Cambios Administrativos**
- **Comisión de Servicios**

> Los paneles se irán agregando y conectando entre sí progresivamente.

## Estructura del proyecto

```
.
├── index.html                     # Panel principal (dashboard)
├── css/
│   ├── styles.css                 # Tema y estilos del dashboard
│   └── page.css                   # Estilos de páginas internas
├── js/
│   ├── panels.js                  # Configuración de paneles (data-driven)
│   └── main.js                    # Renderizado y búsqueda
└── pages/
    ├── cambios-administrativos.html
    └── comision-servicios.html
```

## Cómo agregar un nuevo panel

1. Añade un objeto al arreglo `PANELES` en `js/panels.js`.
2. (Opcional) crea su página en `pages/`.

No se requiere ningún paso de compilación: basta con abrir `index.html` en el navegador.

## Personalización

Los colores y el layout se controlan con variables CSS en la parte superior de
`css/styles.css` (`:root`), lo que facilita cambiar la paleta y agregar el logo
más adelante.
