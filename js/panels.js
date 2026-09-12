/**
 * ============================================================
 *  CONFIGURACIÓN DE PANELES DEL SISTEMA DE RECURSOS HUMANOS
 * ============================================================
 *
 *  Para agregar un panel nuevo en el futuro, sólo copia un
 *  objeto de esta lista y modifica sus valores. El dashboard
 *  se genera automáticamente a partir de este arreglo.
 *
 *  Campos:
 *   - id       : identificador único (sin espacios)
 *   - titulo   : nombre visible del panel
 *   - resumen  : descripción corta
 *   - etiqueta : texto pequeño de estado (ej. "Disponible")
 *   - color    : nombre del degradado (ver css/styles.css)
 *   - enlace   : página a la que dirige (o "#" si aún no existe)
 *   - icono    : SVG del ícono (string)
 * ============================================================
 */

const PANELES = [
  {
    id: "cambios-administrativos",
    titulo: "Cambios Administrativos",
    resumen: "Gestión de traslados, encargos, reasignaciones y movimientos del personal.",
    etiqueta: "Disponible",
    color: "teal",
    enlace: "pages/cambios-administrativos.html",
    icono: `<svg viewBox="0 0 24 24" fill="none">
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M14 3v4h4" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M15.4 12.3 12 15.7l-2 .4.4-2 3.4-3.4a1 1 0 0 1 1.4 0l.2.2a1 1 0 0 1 0 1.4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: "comision-servicios",
    titulo: "Comisión de Servicios",
    resumen: "Solicitud, autorización y seguimiento de comisiones de servicio del personal.",
    etiqueta: "Disponible",
    color: "violet",
    enlace: "pages/comision-servicios.html",
    icono: `<svg viewBox="0 0 24 24" fill="none">
      <path d="M4 8h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M3 13h18M12 12v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    </svg>`
  }

  // ── Próximos paneles se agregarán aquí ──
];
