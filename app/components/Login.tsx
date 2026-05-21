'use client';
import { useState, useContext } from "react";
import { GastoContext } from "../context/GastoContext";
import { useRouter } from "next/navigation";

export function Login() {
  const { login } = useContext(GastoContext);

  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  return (
    <div style={{ maxWidth: "400px", margin: "5rem auto", padding: "2rem", border: "1px solid #d1d5db", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Iniciar Sesión</h2>

      {error && (
        <p style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>{error}</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Usuario"
            style={{ padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "4px" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <label>Contraseña</label>
          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Contraseña"
            style={{ padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "4px" }}
          />
        </div>

        <button
          onClick={() => {
            console.log("usuario:", usuario, "clave:", clave);
            const success = login(usuario, clave);
            console.log("success:", success);
            if (success) {
              router.push("/dashboard");
            } else {
              setError("Usuario o contraseña incorrectos");
            }
          }}
          style={{ backgroundColor: "#4f46e5", color: "white", padding: "0.5rem", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: 600 }}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}