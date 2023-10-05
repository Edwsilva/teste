'use client'
import Banner from "@/app/components/Banner/Banner";
import styles from "./declaracoes.module.css";
import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { AppDispatch, useAppSelector } from "@/redux/store";
import DeclaracaoDropdown from "@/app/components/MatriculaDropdown/DeclaracaoDropdown";
import { RadioProps } from "@/app/components/MatriculaDropdown/DeclaracaoDropdown";
import Container from "@/app/components/Container/Container";
import { matriculasActions } from "@/redux/features/matriculas-slice";
import { useDispatch } from "react-redux";
import { fetchMatriculas, launchToast } from "@/app/utils/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "@/app/components/Spinner/Spinner";
import Error from "@/app/components/Error/Error";


const Declaracoes = () => {
  const [selected, setSelected] = useState<RadioProps>("curso");
  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const matriculas = useAppSelector((state) => state.matriculas.matriculas);
  const matriculasFetched = useAppSelector((state) => state.matriculas.fetched);

  const isUserAuthenticated = useAppSelector(
    (state) => state.authUser.authenticated
  );

  const userInfo = useAppSelector(
    state => state.authUser.userInfo
);

  const changeRadioSelect = (value: RadioProps) => {
    setSelected(value);
  }

  const toggleDropdown = (index: number) => {
    setDropdownVisible((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  async function fetchData() {
    try {
      await fetchMatriculas(userInfo.token);
      dispatch(matriculasActions.setMatriculasFetched(true));
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  if (!matriculasFetched || error) {
    setTimeout(() => {
      fetchData();
    }, 2000)
  }

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerDeclaracoes">
        <h1>Declarações</h1>
      </Banner>
      <Container>
        <h2 className={styles.title}>Declaração de Escolaridade</h2>
        <p className={styles.text}>A Declaração de Escolaridade é o documento emitido pela unidade escolar,
          que comprova o ano de escolaridade em curso ou concluído do discente, com
          validade de 30 (trinta) dias úteis.</p>
        <p className={styles.text}>Você poderá emitir a Declaração de Escolaridade, selecionando o nome do aluno e clicando na opção de Imprimir.</p>
        <div className={styles.declaracoesContainer}>
          <div className={styles.declaracoes}>
            <h3 className={styles.title2}>Selecione o tipo da declaração do aluno abaixo:</h3>
            {!isUserAuthenticated ?
              ""
              :
              <div className={styles.form}>
                <div className={styles.inputGroup}>
                  <input type="radio" className={styles.input} id="curso" name="declaracao" value="curso" onChange={() => { changeRadioSelect("curso") }} />
                  <label htmlFor="curso" className={styles.label}><span className={selected === "curso" ? styles.spanSelected : styles.span}><AiFillPrinter className={styles.icon} size={15} /></span>Declaração de Escolaridade em Curso</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="radio" className={styles.input} id="conclusao" name="declaracao" value="conclusao" onChange={() => { changeRadioSelect("conclusao") }} />
                  <label htmlFor="conclusao" className={styles.label}><span className={selected === "conclusao" ? styles.spanSelected : styles.span}><AiFillPrinter size={15} /></span>Declaração de Escolaridade de Conclusão</label>
                </div>
              </div>
            }
            <div className={styles.matriculas}>
              {!isUserAuthenticated ?
                <Error type="warning" msg="Este serviço requer autenticação, efetue o login para ter acesso..." />
                :
                !matriculasFetched && !error ?
                  <Spinner />
                  :
                  error ?
                    <Error type="error" msg="Não foi possível buscar suas matrículas, tente de novo mais tarde..." />
                    :
                    matriculas.length === 0 ?
                      <h3 className={styles.title2}>No momento você não possui matrícula cadastrada. Insira os dados
                        da matrícula e a data de nascimento do aluno e clique em salvar.</h3>
                      :
                      matriculas.map((matricula, i) => (
                        <DeclaracaoDropdown token={userInfo.token} data={matricula} i={i} selected={selected} dropdownVisible={dropdownVisible[i]} toggle={toggleDropdown} key={i} />
                      ))
              }
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div >

  )
}

export default Declaracoes;