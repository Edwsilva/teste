'use client'
import Banner from "@/app/components/Banner/Banner";
import styles from "./declaracoes.module.css";
import { useState } from "react";
import Image from "next/image";
import { AiFillPrinter } from "react-icons/ai";
import { useAppSelector } from "@/redux/store";
import logoDeclara from "../../../../public/images/logodeclara.png";
import Button from "@/app/components/Button/Button";

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
                  < div className={styles.matricula} key={i} >
                    <div className={dropdownVisible[i] === true ? styles.matriculaDropdownVisible : styles.matriculaDropdown} onClick={() => {
                      toggleDropdown(i);
                    }}>
                      <div className={styles.matriculaGroup}>
                        <span>Aluno: <b>{nome}</b></span>
                        <span>Matrícula: <b>{matricula}</b></span>
                      </div>
                      <button
                        className={`${styles.iconButton} ${dropdownVisible[i] ? styles.open : ""}`}
                      >
                        <div className={styles.menuIcon}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                    <div className={`${styles.declaracao} ${dropdownVisible[i] ? styles.declaracaoVisible : ""}`}>
                      <div className={styles.declaracaoLogo}>
                        <Image src={logoDeclara} alt="Logo da Prefeitura" />
                        <span className={styles.nameGroup}>
                          <h6 className={styles.title6}>Prefeitura Da Cidade do Rio de Janeiro</h6>
                          <p className={styles.text6}>Secretaria Municipal de Educação</p>
                        </span>
                      </div>
                      <table className={styles.table}>
                        <thead className={styles.tHead}>
                          <tr className={styles.tHeadRow}>
                            <th colSpan={3} className={styles.tHeadCell}>Declaração de Escolaridade</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className={styles.tRow}>
                            <th className={styles.tCell}>
                              Designação<br />
                              <p className={styles.tCellText}>E / CRE(06.25.018)</p>
                            </th>
                            <th className={styles.tCell}>
                              Censo<br />
                              <p className={styles.tCellText}>33086982</p>
                            </th>
                            <th className={styles.tCell}>
                              Denominação<br />
                              <p className={styles.tCellText}>Em Comandante Arnaldo Varella</p>
                            </th>
                          </tr>
                          <tr className={styles.tRow}>
                            <th colSpan={2} className={styles.tCell}>
                              Endereço<br />
                              <p className={styles.tCellText}>Avenida Chrisóstomo Pimentel de Oliveira, 2505 Pavuna</p>
                            </th>
                            <th className={styles.tCell}>
                              Telefone<br />
                              <p className={styles.tCellText}>3358-1092</p>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                      <div className={styles.declaracaoText}>
                        {selected === "curso" ?
                          <p>Declaro que o(a) aluno(a) ISABELLA RAFAEL BAPTISTA, código 2011116500200,
                            NIS 16330094080, filho(a) de SIDNEI ALVES BAPTISTA e de ADRIANA DE SOUZA
                            RAFAEL, nascido(a) em 03/08/2008, está matriculado(a) neste Estabelecimento,
                            no(a) 9º ano do(a) Ensino Fundamental, no turno Manhã, obtendo frequência
                            de 0,00 % até a presente data.</p>
                          :
                          <p>Declaro que o(a) aluno(a) ISABELLA RAFAEL BAPTISTA, código 2011116500200,
                            NIS 16330094080, filho(a) de SIDNEI ALVES BAPTISTA e de ADRIANA DE SOUZA
                            RAFAEL, nascido(a) em 03/08/2008, cursou neste Estabelecimento, o 8º ano
                            do(a) Ensino Fundamental, no turno Manhã, no ano letivo de 2022, obteve
                            98,44% de frequência, tendo sido aprovado nos termos da Deliberação CME Nº
                            42/2020 que autorizou a implementação da Reorganização Curricular e do
                            Continum Curricular disposto na Deliberação CME Nº 43/2020, com base no
                            Parecer CNE/CP Nº 11/2020, e da Lei Nº 14.040/2020, medidas essas
                            implementadas, em caráter excepcional, durante o estado de calamidade
                            pública reconhecido pelo Decreto Legislativo nº 6, de 20 de março de 2020.
                            O aluno deverá cursar o 9º ano no próximo período letivo.</p>}
                      </div>
                      <div className={styles.declaracaoSignature}>
                        <p className={styles.text6}>Rio de Janeiro, 23/01/2023</p>
                        <div className={styles.signature}>
                          <span className={styles.signatureLine}></span>
                          <p className={styles.text6}>Diretor(a)</p>
                        </div>
                      </div>
                      <div className={styles.declaracaoText2}>
                        <p>Sr. Responsável<br />
                          Caso seja beneficiário do Programa Bolsa Família, é fundamental que procure o Centro de Referência de
                          Assistência Social mais próxima de sua residência, sempre que houver mudança de endereço, escola,
                          renda ou ocorrer nascimento ou óbito de pessoas de seu domicílio para que seu cadastro seja
                          atualizado.</p>
                      </div>
                      <div className={styles.declaracaoText3}>
                        <p>O aluno está cadastrado no(s) seguinte(s) Programa(s):<br />
                          Bolsa Família / Benefício Variável Jovem, Cartão Carioca</p>
                      </div>
                      <div className={styles.declaracaoValidate}>
                        <h3 className={styles.validadeTitle}>Documento com validade de 30 dias a partir da data de emissão</h3>
                        <p>Valide sua declaração em: http://prefeitura.rio/sme<br />
                          Informe na consulta o código desta impressão:<br />
                          920ad26d8a</p>
                      </div>
                      <Button text="Imprimir"/>
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