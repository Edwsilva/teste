import styles from "./boletimodal.module.css";
import Image from "next/image";
import logoboletim from "@/../public/images/logoboletim.jpeg";
import { BoletimDados, DadoBoletim, Avaliacao } from "@/app/utils/types";
import React from "react";

const BoletimModal = ({ data }: { data: BoletimDados }) => {
  {/* Ele verifica o tpc_id == 1 e contem disciplina "Conceito global", se o obj inteiro ou a avaliação não for null,
  ele preenche, se for ele joga cells vazias padrão. */}

  const { aluno, educacaoInfantil, dadosBoletim, avaliacoes } = data;

  const uniqueFilter = (obj: DadoBoletim, i: number, arr: DadoBoletim[]) => {
    if (i == 0) {
      return obj;
    }else if (obj.tds_id != arr[i - 1].tds_id) {
      return obj;
    } else {
      return !arr.find(val => val == obj)
    }
  };

  const conceitoGlobal = dadosBoletim.filter(dado => (
    dado.disciplina == "Conceito global"
  ));

  const conceitoFaltas = conceitoGlobal.filter(uniqueFilter).reduce((total, conceito) => (
    total + conceito.numeroFaltas
  ), 0);

  const conceitoGlobalUnique = conceitoGlobal.filter(uniqueFilter);

  const frequencia = conceitoGlobalUnique[conceitoGlobalUnique.length - 1]

  const disciplinas = dadosBoletim.filter(subject => (
    subject.disciplina != "Conceito global"
  )).filter(uniqueFilter).map(obj => obj.disciplina).sort();

  const disciplinaDados = disciplinas.map(disciplina => (
    dadosBoletim.filter(dado => (
      dado.disciplina == disciplina
    ))
  ));

  const disciplinaFaltas = disciplinaDados.map(disciplina => (
    disciplina.filter(uniqueFilter).reduce((total, value) => (
      total + value.numeroFaltas
    ), 0)
  ));

  const totalNotas = disciplinaDados.map(disciplina => (
    disciplina.filter(uniqueFilter).reduce((total, value) => (
      total + value.notaSomar
    ), 0)
  ));

  const date = new Date();
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  const buildAvaliacoesMap = () => {
    const mapaAvaliacoes = new Map();

    avaliacoes.forEach(avaliacao => {
      const key = avaliacao.avs_nome;

      if (!mapaAvaliacoes.has(key)) {
        mapaAvaliacoes.set(key, []);
      };

      mapaAvaliacoes.get(key).push(avaliacao);
    });

    mapaAvaliacoes.forEach(subarray => {
      while (subarray.length < 5) {
        subarray.push(null);
      }
    })

    return Array.from(mapaAvaliacoes.values());
  }

  const avaliacoesAgrupadas = avaliacoes.length > 0 ? buildAvaliacoesMap() : undefined;

  console.log(avaliacoesAgrupadas);
  return (
    <div className={styles.modal}>
      <div className={styles.sectionLogo}>
        <Image src={logoboletim} alt="Logo Prefeitura" />
        <h1 className={styles.title2}>Boletim Escolar Online {aluno.ano}</h1>
      </div>
      <div className={styles.sectionInfo}>
        <span><b>Escola: </b>{aluno.escola}</span>
        <span><b>Série: </b>{aluno.serie}</span>
        <span><b>Turma: </b>{aluno.turma}</span>
        <span><b>Nome: </b>{aluno.aluno}</span>
        <span><b>Código: </b>{aluno.alc_matricula}</span>
      </div>
      {educacaoInfantil ?
        <h3 className={styles.titleEdF}>Não há emissão de boletim para alunos da educação infantil.</h3>
        :
        <>
          <div className={styles.boletim}>
            <div className={styles.boletimTableContainer}>
              <table className={styles.boletimTable}>
                <thead className={styles.boletimTHead}>
                  <tr className={styles.boletimTHeadRow}>
                    <th rowSpan={2} className={styles.boletimTHeadCell}>Componente Curricular</th>
                    <th colSpan={4} className={styles.boletimTHeadCell}>1º COC</th>
                    <th colSpan={4} className={styles.boletimTHeadCell}>2º COC</th>
                    <th colSpan={4} className={styles.boletimTHeadCell}>3º COC</th>
                    <th colSpan={3} className={styles.boletimTHeadCell}>4º COC</th>
                    <th className={styles.boletimTHeadCell}>TOT</th>
                    <th className={styles.boletimTHeadCell}>5º COC</th>
                    <th colSpan={3} className={styles.boletimTHeadCell}>Resultado</th>
                  </tr>
                  <tr className={styles.boletimTHeadRow}>
                    <th className={styles.boletimTHeadCell}>Conc.</th>
                    <th className={styles.boletimTHeadCell}>Nota</th>
                    <th className={styles.boletimTHeadCell}>Faltas</th>
                    <th className={styles.boletimTHeadCell}>RP.</th>
                    <th className={styles.boletimTHeadCell}>Conc.</th>
                    <th className={styles.boletimTHeadCell}>Nota</th>
                    <th className={styles.boletimTHeadCell}>Faltas</th>
                    <th className={styles.boletimTHeadCell}>RP.</th>
                    <th className={styles.boletimTHeadCell}>Conc.</th>
                    <th className={styles.boletimTHeadCell}>Nota</th>
                    <th className={styles.boletimTHeadCell}>Faltas</th>
                    <th className={styles.boletimTHeadCell}>RP.</th>
                    <th className={styles.boletimTHeadCell}>Conc.</th>
                    <th className={styles.boletimTHeadCell}>Nota</th>
                    <th className={styles.boletimTHeadCell}>Faltas</th>
                    <th className={styles.boletimTHeadCell}>Notas</th>
                    <th className={styles.boletimTHeadCell}>2ª Época</th>
                    <th className={styles.boletimTHeadCell}>Conc. Final</th>
                    <th className={styles.boletimTHeadCell}>Média Final</th>
                    <th className={styles.boletimTHeadCell}>Tot. Faltas</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row - Conceito Global */}
                  <tr className={styles.boletimTRow}>
                    <td className={styles.boletimTCell}>Conceito Global</td>
                    {conceitoGlobal ?
                      conceitoGlobal.map((conceito, i) => (
                        i == 0 || !conceitoGlobal.find(obj => obj == conceito) && conceito.tpc_id !== 5 ?
                          <React.Fragment key={`${conceito.disciplina} - ${i}`}>
                            <td className={styles.boletimTCell}>{conceito.avaliacao}</td>
                            <td className={styles.boletimTCell}>{conceito.avaliacaoAdicional == null ? "" : conceito.avaliacaoAdicional}</td>
                            <td className={styles.boletimTCell}>{conceito.numeroFaltas}</td>
                            <td className={styles.boletimTCell}>{conceito.notaRP}</td>
                          </React.Fragment>
                          :
                          conceito.tpc_id == 5 ?
                            <td key={`${conceito.disciplina} - ${i}`} className={styles.boletimTCell}>{conceito.avaliacao}</td>
                            :
                            <React.Fragment key={`empty - ${i}`}>
                              <td className={styles.boletimTCell}></td>
                              <td className={styles.boletimTCell}></td>
                              <td className={styles.boletimTCell}></td>
                              <td className={styles.boletimTCell}></td>
                            </React.Fragment>
                      ))
                      :
                      <>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                        <td className={styles.boletimTCell}></td>
                      </>
                    }
                    {conceitoGlobal.length > 4 ?
                      ""
                      :
                      <td className={styles.boletimTCell}></td>
                    }
                    <td className={styles.boletimTCell}>{conceitoGlobal ? conceitoGlobal[0].notaResultado : ""}</td>
                    <td className={styles.boletimTCell}>{conceitoGlobal ? "-" : ""}</td>
                    <td className={styles.boletimTCell}>{conceitoGlobal ? conceitoFaltas : ""}</td>
                  </tr>

                  {/* Row - Disciplinas */}
                  {disciplinas.map((disciplina, i) => {
                    return (
                      <tr className={styles.boletimTRow} key={i}>
                        <td className={styles.boletimTCell}>{disciplina}</td>
                        {disciplinaDados[i].map((obj, i, arr) => (
                          i == 0 || !arr.find(item => item.tpc_id == obj.tpc_id) && obj.tpc_id !== 4 && obj.tpc_id !== 5 ?
                            <React.Fragment key={i}>
                              <td className={styles.boletimTCell}>-</td>
                              <td className={styles.boletimTCell}>{obj.avaliacao}</td>
                              <td className={styles.boletimTCell}>{obj.numeroFaltas}</td>
                              <td className={styles.boletimTCell}>{obj.notaRP}</td>
                            </React.Fragment>
                            :
                            obj.tpc_id == 4 ?
                              <React.Fragment key={i}>
                                <td className={styles.boletimTCell}>-</td>
                                <td className={styles.boletimTCell}>{obj.avaliacao}</td>
                                <td className={styles.boletimTCell}>{obj.numeroFaltas}</td>
                                <td className={styles.boletimTCell}>{totalNotas[i].toString()}</td>
                              </React.Fragment>
                              :
                              obj.tpc_id == 5 ?
                                <td key={`${obj.disciplina} - ${i}`} className={styles.boletimTCell}>{obj.avaliacao}</td>
                                :
                                <React.Fragment key={`empty - ${i}`}>
                                  <td className={styles.boletimTCell}></td>
                                  <td className={styles.boletimTCell}></td>
                                  <td className={styles.boletimTCell}></td>
                                  <td className={styles.boletimTCell}></td>
                                </React.Fragment>
                        ))}
                        {disciplinaDados[i].length > 4 ?
                          ""
                          :
                          <td className={styles.boletimTCell}></td>
                        }
                        <td className={styles.boletimTCell}>-</td>
                        <td className={styles.boletimTCell}>{disciplinaDados[i] ? disciplinaDados[i][0].notaResultado : ""}</td>
                        <td className={styles.boletimTCell}>{disciplinaDados[i] ? disciplinaFaltas[i] : ""}</td>
                      </tr>
                    )
                  })}
                  <tr className={styles.boletimTRow}>
                    <td colSpan={21} className={styles.boletimTCell}>Prova Bimestral</td>
                  </tr>
                  {!avaliacoesAgrupadas ? "" : avaliacoesAgrupadas.map((avaliacoes: Avaliacao[], i: number) => (
                    <tr className={styles.boletimTRow} key={i}>
                      <td className={styles.boletimTCell}>{avaliacoes[0].avs_nome}</td>
                      {avaliacoes.map((avaliacao: Avaliacao, index: number) => (
                        index == 4 ?
                          avaliacao == null ?
                            <td className={styles.boletimTCell}></td>
                            :
                            <td className={styles.boletimTCell}>{avaliacao.nota}</td>
                          :
                          avaliacao == null ?
                            <React.Fragment key={index}>
                              <td className={styles.boletimTCell}></td>
                              <td className={styles.boletimTCell}></td>
                              <td className={styles.boletimTCell}></td>
                              <td className={styles.boletimTCell}></td>
                            </React.Fragment>
                            :
                            <React.Fragment key={index}>
                              <td className={styles.boletimTCell}>-</td>
                              <td className={styles.boletimTCell}>{avaliacao.nota}</td>
                              <td className={styles.boletimTCell}>-</td>
                              <td className={styles.boletimTCell}>-</td>
                            </React.Fragment>
                      ))}
                      <td className={styles.boletimTCell}></td>
                      <td className={styles.boletimTCell}></td>
                      <td className={styles.boletimTCell}></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.frequencia}>
            <p>O aluno obteve uma frequência de {frequencia ? frequencia.frequenciaAcumulada : "0.00"}%</p>
          </div>
          <div className={styles.legenda}>
            <div className={styles.legenda1}>
              <span><b>MB - </b>MUITO BOM</span>
              <span><b>B - </b>BOM</span>
              <span><b>R - </b>REFORÇO INTENSIVO</span>
              <span><b>RI - </b>REFORÇO INTENSIVO</span>
              <span><b>DF - </b>DEIXOU DE FREQUENTAR</span></div>
            <div className={styles.legenda2}>
              <h6>Documento meramente informativo, não possuindo valor legal</h6>
              <p>Atualizado em {`${day}/${month}/${year}`}</p>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default BoletimModal;