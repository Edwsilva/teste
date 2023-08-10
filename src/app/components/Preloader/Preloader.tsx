'use client'
import { store } from "../../../redux/store";
import { setMinhasMatriculas } from "../../../redux/features/matriculas-slice";
import { getMinhasMatriculas } from '../../api/matriculas';
import { Matricula } from "@/redux/features/matriculas-slice";
import { useAppSelector } from "../../../redux/store";
import { useEffect } from "react";

const Preloader = ({ minhasMatriculas }: { minhasMatriculas: Matricula[] }) => {
  const matriculas = useAppSelector((state) => state.matriculas.matriculas);
  const matriculasPersisted = window.localStorage.getItem("minhasMatriculas");

  useEffect(() => {
    async function fetchMatriculas() {
      try {
        const data = await getMinhasMatriculas();
        store.dispatch(setMinhasMatriculas(data));
      } catch (error) {
        console.error("Erro buscando suas matrículas", error);
      }
    }
    fetchMatriculas();
  }, [matriculasPersisted]);

  if (!matriculas) {
    store.dispatch(setMinhasMatriculas(minhasMatriculas))
  }
  return null
}

export default Preloader;