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

## Opción C — Seguir desarrollando con Claude desde tu laptop

Para continuar construyendo el sistema (no solo usarlo) desde tu computadora,
con la misma ayuda de Claude, instala **Claude Code** y abre este repositorio.
Al abrirlo, Claude leerá el archivo `CLAUDE.md` y entenderá **todo lo que hemos
hecho**, para continuar sin empezar de cero.

### 1) Instalar la app de escritorio de Claude (lo más simple)

1. Ve a **https://claude.ai/download** y descarga la app para tu sistema
   (Windows o macOS).
2. Instálala y **inicia sesión** con tu misma cuenta (`hugomontaquiza@gmail.com`).
3. Abre **Claude Code** dentro de la app.

### 2) Conectar este proyecto

Tienes dos caminos:

- **Con GitHub (recomendado):** en Claude Code, elige abrir un proyecto desde
  GitHub y selecciona el repositorio
  `hugomontaquiza-dev/Recursos-humanos-`, rama
  `claude/hr-system-dashboard-huewet`. Así tus cambios quedan respaldados en la
  nube de GitHub automáticamente.
- **Con la carpeta descargada:** si ya bajaste el ZIP (Opción B), en Claude Code
  abre esa carpeta como proyecto.

### 3) Continuar el trabajo

Escríbele a Claude, por ejemplo:
> "Lee el CLAUDE.md y continuemos con el sistema de Recursos Humanos. Quiero
> agregar el panel de Cambios Administrativos."

Claude ya tendrá el contexto (qué es el sistema, la lógica, los datos y los
próximos pasos).

> **Nota:** el *historial de este chat* no se copia solo, pero **toda la
> información importante** (programa, datos, lógica y decisiones) está en el
> repositorio y en `CLAUDE.md`, así que el trabajo continúa sin problema.

### Alternativa técnica (línea de comandos)

Si prefieres la terminal y tienes Node.js instalado:

```
npm install -g @anthropic-ai/claude-code
git clone https://github.com/hugomontaquiza-dev/Recursos-humanos-.git
cd Recursos-humanos-
git checkout claude/hr-system-dashboard-huewet
claude
```

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
