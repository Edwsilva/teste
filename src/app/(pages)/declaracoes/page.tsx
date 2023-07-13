'use client'
import Banner from "@/app/components/Banner/Banner";
import styles from "./declaracoes.module.css";
import { useState } from "react";
import {AiFillPrinter} from "react-icons/ai";
import {BsFingerprint} from "react-icons/bs";
import Button from "@/app/components/Button/Button";

const matriculas = [
  { id: 1, matricula: "1234567", nome: "Sofia Rodriguez" }
];

const Declaracoes = () => {
  const [selected, setSelected] = useState<string>("curso");

  console.log(selected);

  function changeRadioSelect(value: string){
    setSelected(value);
  }

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
          {matriculas.length > 0 ?
            <div className={styles.declaracoes}>
              <h3 className={styles.title2}>Selecione o tipo da declaração do aluno abaixo:</h3>
              <form action="">
                <div className={styles.inputGroup}>
                  <input type="radio" className={styles.input} id="curso" name="declaracao" value="curso" onChange={() => changeRadioSelect("curso")}/>
                  <label htmlFor="curso" className={styles.label}><span className={selected === "curso" ? styles.spanSelected : styles.span}><AiFillPrinter className={styles.icon} size={15}/></span>Declaração de Escolaridade em Curso</label>
                </div>
                <div className={styles.inputGroup}>
                  <input type="radio" className={styles.input} id="conclusao" name="declaracao" value="conclusao" onChange={() => changeRadioSelect("conclusao")}/>
                  <label htmlFor="conclusao" className={styles.label}><span className={selected === "conclusao" ? styles.spanSelected : styles.span}><AiFillPrinter size={15}/></span>Declaração de Escolaridade de Conclusão</label>
                </div>
                <Button text="Imprimir"/>
              </form>
            </div>
            :
            <h3>Não existem alunos cadastrados no seu CPF.</h3>
          }
        </div>
      </div>
    </div>

  )
}

export default Declaracoes;