'use client'
import Banner from "@/app/components/Banner/Banner";
import Button from "@/app/components/Button/Button";
import { useState } from "react";
import { addMatricula } from "../../../redux/features/matriculas-slice";
import { useDispatch } from "react-redux";
import styles from "./matriculas.module.css";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Matricula from "@/app/components/Matricula/Matricula";

const Matriculas = () => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);
    const [matricula, setMatricula] = useState("");
    const [nascimento, setNascimento] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const matriculas = useAppSelector((state) => state.matriculas.matriculas);

    const toggleDropdown = (index: number) => {
        setDropdownVisible((prevState) => {
            const updatedStates = [...prevState];
            updatedStates[index] = !updatedStates[index];
            return updatedStates;
        });
    };

    return (
        <div className={styles.main}>
            <Banner type="overlaySM" banner="bannerMatriculas">
                <h1>Matrículas</h1>
            </Banner>
            <div className={styles.container}>
                <h2 className={styles.title}>Minhas Matrículas</h2>
                <p className={styles.text}>Consulte as matrículas e veja os boletins escolares. Clique em uma das matrículas cadastradas para seleciona-la.</p>
                <div className={styles.matriculasContainer}>
                    {matriculas.length === 0 ? <h3 className={styles.title2}>No momento você não possui matrícula cadastrada. Insira os dados
                        da matrícula e a data de nascimento do aluno e clique em salvar.</h3>
                        :
                        <div className={styles.matriculas}>
                            {matriculas.map(({ nome, matricula }, index) => (
                                <Matricula i={index} nome={nome} matricula={matricula} dropdownVisible={dropdownVisible[index]} toggle={toggleDropdown} dispatch={dispatch} />
                            ))}
                        </div>
                    }
                </div>
                <div className={styles.cadastrarMatricula}>
                    <h3 className={styles.title2}>Incluir nova matrícula</h3>
                    <div className={styles.form}>
                        <div className={styles.textField}>
                            <label htmlFor="" className={styles.label}>Matrícula:</label>
                            <input type="text" placeholder="Ex: 1234567" className={styles.input} value={matricula} onChange={(e) => setMatricula(e.target.value)} />
                        </div>
                        <div className={styles.textField}>
                            <label htmlFor="" className={styles.label}>Nascimento:</label>
                            <input type="date" className={styles.input} value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
                        </div>
                        <Button text="Salvar" fn={() => {
                            if (nascimento !== "" && matricula !== "") {
                                dispatch(addMatricula({ nome: nascimento, matricula: matricula }))
                                setMatricula("");
                                setNascimento("");
                            }
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Matriculas;