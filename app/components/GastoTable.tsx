'use client';

import { useContext } from "react";
import { GastoContext } from "../context/GastoContext";

export function GastoTable() {
  const { gastos, eliminarGasto } = useContext(GastoContext);

  if (gastos.length === 0) {
    return <p style={{ color: "#6b7280" }}>No hay gastos registrados.</p>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Gastos Registrados</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
        <thead>
          <tr style={{ backgroundColor: "#f3f4f6", textAlign: "left" }}>
            <th style={{ padding: "0.6rem 1rem", fontWeight: 600, borderBottom: "2px solid #d1d5db" }}>ID</th>
            <th style={{ padding: "0.6rem 1rem", fontWeight: 600, borderBottom: "2px solid #d1d5db" }}>Categoría</th>
            <th style={{ padding: "0.6rem 1rem", fontWeight: 600, borderBottom: "2px solid #d1d5db" }}>Monto</th>
            <th style={{ padding: "0.6rem 1rem", fontWeight: 600, borderBottom: "2px solid #d1d5db" }}>Fecha</th>
            <th style={{ padding: "0.6rem 1rem", fontWeight: 600, borderBottom: "2px solid #d1d5db" }}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((gasto) => (
            <tr key={gasto.idgasto} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td style={{ padding: "0.6rem 1rem", verticalAlign: "middle" }}>{gasto.idgasto}</td>
              <td style={{ padding: "0.6rem 1rem", verticalAlign: "middle" }}>{gasto.categoria}</td>
              <td style={{ padding: "0.6rem 1rem", verticalAlign: "middle" }}>${gasto.monto}</td>
              <td style={{ padding: "0.6rem 1rem", verticalAlign: "middle" }}>{gasto.fecha}</td>
              <td style={{ padding: "0.6rem 1rem", verticalAlign: "middle" }}>
                <button
                  onClick={() => eliminarGasto(gasto.idgasto)}
                  style={{ backgroundColor: "#ef4444", color: "white", border: "none", padding: "0.3rem 0.7rem", borderRadius: "4px", cursor: "pointer" }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}