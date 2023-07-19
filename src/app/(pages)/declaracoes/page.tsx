'use client'
import Banner from "@/app/components/Banner/Banner";
import styles from "./declaracoes.module.css";
import { useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { BsFingerprint } from "react-icons/bs";
import Button from "@/app/components/Button/Button";
import { useAppSelector } from "@/redux/store";

//MOCK
// const matriculas = [
//   { id: 1, matricula: "1234567", nome: "Sofia Rodriguez" }
// ];

const Declaracoes = () => {
  const [selected, setSelected] = useState<string>("curso");
  const [dropdownVisible, setDropdownVisible] = useState<boolean[]>([]);

  const matriculas = useAppSelector((state) => state.matriculas.matriculas);

  function changeRadioSelect(value: string) {
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
                <input type="radio" className={styles.input} id="curso" name="declaracao" value="curso" onChange={() => changeRadioSelect("curso")} />
                <label htmlFor="curso" className={styles.label}><span className={selected === "curso" ? styles.spanSelected : styles.span}><AiFillPrinter className={styles.icon} size={15} /></span>Declaração de Escolaridade em Curso</label>
              </div>
              <div className={styles.inputGroup}>
                <input type="radio" className={styles.input} id="conclusao" name="declaracao" value="conclusao" onChange={() => changeRadioSelect("conclusao")} />
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
                  < div className={styles.matricula} key={i}>
                    <div className={styles.matriculaDropdown}>
                      <div className={styles.matriculaGroup}>
                        <span>Aluno: <b>{nome}</b></span>
                        <span>Matrícula: <b>{matricula}</b></span>
                      </div>
                      <button
                        className={`${styles.iconButton} ${dropdownVisible[i] ? styles.open : ""}`}
                        onClick={() => {
                          toggleDropdown(i);
                        }}
                      >
                        <div className={styles.menuIcon}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                    <div className={`${styles.declaracao} ${dropdownVisible[i] ? styles.declaracaoVisible : ""}`}>
                      <h4>Declaração do {nome}</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A vero ipsam earum dignissimos, quo culpa neque cum maiores!
                        Reiciendis minima at quis fuga nemo tempora earum iusto
                        illo rem maiores.</p>
                    </div>
                  </div>
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