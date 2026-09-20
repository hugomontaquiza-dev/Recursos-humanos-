# Contexto del proyecto — Sistema de Recursos Humanos (SEPS)

> Este archivo le da contexto a Claude Code cuando el proyecto se abre en la
> laptop, para poder **continuar el trabajo sin empezar de cero**. Resume qué es
> el sistema, cómo está construido, qué decisiones se tomaron y qué sigue.

## Qué es

Sistema integral de Recursos Humanos con una **página principal** (dashboard)
que da acceso a paneles/módulos. Diseño oscuro tipo *glassmorphism*.
Idioma: **español (Ecuador)**. Usuario principal: no programador — priorizar
claridad, instrucciones simples y que "funcione con doble clic".

Paneles:
- **Cambios Administrativos** — aún en construcción (placeholder).
- **Comisión de Servicios** — **activo y completo** (ver abajo).

## Módulo Comisión de Servicios (el corazón actual)

Sistematiza una matriz de Excel (`docs/matriz-original.xlsx`) que controla
**comisiones de servicio sin RMU** otorgadas a otras instituciones del Estado,
con seguimiento del **límite legal de 6 años** (LOSEP).

Pestañas del módulo (equivalen a las hojas del Excel):
- **Resumen** ← hoja *Inicio* (6 indicadores/KPIs).
- **Base de Personas** ← hoja *Base de Personas* (tabla con cálculos y semáforos).
- **Detalle de Períodos** ← hoja *Detalle de Períodos* (historial de renovaciones).
- **Registrar comisión** ← hoja *Registro de Comisión* (alta de persona nueva o renovación).

La lógica de cálculo está documentada en
`sistema/LOGICA-comision-servicios.md` (días efectivos, límite legal, semáforos,
continuidad). **Regla clave añadida:** si una persona tuvo interrupciones
(regresó a la institución y volvió a salir), el límite de 6 años se mide por
**días efectivos fuera** (suma de períodos, tope 2192 días); si es continua, se
usa la proyección de calendario (idéntica al Excel). Validado 15/15 contra el
Excel original.

## Modelo de datos

Dos colecciones/tablas:
- **personas** (una por servidor; id = cédula): `cedula, nombres, ciudad,
  intendencia, direccion, cargo, grupo, rmu, dirServidorOcupa`.
- **periodos** (uno por renovación): `cedula, institucion, inicio (YYYY-MM-DD),
  fin (YYYY-MM-DD), servidorOcupa`.

Datos reales cargados: **15 personas, 27 períodos**
(semilla en `sistema/comision-servicios.datos.json`).

## Archivos importantes

```
CLAUDE.md                                  Este contexto
README.md                                  Descripción general
index.html, css/, js/, pages/             Primer andamiaje (dashboard estático multi-archivo)
sistema/
  sistema-rh.html                          Versión NUBE (usa la capacidad db de Claude Artifacts)
  sistema-rh-local.html                    Versión LOCAL (offline; datos embebidos + localStorage)
  comision-servicios.datos.json            Datos de carga inicial (15 personas, 27 períodos)
  LOGICA-comision-servicios.md             Documentación de la lógica/fórmulas
  COMO-TRABAJAR-LOCAL.md                    Guía para usar/mover el sistema en la laptop
docs/
  matriz-original.xlsx                      Excel original del que se migró todo
```

## Dos versiones del sistema (importante)

1. **Nube** (`sistema/sistema-rh.html`): se publica como *Artifact* de Claude y
   guarda datos con la capacidad `db` (persistente y compartida). Solo funciona
   dentro del entorno de Claude.
2. **Local** (`sistema/sistema-rh-local.html`): un solo archivo autónomo. Emula
   las capacidades `db` y `downloads` con un *shim* que usa **localStorage** del
   navegador y descargas estándar. Trae los datos embebidos como semilla. Tiene
   botones **Respaldo** (exportar JSON) e **Importar**.

> ⚠️ Los datos de la nube y los locales **no se sincronizan solos**. Se mueven
> con Respaldo/Importar (formato JSON: `{personas:[...], periodos:[...]}`).

## Cómo ejecutarlo localmente

- **Usarlo:** abrir `sistema/sistema-rh-local.html` con doble clic (cualquier
  navegador moderno). No requiere servidor ni internet.
- No hay paso de compilación. Es HTML + CSS + JavaScript puro (sin dependencias
  ni `npm install`). Fuente tipográfica Inter vía Google Fonts (si no hay
  internet, usa la fuente del sistema como respaldo).

## Convenciones

- Todo en español. Nombres/instituciones se normalizan a MAYÚSCULAS sin tildes
  en las tablas (igual que el Excel).
- Fechas en formato `YYYY-MM-DD` internamente; se muestran `DD/MM/AAAA`.
- Al editar la lógica, mantener la equivalencia con el Excel y actualizar
  `LOGICA-comision-servicios.md`.
- Rama de trabajo: `claude/hr-system-dashboard-huewet`.

## Próximos pasos sugeridos (pendientes)

- Panel **Cambios Administrativos** (definir formularios/flujo).
- Tablero de **vencimientos** (quién vence en ≤90 días / cerca del límite legal).
- Botón para **agregar período rápido** desde la fila de la persona.
- Logo institucional y ajuste de colores/branding.
- (Opcional) Unificar en un solo código las versiones nube/local.
```
