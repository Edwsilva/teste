import styles from "./boletimodal.module.css";
import Image from "next/image";
import logoboletim from "../../../../public/images/logoboletim.jpeg";

const BoletimModal = () => {
    return(
        <div className={styles.modal}>
          <div className={styles.sectionLogo}>
            <Image src={logoboletim} alt="Logo Prefeitura" />
            <h1 className={styles.title2}>Boletim Escolar Online 2023</h1>
          </div>
          <div className={styles.sectionInfo}>
            <span><b>Escola: </b>em Comandante Arnaldo Varella</span>
            <span><b>Série: </b>9º ano</span>
            <span><b>Turma: </b>1901</span>
            <span><b>Nome: </b>Isabella Rafael Baptista</span>
            <span><b>Código: </b>2011116500200</span>
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
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th colSpan={22} className={styles.boletimTCell}>Prova Bimestral</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
                  </tr>
                  <tr className={styles.boletimTRow}>
                    <th className={styles.boletimTCell}>Conceito Global</th>
                    <th className={styles.boletimTCell}>B</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>26</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>MB</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>8</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}></th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>-</th>
                    <th className={styles.boletimTCell}>34</th>
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