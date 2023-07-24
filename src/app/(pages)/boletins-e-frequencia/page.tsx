'use client'
import Banner from "@/app/components/Banner/Banner";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import styles from "./boletins.module.css";
import Boletim from "@/app/components/Boletim/Boletim";
import Modal from "react-modal";
import logoboletim from "../../../../public/images/logoboletim.jpeg";

//MOCKS
const topIndice = [
  {
    nome: "top4a6",
    top: [
      { nome: "Escola Alegria", nota: 9.0 },
      { nome: "Escola Saber", nota: 8.5 },
      { nome: "Escola Progresso", nota: 7.2 },
      { nome: "Escola Futuro", nota: 6.8 },
      { nome: "Escola União", nota: 5.5 },
      { nome: "Escola Esperança", nota: 4.7 },
      { nome: "Escola Harmonia", nota: 4.5 },
      { nome: "Escola Conhecimento", nota: 3.8 },
      { nome: "Escola Ideal", nota: 3.2 },
      { nome: "Escola Superação", nota: 2.9 }
    ]
  },
  {
    nome: "top7a9",
    top: [
      { nome: "Escola Vencedores", nota: 9.8 },
      { nome: "Escola Progresso II", nota: 9.5 },
      { nome: "Escola Conquista", nota: 8.7 },
      { nome: "Escola Sabedoria", nota: 8.2 },
      { nome: "Escola União II", nota: 7.9 },
      { nome: "Escola Futuro II", nota: 7.5 },
      { nome: "Escola Esperança II", nota: 6.9 },
      { nome: "Escola Harmonia II", nota: 6.4 },
      { nome: "Escola Ideal II", nota: 5.7 },
      { nome: "Escola Superação II", nota: 5.1 }
    ]
  }
]

const minhasEscolasData = [
  { id: 1, nome: "Comandante Arnaldo Varella" }
];

const anosData = [2005, 2007, 2009, 2011, 2013];

const infoPorEscola = [
  {
    serie: "4ª a 6ª Série",
    info: [
      { ano: 2007, nome: "Comandante Arnaldo Varella", nota: 4.0 },
      { ano: 2013, nome: "Comandante Arnaldo Varella", nota: 0.0 }
    ]
  },
  {
    serie: "7ª a 9ª Série",
    info: [
      { ano: 2005, nome: "Comandante Arnaldo Varella", nota: 3.9 },
      { ano: 2007, nome: "Comandante Arnaldo Varella", nota: 4.4 },
      { ano: 2009, nome: "Comandante Arnaldo Varella", nota: 3.3 },
      { ano: 2011, nome: "Comandante Arnaldo Varella", nota: 3.9 },
      { ano: 2013, nome: "Comandante Arnaldo Varella", nota: 4.1 },
    ]
  }
]

const infoPorAno = [
  {
    serie: "4ª a 6ª Série",
    top: [
      { nome: "Glauber Rocha", nota: 9.5 },
      { nome: "Fernando Pessoa", nota: 9.2 },
      { nome: "Pablo Picasso", nota: 9.0 },
      { nome: "Marie Curie", nota: 8.8 },
      { nome: "Albert Einstein", nota: 8.7 },
      { nome: "Ada Lovelace", nota: 8.6 },
      { nome: "Leonardo da Vinci", nota: 8.5 },
      { nome: "Nelson Mandela", nota: 8.4 },
      { nome: "Isaac Newton", nota: 8.3 },
      { nome: "Rosa Parks", nota: 8.2 }
    ]
  },
  {
    serie: "7ª a 9ª Série",
    top: [
      { nome: "Ada Lovelace", nota: 9.8 },
      { nome: "Nelson Mandela", nota: 9.5 },
      { nome: "Marie Curie", nota: 9.3 },
      { nome: "Leonardo da Vinci", nota: 9.1 },
      { nome: "Albert Einstein", nota: 9.0 },
      { nome: "Rosa Parks", nota: 8.9 },
      { nome: "Mahatma Gandhi", nota: 8.7 },
      { nome: "Amelia Earhart", nota: 8.6 },
      { nome: "Stephen Hawking", nota: 8.4 },
      { nome: "Malala Yousafzai", nota: 8.2 }
    ]
  }
]
//FIM DOS MOCKS

const Boletins = () => {
  const [selectedTable, setSelectedTable] = useState<number>(1);
  const [escolaField, setEscolaField] = useState<string>("");
  const [anoField, setAnoField] = useState<string>("");
  const [selectField, setSelectField] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const matriculas = useAppSelector((state) => state.matriculas.matriculas);

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerBoletins">
        <h1>Boletins e Frequência</h1>
      </Banner>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>Boletim</h2>
          <p className={styles.text}>Pressione o botão "Consultar" do aluno que deseja conferir
            o boletim e frequência escolares.</p>
          {matriculas.length === 0 ?
            <h3 className={styles.title2}>No momento você não possui matrícula cadastrada.
              Acesse a página "Matrículas" e cadastre as informações do aluno para
              aproveitar todos os recursos disponíveis.</h3>
            :
            matriculas.map(({ nome, matricula }, i) => (
              <Boletim nome={nome} matricula={matricula} setModal={setIsOpen} />
            ))
          }
        </div>
        <div className={styles.top10}>
          <h3 className={styles.title2}>Top 10 do Índice de Desenvolvimento
            das Escolas do Município do Rio de Janeiro</h3>
          <p className={styles.text}> Acesse também informações sobre as escolas da rede municipal
            mais próximas a você selecionando o campo "Minhas Escolas" ou
            "Ano" abaixo.</p>
          <div className={styles.tableOptions}>
            <span className={styles.selectField}>
              <label htmlFor="" className={styles.label}>Minhas Escolas:</label>
              <select name="minhasEscolas" id="minhasEscolas" className={styles.select}
                value={escolaField}
                onChange={(e) => {
                  setEscolaField(e.target.value);
                  setAnoField("");
                  setSelectField(e.target.value);
                }}>
                <option value="">Selecione</option>
                {minhasEscolasData.map(escola => (
                  <option value={escola.nome} key={escola.id}>{escola.nome}</option>
                ))}
              </select>
            </span>
            <p className={`${styles.text} ${styles.ou}`}>ou</p>
            <span className={styles.selectField}>
              <label htmlFor="" className={styles.label}>Ano:</label>
              <select name="ano" id="ano" className={styles.select}
                value={anoField}
                onChange={(e) => {
                  setAnoField(e.target.value);
                  setEscolaField("");
                  setSelectField(e.target.value);
                }}>
                <option value="">Selecione</option>
                {anosData.map((ano, i) => (
                  <option value={ano} key={i}>{ano}</option>
                ))}
              </select>
            </span>
          </div>
          <div className={styles.tablesContainer}>
            <span className={selectedTable === 1 ? `${styles.tableSelect1} ${styles.tableSelectSelected}` : styles.tableSelect1} onClick={() => setSelectedTable(1)}>4ª a 6ª Série</span>
            <span className={selectedTable === 2 ? `${styles.tableSelect2} ${styles.tableSelectSelected}` : styles.tableSelect2} onClick={() => setSelectedTable(2)}>7ª a 9ª Série</span>
            <table className={styles.table}>
              <thead className={styles.tHead}>
                {selectField === "" ?
                  ""
                  : anoField === "" ?
                    <tr className={styles.tHeadRow}>
                      <th className={styles.tHeadCell1} rowSpan={4}>Ano</th>
                    </tr> : ""
                }
                <tr className={styles.tHeadRow}>
                  <th className={styles.tHeadCell1} rowSpan={4}>Escolas da Região</th>
                  <th className={styles.tHeadCell2}>IDEB</th>
                </tr>
                <tr className={styles.tHeadRow}>
                  <th className={styles.tHeadCell}>Nota Obtida</th>
                </tr>
              </thead>
              <tbody>
                {selectField === "" ? topIndice[selectedTable - 1].top.map(({ nome, nota }, i) => (
                  <tr className={styles.tRow} key={i}>
                    <th className={styles.tCell}>{nome}</th>
                    <th className={styles.tCell}>{nota}</th>
                  </tr>
                )) :
                  escolaField === "" ? infoPorAno[selectedTable - 1].top.map(({ nome, nota }, i) => (
                    <tr className={styles.tRow} key={i}>
                      <th className={styles.tCell}>{nome}</th>
                      <th className={styles.tCell}>{nota}</th>
                    </tr>
                  ))
                    :
                    infoPorEscola[selectedTable - 1].info.map(({ ano, nome, nota }, i) => (
                      <tr className={styles.tRow} key={i}>
                        <th className={styles.tCell}>{ano}</th>
                        <th className={styles.tCell}>{nome}</th>
                        <th className={styles.tCell}>{nota}</th>
                      </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '85%',
          height: '75%',
          paddingRight: 20,
          paddingLeft: 20,
        },
      }} isOpen={modalIsOpen}>
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
      </Modal>
    </div>
  )
}

export default Boletins;