import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import styles from "./boletimcard.module.css";
import { Matricula } from "@/app/utils/types";
import { obterDadosBoletim } from "@/app/api/boletim";

// export type BoletimData = {
//   escola: string;
//   serie: string;
//   turma: number;
//   nome: string;
//   matricula: string;
// }

type Props = {
  data: Matricula;
  setModal: Dispatch<SetStateAction<boolean>>;
  // setBoletim: Dispatch<SetStateAction<BoletimData>>;
}

const BoletimCard = ({ data, setModal }: Props) => {
  const { nome, matricula } = data;
  // let partesNome = data.nome.split(" ");
  // let nome = `${partesNome[0]} ${partesNome[partesNome.length - 1]}`;

  return (
    <div className={styles.boletim}>
      <div className={styles.boletimGroup}>
        <span>Aluno: <b>{nome}</b></span>
        <span>Matrícula: <b>{matricula}</b></span>
      </div>
      <Button text="Consultar" p="p-10" fn={() => {
        // setBoletim({ escola: data.escola, serie: data.serie, turma: data.turma, nome: data.nome, matricula: data.matricula })
        setModal(true);
      }} />
    </div>
  )
}

export default BoletimCard;