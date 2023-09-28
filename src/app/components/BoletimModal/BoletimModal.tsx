import styles from "./boletimodal.module.css";
import Image from "next/image";
import logoboletim from "@/../public/images/logoboletim.jpeg";
import { BoletimDados, DadoBoletim } from "@/app/utils/types";

const BoletimModal = ({ data }: { data: BoletimDados }) => {
  const { aluno, dadosBoletim, avaliacoes } = data;

  // const uniqueFilter = (obj: DadoBoletim, i: number, arr: DadoBoletim[]) => {
  //   if (i == 0) {
  //     return obj;
  //   } else {
  //     return obj.tpc_id != arr[i - 1].tpc_id
  //   }
  // }

  const conceitoGlobal = dadosBoletim.filter((dado, i, arr) => (
    dado.disciplina == "Conceito global"
  ));

  const conceitoFaltas = conceitoGlobal.reduce((total, conceito) => (
    total + conceito.numeroFaltas
  ), 0)

  console.log(conceitoFaltas);
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
      <div className={styles.boletim}>
        <div className={styles.boletimTableContainer}>
          <table className={styles.boletimTable}>
            <thead className={styles.boletimTHead}>
              <tr className={styles.boletimTHeadRow}>
                <th rowSpan={2} className={styles.boletimTHeadCell}>Componente Curricular</th>
                <th colSpan={4} className={styles.boletimTHeadCell}>1º COC</th>
                <th colSpan={4} className={styles.boletimTHeadCell}>2º COC</th>
                <th colSpan={4} className={styles.boletimTHeadCell}>3º COC</th>
                <th colSpan={4} className={styles.boletimTHeadCell}>4º COC</th>
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
                <th className={styles.boletimTHeadCell}>RP.</th>
                <th className={styles.boletimTHeadCell}>Notas</th>
                <th className={styles.boletimTHeadCell}>2ª Época</th>
                <th className={styles.boletimTHeadCell}>Conc. Final</th>
                <th className={styles.boletimTHeadCell}>Média Final</th>
                <th className={styles.boletimTHeadCell}>Tot. Faltas</th>
              </tr>
            </thead>
            <tbody>
              {/* Ele verifica o tpc_id == 1 e contem disciplina "Conceito global", se o obj inteiro ou a avaliação não for null,
              ele preenche, se for ele joga cells vazias padrão. */}
              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                {conceitoGlobal ? conceitoGlobal.map((conceito, i) => (
                  i == 0 || conceito.tpc_id !== conceitoGlobal[i - 1].tpc_id ?
                    <>
                      <td className={styles.boletimTCell}>{conceito ? conceito.avaliacao : ""}</td>
                      <td className={styles.boletimTCell}>{conceito ? conceito.avaliacaoAdicional == "" ? " - " : conceito.avaliacaoAdicional : ""}</td>
                      <td className={styles.boletimTCell}>{conceito ? conceito.numeroFaltas : ""}</td>
                      <td className={styles.boletimTCell}>{conceito ? conceito.notaRP : ""}</td>
                    </>
                    :
                    <>
                      <td className={styles.boletimTCell}></td>
                      <td className={styles.boletimTCell}></td>
                      <td className={styles.boletimTCell}></td>
                      <td className={styles.boletimTCell}></td>
                    </>
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
                  </>
                }
                <td className={styles.boletimTCell}></td>
                <td className={styles.boletimTCell}></td>
                <td className={styles.boletimTCell}>{conceitoGlobal ? conceitoGlobal[0].notaResultado : ""}</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>
              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td colSpan={22} className={styles.boletimTCell}>Prova Bimestral</td>
              </tr>
              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

              <tr className={styles.boletimTRow}>
                <td className={styles.boletimTCell}>Conceito Global</td>
                <td className={styles.boletimTCell}>B</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>26</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>MB</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>8</td>
                <td className={styles.boletimTCell}>-</td>
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
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>-</td>
                <td className={styles.boletimTCell}>34</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.frequencia}>
        <p>O Aluno obteve uma frequência de 93,52%</p>
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
          <p>Atualizado em 24/07/2023</p>
        </div>
      </div>
    </div>
  )
}

export default BoletimModal;