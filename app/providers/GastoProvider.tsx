'use client';

import { useState, useEffect } from "react";
import { View } from "../modelos/View";
import { Gasto } from "../modelos/Gasto";
import { GastoContext } from "../context/GastoContext";

export function GastoProvider({ children }: View) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [presupuesto, setPresupuestoState] = useState(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [categorias, setCategorias] = useState<string[]>([
    "Comida",
    "Transporte",
    "Entretenimiento",
    "Ropa",
  ]);

  const totalGastado = gastos.reduce((sum, g) => sum + Number(g.monto), 0);

  function login(usuario: string, clave: string): boolean {
    if (usuario === "admin" && clave === "admin123") {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }

  function logout() {
    setIsLoggedIn(false);
  }

  function setPresupuesto(monto: number) {
    setPresupuestoState(monto);
  }

  function agregarCategoria(categoria: string) {
    if (!categoria.trim()) return;
    setCategorias((prev) => [...prev, categoria]);
  }

  async function agregarGasto(categoria: string, monto: number, fecha: string) {
    const res = await fetch("http://localhost:5000/gasto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categoria, monto, fecha }),
    });
    const newGasto = await res.json();
    setGastos((prev) => [...prev, newGasto]);
  }

  async function eliminarGasto(id: number) {
    await fetch(`http://localhost:5000/gasto/${id}`, { method: "DELETE" });
    setGastos((prev) => prev.filter((g) => g.idgasto !== id));
  }

  async function cargarGastos() {
    const res = await fetch("http://localhost:5000/gasto");
    const data = await res.json();
    setGastos(data);
  }

  useEffect(() => {
    if (isLoggedIn) cargarGastos();
  }, [isLoggedIn]);

  return (
    <GastoContext.Provider value={{
      isLoggedIn, login, logout,
      presupuesto, setPresupuesto, totalGastado,
      gastos, categorias, agregarCategoria,
      agregarGasto, eliminarGasto, cargarGastos,
    }}>
      {children}
    </GastoContext.Provider>
  );
}