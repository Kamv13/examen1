'use client'

import { createContext } from "react";
import { Gasto } from "../modelos/Gasto";

export const GastoContext = createContext({

  isLoggedIn: false,
  login: (usuario: string, clave: string): boolean => false,
  logout: () => {},


  presupuesto: 0,
  setPresupuesto: (monto: number) => {},
  totalGastado: 0,


  gastos: [] as Gasto[],
  categorias: [] as string[],
  agregarCategoria: (categoria: string) => {},
  agregarGasto: (categoria: string, monto: number, fecha: string) => {},
  eliminarGasto: (id: number) => {},
  cargarGastos: () => {},
});