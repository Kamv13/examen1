'use client';

import { useContext, useEffect } from "react";
import { GastoContext } from "../../context/GastoContext";
import { Header } from "../../components/Header";
import { Presupuesto } from "../../components/Presupuesto";
import { GastoForm } from "../../components/GastoForm";
import { GastoTable } from "../../components/GastoTable";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { isLoggedIn } = useContext(GastoContext);
  const router = useRouter();

  useEffect(() => {
   if (!isLoggedIn) router.push("/");
 }, [isLoggedIn]);

if (!isLoggedIn) return null;

  return (
    <>
      <Header />
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
        <Presupuesto />
        <GastoForm />
        <GastoTable />
      </main>
    </>
  );
}