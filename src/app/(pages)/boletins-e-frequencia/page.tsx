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
import { MinhasEscolas, TopIndices, BoletimDados } from "@/app/utils/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "@/app/components/Spinner/Spinner";
import { getMinhasEscolas, getTop10Escolas, getTop10EscolasPorAno, getTop10EscolasPorEscola } from "@/app/api/desenvolvimento";
import Error from "@/app/components/Error/Error";
import userHookKeycloak from '../../../hooks/userHookKeycloak';

const anos = [2005, 2007, 2009, 2011, 2013];

const Boletins = () => {
  const [selectedTable, setSelectedTable] = useState<number>(1);
  const [minhasEscolas, setMinhasEscolas] = useState<MinhasEscolas>([]);
  const [escolaField, setEscolaField] = useState<string>('');
  const [anoField, setAnoField] = useState<string>('');
  const [selectField, setSelectField] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [topIndices, setTopIndices] = useState<TopIndices>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorTable, setErrorTable] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // const [boletimImgTeste, setBoletimImgTeste] = useState<string>('');
  const [boletimDados, setBoletimDados] = useState<BoletimDados>();

  const dispatch = useDispatch<AppDispatch>();
  const matriculas = useAppSelector((state) => state.matriculas.matriculas);
  const isUserAuthenticated = useAppSelector(
    (state) => state.authUser.authenticated
  );

  const matriculasFetched = useAppSelector((state) => state.matriculas.fetched);

  async function fetchData() {
    try {
      await fetchMatriculas("96185899787");
      // await fetchDadosBoletim("2006126402611");
      // await fetchBoletim("2006126402611");
      dispatch(matriculasActions.setMatriculasFetched(true));
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  // useEffect(() => {
  //   async function getBoletim(){
  //     const data = await fetchBoletim("2006126402611");
  //     setBoletimImgTeste(data);
  //     setModalOpen(true);
  //   }
  //   getBoletim();
  //   console.log("FETCHBOLETIMEFFECT");
  //   fetchDadosBoletim("2006126402611");
  // },[]);

  if (!matriculasFetched || error) {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }
  
  useEffect(() => {
    getTop10Escolas()
    .then(res => {
      setTopIndices(res);
      setIsLoading(false);
      })
      .catch((err) => {
        setErrorTable(true);
        setIsLoading(false);
      })
      
      getMinhasEscolas()
      .then(res => setMinhasEscolas(res))
      .catch(err => launchToast({ msg: "Erro ao obter suas escolas.", type: "error" }));
    }, []);
    
    useEffect(() => {
      if (anoField !== "") {
        getTop10EscolasPorAno(anoField)
        .then(res => {
          setTopIndices(res[0].info);
          setErrorTable(false);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrorTable(true);
          setIsLoading(false);
        })
        setIsLoading(false);
      } else if (escolaField !== "") {
        getTop10EscolasPorEscola(escolaField)
        .then(res => {
          setTopIndices(res[0].info);
          setErrorTable(false);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrorTable(true);
          setIsLoading(false);
        });
      setIsLoading(false);
    } else {
      getTop10Escolas()
        .then((res) => {
          setTopIndices(res);
          setErrorTable(false);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrorTable(true);
          setIsLoading(false);
        });
    }
  }, [selectField]);

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
          {
            !isUserAuthenticated ? <Error type="warning" msg="Este serviço requer autenticação, efetue o login para ter acesso..."/> :
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
                    <BoletimCard data={matricula} setModal={setModalOpen} setBoletim={setBoletimDados} key={i} />
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
                  setIsLoading(true);
                  setEscolaField(e.target.value);
                  setSelectField(e.target.value);
                  setAnoField("");
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
                  setIsLoading(true);
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
              : errorTable ? <Error type="error" msg="Não foi possível carregar esta tabela, tente novamente mais tarde..." /> :
                <TopTable data={topIndices[selectedTable - 1].top}
                  selectField={selectField}
                  anoField={anoField}
                  escolaField={escolaField}
                  selectedTable={selectedTable} />
            }
          </div>
        </div>
      </Container>

      <Modal
        ariaHideApp={false}
        style={{
          content: {
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            minWidth: '380px',
            width: '80%',
            height: '75%',
            padding: 10,
            position: 'relative'
          },
        }}
        isOpen={modalOpen}>
        <Button p="p-10" text={<IoClose size={25} style={{ display: "flex", alignItems: "center" }} />} fn={() => setModalOpen(!modalOpen)} />
        {boletimDados ? <BoletimModal data={boletimDados}/> : <Spinner />}
        {/* <div dangerouslySetInnerHTML={{__html: boletimImgTeste}}></div> */}
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default Boletins;
