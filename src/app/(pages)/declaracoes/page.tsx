'use client'
import Banner from "@/app/components/Banner/Banner";
import styles from "./declaracoes.module.css";
import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { useAppSelector } from "@/redux/store";
import MatriculaDropdown from "@/app/components/MatriculaDropdown/MatriculaDropdown";
import { RadioProps } from "@/app/components/MatriculaDropdown/MatriculaDropdown";

const Declaracoes = () => {
  const [selected, setSelected] = useState<RadioProps>("curso");
  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);

  const matriculas = useAppSelector((state) => state.matriculas.matriculas);

  function changeRadioSelect(value: RadioProps) {
    setSelected(value);
  }

  const toggleDropdown = (index: number) => {
    setDropdownVisible((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerDeclaracoes">
        <h1>Declarações</h1>
      </Banner>
      <div className={styles.container}>
        <h2 className={styles.title}>Declaração de Escolaridade</h2>
        <p className={styles.text}>A Declaração de Escolaridade é o documento emitido pela unidade escolar,
          que comprova o ano de escolaridade em curso ou concluído do discente, com
          validade de 30 (trinta) dias úteis.</p>
        <p className={styles.text}>Você poderá emitir a Declaração de Escolaridade, selecionando o nome do aluno e clicando na opção de Imprimir.</p>
        <div className={styles.declaracoesContainer}>
          <div className={styles.declaracoes}>
            <h3 className={styles.title2}>Selecione o tipo da declaração do aluno abaixo:</h3>
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
            <div className={styles.matriculas}>
              {matriculas.length === 0 ?
                <h3 className={styles.title2}>No momento você não possui matrícula cadastrada.
                  Acesse a página "Matrículas" e cadastre as informações do aluno para
                  aproveitar todos os recursos disponíveis.</h3>
                :
                matriculas.map(({ matricula, nome }, i) => (
                  <MatriculaDropdown nome={nome} matricula={matricula} i={i} selected={selected} dropdownVisible={dropdownVisible[i]} toggle={toggleDropdown} />
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </div >

  )
}

export default Declaracoes;