'use client';

import { useState, useContext } from "react";
import { GastoContext } from "../context/GastoContext";

export function Presupuesto() {
  const { presupuesto, setPresupuesto, totalGastado } = useContext(GastoContext);
  const [input, setInput] = useState("");

  const porcentaje = presupuesto > 0 ? (totalGastado / presupuesto) * 100 : 0;
  const al80 = porcentaje >= 80 && porcentaje < 100;
  const superado = porcentaje >= 100;

  return (
    <div style={{ marginBottom: "2rem", padding: "1.5rem", border: "1px solid #d1d5db", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "1rem" }}>Presupuesto Mensual</h2>

      <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end", marginBottom: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <label>Establecer presupuesto</label>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ingresa el monto"
            style={{ padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "4px", minWidth: "200px" }}
          />
        </div>
        <button
          onClick={() => {
            if (!input.trim()) return;
            setPresupuesto(Number(input));
            setInput("");
          }}
          style={{ backgroundColor: "#4f46e5", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Guardar
        </button>
      </div>

      {presupuesto > 0 && (
        <div>
          <p>Presupuesto: <strong>${presupuesto}</strong></p>
          <p>Total gastado: <strong>${totalGastado}</strong></p>
          <p>Disponible: <strong>${presupuesto - totalGastado}</strong></p>
        </div>
      )}

      {al80 && (
        <div style={{ backgroundColor: "#fef08a", color: "#854d0e", padding: "0.75rem 1rem", borderRadius: "6px", marginTop: "1rem", fontWeight: 600 }}>
          Te has consumido el 80% de tu presupuesto, ten cuidado con tus gastos
        </div>
      )}

      {superado && (
        <div style={{ backgroundColor: "#fee2e2", color: "#991b1b", padding: "0.75rem 1rem", borderRadius: "6px", marginTop: "1rem", fontWeight: 600 }}>
          El limite de gastos ha sido superado!!!
        </div>
      )}
    </div>
  );
}