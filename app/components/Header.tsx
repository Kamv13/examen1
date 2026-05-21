'use client';

import { useContext } from "react";
import { GastoContext } from "../context/GastoContext";
import { useRouter } from "next/navigation";

export function Header() {
  const { isLoggedIn, logout, presupuesto, totalGastado } = useContext(GastoContext);
  const router = useRouter();

  if (!isLoggedIn) return null;

  const porcentaje = presupuesto > 0 ? (totalGastado / presupuesto) * 100 : 0;

  return (
    <header style={{ backgroundColor: "#4f46e5", color: "white", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ margin: 0, fontSize: "1.2rem" }}>Administrador de Gastos</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {presupuesto > 0 && (
          <span style={{ fontSize: "0.9rem" }}>
            Gastado: <strong>${totalGastado}</strong> / <strong>${presupuesto}</strong> ({porcentaje.toFixed(0)}%)
          </span>
        )}
        <button
          onClick={() => { logout(); router.push("/"); }}
          style={{ backgroundColor: "white", color: "#4f46e5", border: "none", padding: "0.3rem 0.8rem", borderRadius: "4px", cursor: "pointer", fontWeight: 600 }}
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}