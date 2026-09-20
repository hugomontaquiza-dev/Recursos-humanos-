# Cómo trabajar con el sistema en tu laptop (modo local)

Tu sistema tiene **dos partes**:

1. **El programa** (los archivos) → está guardado en GitHub.
2. **Los datos** (las personas y períodos) → hay dos "cajones" distintos:
   - En la **nube** (cuando usas el enlace de Claude).
   - En **tu laptop** (cuando usas la edición local).

> ⚠️ Los datos de la nube y los de tu laptop **no se sincronizan solos**. Para
> pasar datos de uno a otro se usa el botón **Respaldo** (exportar) e
> **Importar**. Ver más abajo.

---

## Opción A — Usar el sistema en tu laptop (lo más simple)

El archivo **`sistema/sistema-rh-local.html`** es el sistema completo en un solo
archivo, que **ya trae cargadas tus 15 personas y 27 períodos**.

1. Copia ese archivo a tu laptop (por ejemplo, al Escritorio).
2. Haz **doble clic**: se abre en tu navegador (Chrome, Edge, Firefox…).
3. Úsalo igual que en la nube: registrar, editar, eliminar, exportar.

No necesita internet. Los datos que registres se guardan **en ese navegador de
esa laptop**.

### Guardar y mover tus datos (Respaldo / Importar)

Arriba a la derecha hay dos botones:

- **Respaldo**: descarga un archivo `.json` con todos tus datos. Guárdalo como
  copia de seguridad o para llevarlo a otra computadora.
- **Importar**: carga un archivo de respaldo `.json` (reemplaza los datos
  actuales por los de ese archivo).

**Recomendación:** haz un *Respaldo* cada cierto tiempo. Si cambias de
computadora o de navegador, lleva ese archivo y usa *Importar*.

---

## Opción B — Descargar todo el proyecto desde GitHub

Si quieres todos los archivos (no solo el sistema local):

1. Entra al repositorio en GitHub:
   `https://github.com/hugomontaquiza-dev/Recursos-humanos-`
2. Cambia a la rama **`claude/hr-system-dashboard-huewet`**
   (menú de ramas, arriba a la izquierda del listado de archivos).
3. Botón verde **`Code`** → **`Download ZIP`**.
4. Descomprime el ZIP en tu laptop.
5. Abre `sistema/sistema-rh-local.html` con doble clic.

---

## Opción C — Seguir desarrollando en tu laptop (avanzado)

Si más adelante quieres seguir construyendo el sistema desde tu computadora con
ayuda de Claude, puedes instalar **Claude Code** (app de escritorio o extensión)
y conectar este mismo repositorio. Con eso trabajarías los archivos localmente y
podrías subir cambios a GitHub. (Podemos verlo paso a paso cuando quieras.)

---

## ¿Cuál versión es la "oficial"?

- Mientras trabajemos juntos aquí, la **versión en la nube** (el enlace de
  Claude) es la que voy actualizando.
- La **edición local** es tu copia para trabajar sin internet.
- Con **Respaldo / Importar** puedes mantener ambas al día cuando lo necesites.

Archivos relacionados en `sistema/`:
- `sistema-rh-local.html` — sistema para usar en la laptop (con datos incluidos).
- `sistema-rh.html` — versión para la nube (Artifact de Claude).
- `comision-servicios.datos.json` — datos de carga inicial.
- `LOGICA-comision-servicios.md` — cómo funcionan los cálculos.
