import styles from "./matricula.module.css";

type MatriculaProps = {
  matricula: string;
  nome: string;
}

const Matricula = ({ matricula, nome }: MatriculaProps) => {
  return (
    <div className={styles.matricula}>
      <h5>{nome}</h5>
      <p>{matricula}</p>
    </div>
  )
}

export default Matricula;