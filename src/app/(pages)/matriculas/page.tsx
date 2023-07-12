'use client'
import Banner from "@/app/components/Banner/Banner";
import Button from "@/app/components/Button/Button";
import { useState } from "react";
import styles from "./matriculas.module.css";
import { MdStars } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

type Matricula = {
    id: number;
    matricula: string;
    nome: string;
}

const matriculas: Matricula[] = [
    { id: 1, matricula: "1234567", nome: "Sofia Rodriguez" },
    { id: 2, matricula: "1234567", nome: "Lucas Thompson" },
    { id: 3, matricula: "1234567", nome: "Isabella Parker" },
    { id: 4, matricula: "1234567", nome: "Gabriel Anderson" },
    { id: 5, matricula: "1234567", nome: "Valentina Mitchell" },
    { id: 6, matricula: "1234567", nome: "Benjamin Campbell" }
];

const Matriculas = () => {
    const [matriculaSelected, setMatriculaSelected] = useState<number>()
    return (
        <div className={styles.main}>
            <Banner type="overlaySM" banner="bannerMatriculas">
                <h1>Matrículas</h1>
            </Banner>
            <div className={styles.container}>
                <h2 className={styles.title}>Minhas Matrículas</h2>
                <p className={styles.text}>Consulte as matrículas e veja os boletins escolares.</p>
                <div className={styles.matriculasContainer}>
                    {matriculas.length === 0 ? <h3>No momento você não possui matrícula cadastrada. Insira os dados
                        da matrícula e a data de nascimento do aluno e clique em salvar</h3>
                        :
                        <div className={styles.matriculas}>
                            {matriculas.map(({ id, nome, matricula }: Matricula) => (
                                <span className={id === matriculaSelected ? styles.matriculaSelected : styles.matricula} key={id} onClick={() => setMatriculaSelected(id)}>
                                    {id === matriculaSelected ? <span className={styles.star}><AiFillStar size={20} /></span> : ""}
                                    <h4 className={styles.matriculaTitle}>{nome}</h4>
                                    <p className={styles.matriculaNumber}>{matricula}</p>
                                </span>
                            ))}
                        </div>
                    }
                </div>
                <div className={styles.cadastrarMatricula}>
                    <h3 className={styles.title2}>Incluir nova matrícula</h3>
                    <form action="">
                        <label htmlFor="">Matrícula:</label>
                        <input type="text" placeholder="Ex: 1234567" className={styles.input} />
                        <label htmlFor="">Nascimento:</label>
                        <input type="date" className={styles.input} />
                        <Button text="Salvar" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Matriculas;