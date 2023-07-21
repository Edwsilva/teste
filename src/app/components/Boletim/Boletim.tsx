import Button from "../Button/Button";
import styles from "./boletim.module.css";

type Props = {
  nome: string;
  matricula: string;
}

const Boletim = ({ nome, matricula }: Props) => {
  return (
    <div className={styles.boletim}>
      <div className={styles.boletimGroup}>
        <span>Aluno: <b>{nome}</b></span>
        <span>Matrícula: <b>{matricula}</b></span>
      </div>
      <Button text="Consultar" p="p-10" radius />
    </div>
  )
}

export default Boletim;