# Sistema de Recursos Humanos

Sistema integral de gestión de Recursos Humanos con un panel principal de acceso
a los distintos módulos/trámites del personal.

## Estado actual (v0.2)

Panel principal con diseño oscuro *glassmorphism* y dos paneles:

- **Cambios Administrativos** — en construcción
- **Comisión de Servicios** — **activo**: sistematización de la matriz de Excel
  de comisiones de servicio sin RMU, con registro de personas/períodos y control
  del límite legal de 6 años. Ver `sistema/LOGICA-comision-servicios.md`.

> Los paneles se irán agregando y conectando entre sí progresivamente.

### Sistema publicado (versión usable)

El sistema completo y funcional (con almacenamiento persistente) vive en
`sistema/sistema-rh.html` y se publica como Artifact de Claude. La carpeta
`sistema/` contiene además los datos de carga inicial y la documentación de la
lógica; `docs/matriz-original.xlsx` conserva el Excel original.

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
