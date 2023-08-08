'use client'
import { useRef } from "react";
import { store } from "../../../redux/store";
import { setMinhasMatriculas } from "../../../redux/features/matriculas-slice";
import { InputMatricula } from "@/redux/features/matriculas-slice";

const Preloader = ({ minhasMatriculas }: { minhasMatriculas: InputMatricula[] }) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    console.log("Preloader");
    store.dispatch(setMinhasMatriculas(minhasMatriculas))
    loaded.current = true;
  }
  return null
}

export default Preloader;