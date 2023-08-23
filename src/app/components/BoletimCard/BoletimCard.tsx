import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import styles from "./boletimcard.module.css";
import { Matricula } from "@/redux/features/matriculas-slice";

export type BoletimData = {
  escola: string;
  serie: string;
  turma: number;
  nome: string;
  matricula: string;
}

type Props = {
  data: Matricula;
  setModal: Dispatch<SetStateAction<boolean>>;
  setBoletim: Dispatch<SetStateAction<BoletimData>>;
}

const BoletimCard = ({ data, setModal, setBoletim }: Props) => {
  // let partesNome = data.nome.split(" ");
  // let nome = `${partesNome[0]} ${partesNome[partesNome.length - 1]}`;

  return (
    <div className={styles.boletim}>
      <div className={styles.boletimGroup}>
        <span>Aluno: <b>{data.nome}</b></span>
        <span>Matrícula: <b>{data.matricula}</b></span>
      </div>
      <Button text="Consultar" p="p-10" radius fn={() => {
        setBoletim({ escola: data.escola, serie: data.serie, turma: data.turma, nome: data.nome, matricula: data.matricula })
        setModal(true)
      }} />
    </div>
  )
}

export default BoletimCard;