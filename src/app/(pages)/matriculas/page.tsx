'use client'
import Banner from "@/app/components/Banner/Banner";
import Button from "@/app/components/Button/Button";
import { useState } from "react";
import { matriculasActions } from "../../../redux/features/matriculas-slice";
import { apiCheckMatricula, postMatricula } from "@/app/api/matriculas";
import { useDispatch } from "react-redux";
import styles from "./matriculas.module.css";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Matricula from "@/app/components/Matricula/Matricula";
import Container from "@/app/components/Container/Container";
import { fetchMatriculas, launchToast } from "@/app/utils/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "@/app/components/Spinner/Spinner";

const Matriculas = () => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);
    const [matricula, setMatricula] = useState<string>("");
    const [nascimento, setNascimento] = useState<string>("");

    const dispatch = useDispatch<AppDispatch>();
    const matriculas = useAppSelector((state) => state.matriculas.matriculas);
    const matriculasFetched = useAppSelector((state) => state.matriculas.fetched);

    const toggleDropdown = (index: number, remove?: boolean) => {
        if (remove) {
            setDropdownVisible((prevState) => {
                const updatedStates = [...prevState];
                updatedStates.splice(index, 1);
                return updatedStates;
            })
        } else {
            setDropdownVisible((prevState) => {
                const updatedStates = [...prevState];
                updatedStates[index] = !updatedStates[index];
                return updatedStates;
            });
        }

    };

    // async function fetchMatriculas() {
    //     try {
    //         const data = await getMinhasMatriculas();
    //         console.log("fetchMatriculas")
    //         store.dispatch(matriculasActions.setMinhasMatriculas(data));
    //     } catch (error) {
    //         console.error("Erro buscando suas matrículas", error);
    //     }
    // }
    async function fetchData() {
        await fetchMatriculas();
        dispatch(matriculasActions.setMatriculasFetched(true));
    }

    if (!matriculasFetched) {
        console.log('Dentro do If');
        setTimeout(() => {
            fetchData();
        }, 2000)
    }

    return (
        <div className={styles.main}>
            <Banner type="overlaySM" banner="bannerMatriculas">
                <h1>Matrículas</h1>
            </Banner>
            <Container>
                <h2 className={styles.title}>Minhas Matrículas</h2>
                <p className={styles.text}>Consulte as matrículas e veja os boletins escolares. Clique em uma das matrículas cadastradas para seleciona-la.</p>
                
                <div className={styles.matriculasContainer}>
                    {!matriculasFetched ? <Spinner /> : matriculas.length === 0 ? <h3 className={styles.title2}>No momento você não possui matrícula cadastrada. Insira os dados
                        da matrícula e a data de nascimento do aluno e clique em salvar.</h3>
                        :
                        <div className={styles.matriculas}>
                            {matriculas.map(({ id, nome, matricula }, index) => (
                                <Matricula id={id} key={index} i={index} nome={nome} matricula={matricula} dropdownVisible={dropdownVisible[index]} toggle={toggleDropdown} dispatch={dispatch} />
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
                        <Button text="Salvar" p="p-10" fn={async () => {
                            if (nascimento !== "" && matricula !== "") {
                                const nascimentoFormated = nascimento.split("-").reverse().join("/");
                                const data = await apiCheckMatricula({ nascimento: nascimentoFormated, matricula });
                                if (data) {
                                    const matriculaAdded = await postMatricula({ id: data.id, nome: data.nome, nascimento: data.nascimento, matricula: data.matricula });
                                    if (matriculaAdded.success) {
                                        dispatch(matriculasActions.addMatricula(data));
                                        launchToast({ msg: "Matrícula adicionada!", type: "success" });
                                    } else {
                                        launchToast({ msg: "Erro ao adicionar matrícula às suas matrículas.", type: "error" });
                                        console.error("Erro ao adicionar matrícula às suas matrículas.", matriculaAdded.status)
                                    }
                                } else {
                                    launchToast({ msg: "Dados inválidos ou não encontrados.", type: "error" })
                                    console.error("Dados inválidos ou não encontrados.");
                                }
                                setMatricula("");
                                setNascimento("");
                            }
                        }} />
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </div>
    )
}

export default Matriculas;