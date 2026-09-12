# Módulo Comisión de Servicios — Lógica del sistema

Este documento describe cómo funciona el módulo **Comisión de Servicios** del
Sistema de RH, que sistematiza la matriz de Excel *"Última matriz ok"*
(control de comisiones de servicio **sin RMU** otorgadas a otras instituciones
del Estado, con seguimiento del **límite legal de 6 años** — LOSEP).

El archivo original se conserva en `docs/matriz-original.xlsx`.

## Modelo de datos

El sistema guarda la información en dos colecciones (equivalentes a las pestañas
del Excel):

### `personas` — una por servidor (pestaña *Base de Personas*)
| Campo | Descripción |
|---|---|
| `cedula` | Identificador único (clave del documento) |
| `nombres` | Nombres completos |
| `ciudad` | Ciudad |
| `intendencia` | Intendencia de origen |
| `direccion` | Dirección de origen |
| `cargo` | Cargo |
| `grupo` | Grupo ocupacional |
| `rmu` | RMU referencial |
| `dirServidorOcupa` | Dirección del servidor que ocupa la partida |

### `periodos` — uno por renovación (pestaña *Detalle de Períodos*)
| Campo | Descripción |
|---|---|
| `cedula` | Cédula del servidor |
| `institucion` | Institución del período (destino) |
| `inicio` | Fecha de inicio (YYYY-MM-DD) |
| `fin` | Fecha de fin (YYYY-MM-DD) |
| `servidorOcupa` | Servidor que ocupa la partida en ese período |

La pestaña *Registro de Comisión* del Excel se convierte en el formulario
**"Registrar comisión"**: al escribir una cédula existente se autocompletan los
datos de la persona (renovación); si es nueva, se capturan todos sus datos.
Cada registro crea/actualiza un `periodo` y recalcula todo automáticamente.

## Cálculos automáticos (idénticos al Excel)

Para cada persona, a partir de sus períodos:

| Cálculo | Fórmula (equivalente Excel) |
|---|---|
| **Institución actual (destino)** | Institución del período vigente (mayor fecha fin) |
| **Fecha inicio 1ª comisión** | `MIN(inicio)` de todos los períodos |
| **Fecha fin comisión actual** | `MAX(fin)` de todos los períodos |
| **N° de períodos** | Conteo de períodos de la cédula |
| **Días acumulados** | `Σ (fin − inicio + 1)` de cada período |
| **Años acumulados** | `Días acumulados / 365.25` (1 decimal) |
| **Fecha límite legal (6 años)** | `EDATE(inicio 1ª, 72 meses)` |
| **Días restantes al límite** | `Fecha límite − HOY` |
| **Días restantes comisión actual** | `Fecha fin actual − HOY` |
| **Continuidad** | `CONTINUA` si `|Días acum − (fin actual − inicio 1ª + 1)| ≤ 3`; si no, `CON INTERRUPCIONES` |

### Semáforos

**Estado del límite legal** (según días restantes al límite de 6 años):
- 🔴 Superó el límite legal — `≤ 0`
- 🟠 Próximo al límite (6 años) — `≤ 180`
- 🟡 Vigilar (< 1 año) — `≤ 365`
- 🟢 Dentro del límite — resto

**Estado de la comisión actual** (según días restantes de la comisión vigente):
- 🔴 Comisión vencida — `< 0`
- 🟠 Vence pronto (≤ 90 días) — `≤ 90`
- 🟡 Próxima a vencer (≤ 180 días) — `≤ 180`
- 🟢 Vigente — resto

## Indicadores del Resumen (pestaña *Inicio*)

1. **Personas en comisión** — total de personas.
2. **Comisiones vencidas o por vencer (≤90 días)** — estados 🔴/🟠 de comisión.
3. **Cerca o sobre el límite legal (6 años)** — estados 🔴/🟠 del límite.
4. **Partidas sin servidor registrado** — servidor vacío, `INACTIVO` o `SIN REGISTRAR`.
5. **RMU mensual total comprometido (referencial)** — suma de RMU.
6. **Instituciones distintas receptoras** — instituciones actuales únicas.

## Notas de implementación

- Los nombres de instituciones y servidores se normalizan a MAYÚSCULAS sin
  tildes en las tablas (igual que el Excel).
- El sistema publicado (`sistema/sistema-rh.html`) usa el almacenamiento
  persistente de Artifacts (`db`): los datos se guardan en línea y se comparten
  entre quienes abren el sistema.
- Datos de carga inicial: `sistema/comision-servicios.datos.json`
  (15 personas y 27 períodos migrados del Excel).
- La validación de que los cálculos coinciden con el Excel se realizó sobre las
  15 personas de la matriz (días, años, fecha límite y N° de períodos): 15/15 ✓.
