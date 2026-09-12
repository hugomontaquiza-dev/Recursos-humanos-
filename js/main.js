/**
 * main.js — Lógica del panel principal
 * Genera las tarjetas de paneles y maneja interacciones básicas.
 */

(function () {
  "use strict";

  const grid = document.getElementById("panelsGrid");
  const searchInput = document.getElementById("searchInput");

  /** Crea el HTML de una tarjeta de panel */
  function crearTarjeta(panel, indice) {
    const card = document.createElement("a");
    card.className = "card";
    card.href = panel.enlace || "#";
    card.dataset.id = panel.id;
    card.dataset.nombre = panel.titulo.toLowerCase();
    card.style.setProperty("--delay", indice * 70 + "ms");

    card.innerHTML = `
      <div class="card__glow"></div>
      <div class="card__icon icon--${panel.color}">${panel.icono}</div>
      <div class="card__body">
        <div class="card__head">
          <h3 class="card__title">${panel.titulo}</h3>
          <span class="card__badge badge--${panel.color}">${panel.etiqueta || ""}</span>
        </div>
        <p class="card__summary">${panel.resumen || ""}</p>
      </div>
      <div class="card__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    `;

    // Si el enlace aún no existe, evita navegar y avisa.
    if (!panel.enlace || panel.enlace === "#") {
      card.addEventListener("click", function (e) {
        e.preventDefault();
        card.classList.add("card--shake");
        setTimeout(() => card.classList.remove("card--shake"), 500);
      });
    }

    return card;
  }

  /** Renderiza todos los paneles */
  function render(lista) {
    grid.innerHTML = "";
    if (!lista.length) {
      grid.innerHTML = `<p class="empty">No se encontraron paneles.</p>`;
      return;
    }
    lista.forEach((panel, i) => grid.appendChild(crearTarjeta(panel, i)));
  }

  /** Filtro de búsqueda */
  function filtrar(texto) {
    const q = texto.trim().toLowerCase();
    if (!q) return render(PANELES);
    const filtrados = PANELES.filter(
      (p) =>
        p.titulo.toLowerCase().includes(q) ||
        (p.resumen || "").toLowerCase().includes(q)
    );
    render(filtrados);
  }

  // Inicialización
  if (typeof PANELES !== "undefined") {
    render(PANELES);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => filtrar(e.target.value));
  }
})();
