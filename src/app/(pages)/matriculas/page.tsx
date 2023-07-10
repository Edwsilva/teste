import Banner from "@/app/components/Banner/Banner";
import styles from "./matriculas.module.css";

const Matriculas = () => {
    return (
        <div className={styles.main}>
            <Banner type="overlaySM" banner="bannerDeclaracoes">
                <h1>Matrículas</h1>
            </Banner>
            <div className={styles.container}>
                <h2 className={styles.title}>Minhas Matrículas</h2>
                <p className={styles.text}>Consulte as matrículas e veja os boletins escolares.</p>
                <p className={styles.text}>No momento você não possui matrícula cadastrada. Insira 
                os dados da matrícula e a data de nascimento do aluno e clique em "Salvar".</p>
            </div>
        </div>
    )
}

export default Matriculas;