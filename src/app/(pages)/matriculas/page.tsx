'use client'
import Banner from "@/app/components/Banner/Banner";
import Button from "@/app/components/Button/Button";
import { useState } from "react";
import { removeMatricula, addMatricula } from "../../../redux/features/matriculas-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./matriculas.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AppDispatch, useAppSelector } from "@/redux/store";

//MOCK
// const matriculas = [
//     { id: 1, matricula: "1234567", nome: "Sofia Rodriguez" },
//     { id: 2, matricula: "1234567", nome: "Lucas Thompson" },
//     { id: 3, matricula: "1234567", nome: "Isabella Parker" },
//     { id: 4, matricula: "1234567", nome: "Gabriel Anderson" },
//     { id: 5, matricula: "1234567", nome: "Valentina Mitchell" },
//     { id: 6, matricula: "1234567", nome: "Benjamin Campbell" }
// ]


const Matriculas = () => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);

    const dispatch = useDispatch<AppDispatch>();
    const matriculas = useAppSelector((state) => state.persistedReducer.matriculas.matriculas);

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
                            {matriculas.map(({ id, nome, matricula }, index) => (
                                <span className={styles.matricula} key={id}>
                                    <span className={styles.icon} onClick={() => toggleDropdown(index)}>
                                        <BsThreeDotsVertical size={20} />
                                    </span>
                                    <ul className={`${styles.dropdown} ${dropdownVisible[index] ? styles.dropdownVisible : ''}`}>
                                        <li className={styles.dropdownItem}>
                                            <button className={styles.dropdownButton} onClick={() => { }}>Remover</button>
                                        </li>
                                    </ul>
                                    <h4 className={styles.matriculaTitle}>{nome}</h4>
                                    <p className={styles.matriculaNumber}>{matricula}</p>
                                </span>
                            ))}
                        </div>
                    }
                </div>
                <div className={styles.cadastrarMatricula}>
                    <h3 className={styles.title2}>Incluir nova matrícula</h3>
                    {/* <form action=""> */}
                    <div className={styles.form}>
                        <div className={styles.textField}>
                            <label htmlFor="" className={styles.label}>Matrícula:</label>
                            <input type="text" placeholder="Ex: 1234567" className={styles.input} />
                        </div>
                        <div className={styles.textField}>
                            <label htmlFor="" className={styles.label}>Nascimento:</label>
                            <input type="date" className={styles.input} />
                        </div>
                        <Button text="Salvar" fn={() => { dispatch(addMatricula({ id: 7, nome: "Eduardo", matricula: "1234567" })) }} />
                    </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default Matriculas;