import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import styles from "./boletimcard.module.css";

type Props = {
  nome: string;
  matricula: string;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const BoletimCard = ({ nome, matricula, setModal }: Props) => {
  return (
    <div className={styles.boletim}>
      <div className={styles.boletimGroup}>
        <span>Aluno: <b>{nome}</b></span>
        <span>Matrícula: <b>{matricula}</b></span>
      </div>
      <Button text="Consultar" p="p-10" radius fn={() => setModal(true)}/>
    </div>
  )
}

export default BoletimCard;