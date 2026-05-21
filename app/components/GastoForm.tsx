'use client';

import { useState, useContext } from "react";
import { GastoContext } from "../context/GastoContext";

export function GastoForm() {
  const { categorias, agregarCategoria, agregarGasto } = useContext(GastoContext);
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  return (
    <div style={{ marginBottom: "2rem", padding: "1.5rem", border: "1px solid #d1d5db", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "1rem" }}>Registrar Gasto</h2>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <label>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            style={{ padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "4px", minWidth: "160px" }}
          >
            <option value="">Selecciona categoría</option>
            {categorias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <label>Monto</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Monto"
            style={{ padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "4px", minWidth: "140px" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <label>Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            style={{ padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "4px" }}
          />
        </div>
      </div>

      <button
        onClick={() => {
          if (!categoria || !monto || !fecha) return;
          agregarGasto(categoria, Number(monto), fecha);
          setCategoria("");
          setMonto("");
          setFecha("");
        }}
        style={{ backgroundColor: "#4f46e5", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "4px", cursor: "pointer", marginBottom: "1.5rem" }}
      >
        Agregar Gasto
      </button>

      <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
        <h3 style={{ marginBottom: "0.75rem", fontSize: "0.95rem" }}>Agregar nueva categoría</h3>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <input
            type="text"
            value={nuevaCategoria}
            onChange={(e) => setNuevaCategoria(e.target.value)}
            placeholder="Nueva categoría"
            style={{ padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "4px", minWidth: "200px" }}
          />
          <button
            onClick={() => {
              agregarCategoria(nuevaCategoria);
              setNuevaCategoria("");
            }}
            style={{ backgroundColor: "#6b7280", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}