'use client'
import Banner from "@/app/components/Banner/Banner";
import { useEffect, useState } from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import styles from "./boletins.module.css";
import BoletimCard from "@/app/components/BoletimCard/BoletimCard";
import Modal from "react-modal";
import Button from "@/app/components/Button/Button";
import { IoClose } from "react-icons/io5";
import TopTable from "@/app/components/TopTable/TopTable";
import BoletimModal from "@/app/components/BoletimModal/BoletimModal";
import Container from "@/app/components/Container/Container";
import { useDispatch } from "react-redux";
import { matriculasActions } from "@/redux/features/matriculas-slice";
import { fetchMatriculas, launchToast } from "@/app/utils/utils";
import { MinhasEscolas, TopIndices } from "@/app/utils/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "@/app/components/Spinner/Spinner";
import { getMinhasEscolas, getTop10Escolas } from "@/app/api/desenvolvimento";

//MOCKS
const anos = [2005, 2007, 2009, 2011, 2013];

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

// const getTopIndices = async () => {
//   const res = await fetch("http://localhost:3002/topIndice");
//   const data = await res.json();

//   return data;
// }

const Boletins = () => {
  const [selectedTable, setSelectedTable] = useState<number>(1);
  const [minhasEscolas, setMinhasEscolas] = useState<MinhasEscolas>([]);
  const [escolaField, setEscolaField] = useState<string>("");
  const [anoField, setAnoField] = useState<string>("");
  const [selectField, setSelectField] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [topIndices, setTopIndices] = useState<TopIndices>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();
  const matriculas = useAppSelector((state) => state.matriculas.matriculas);
  const matriculasFetched = useAppSelector((state) => state.matriculas.fetched);

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

  useEffect(() => {
    setTimeout(() => {
      getTop10Escolas().then(res => {
        setTopIndices(res);
        setIsLoading(false);
      })
    }, 3000);
    getMinhasEscolas().then(res => setMinhasEscolas(res));
    // getAnosData().then(res => setAnosData(res));
  }, []);

  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerBoletins">
        <h1>Boletins e Frequência</h1>
      </Banner>
      <Container>
        <div className={styles.info}>
          <h2 className={styles.title}>Boletim</h2>
          <p className={styles.text}>Pressione o botão "Consultar" do aluno que deseja conferir
            o boletim e frequência escolares.</p>
          {!matriculasFetched ? <Spinner /> : matriculas.length === 0 ?
            <h3 className={styles.title2}>No momento você não possui matrícula cadastrada.
              Acesse a página "Matrículas" e cadastre as informações do aluno para
              aproveitar todos os recursos disponíveis.</h3>
            :
            matriculas.map(({ nome, matricula }, i) => (
              <BoletimCard nome={nome} matricula={matricula} setModal={setIsOpen} key={i} />
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
                {minhasEscolas.map(escola => (
                  <option value={escola.nome} key={escola.id}>{escola.nome}</option>
                ))}
              </select>
            </span>
            <span>
              <p className={`${styles.text} ${styles.or}`}>ou</p>
            </span>
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
                {anos.map((ano, i) => (
                  <option value={ano} key={i}>{ano}</option>
                ))}
              </select>
            </span>
          </div>
          <div className={styles.tablesContainer}>
            <span className={selectedTable === 1 ? `${styles.tableSelect1} ${styles.tableSelectSelected}` : styles.tableSelect1} onClick={() => setSelectedTable(1)}>4ª a 6ª Série</span>
            <span className={selectedTable === 2 ? `${styles.tableSelect2} ${styles.tableSelectSelected}` : styles.tableSelect2} onClick={() => setSelectedTable(2)}>7ª a 9ª Série</span>
            {isLoading ?
              <Spinner />
              :
              <TopTable data={selectField === "" ? topIndices[selectedTable - 1].top : escolaField === "" ? infoPorAno[selectedTable - 1].top : infoPorEscola[selectedTable - 1].info}
                selectField={selectField}
                anoField={anoField}
                escolaField={escolaField}
                selectedTable={selectedTable} />}
          </div>
        </div>
      </Container>

      <Modal ariaHideApp={false} style={{
        content: {
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          minWidth: '380px',
          width: '75%',
          height: '75%',
          padding: 10,
          position: 'relative'
        },
      }} isOpen={modalIsOpen}>
        <Button p="p-10" text={<IoClose size={25} style={{ display: "flex", alignItems: "center" }} />} fn={() => setIsOpen(!modalIsOpen)} />
        <BoletimModal />
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Boletins;
