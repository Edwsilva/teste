'use client'
import Banner from "@/app/components/Banner/Banner";
import { useState } from "react";
import styles from "./boletins.module.css";

const top4a6 = [
  { nome: "Ana Souza", nota: 9.0 },
  { nome: "João Silva", nota: 8.5 },
  { nome: "Maria Santos", nota: 7.2 },
  { nome: "Carlos Ferreira", nota: 6.8 },
  { nome: "Pedro Almeida", nota: 5.5 },
  { nome: "Laura Oliveira", nota: 4.7 },
  { nome: "Márcio Costa", nota: 4.5 },
  { nome: "Fernanda Mendes", nota: 3.8 },
  { nome: "Ricardo Souza", nota: 3.2 },
  { nome: "Lívia Alves", nota: 2.9 }
];

const top7a9 = [
  { nome: "Joana Mendes", nota: 9.8 },
  { nome: "Lucas Oliveira", nota: 9.5 },
  { nome: "Amanda Rodrigues", nota: 8.7 },
  { nome: "Rafaela Costa", nota: 8.2 },
  { nome: "Gustavo Santos", nota: 7.9 },
  { nome: "Marina Almeida", nota: 7.5 },
  { nome: "Rodrigo Ferreira", nota: 6.9 },
  { nome: "Isabela Souza", nota: 6.4 },
  { nome: "Luciana Silva", nota: 5.7 },
  { nome: "Marcos Castro", nota: 5.1 }
];

const Boletins = () => {
  const [selectedTable, setSelectedTable] = useState(1);
  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerBoletins">
        <h1>Boletins e Frequência</h1>
      </Banner>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>Na Escola</h2>
          <p className={styles.text}>Cadastre a matrícula de seu filho
            (estudante da rede municipal) na página "Matrículas" para
            conferir o seu boletim e histórico escolar. Acesse também
            informações sobre as escolas da rede municipal mais
            próximas a você.</p>
        </div>
        <div className={styles.top10}>
          <h3 className={styles.title2}>Top 10 do Índice de Desenvolvimento
            das Escolas do Município do Rio de Janeiro</h3>
          <div className={styles.tablesContainer}>
            <span className={selectedTable === 1 ? `${styles.tableSelect1} ${styles.tableSelectSelected}` : styles.tableSelect1} onClick={() => setSelectedTable(1)}>4ª a 6ª Série</span>
            <span className={selectedTable === 2 ? `${styles.tableSelect2} ${styles.tableSelectSelected}` : styles.tableSelect2} onClick={() => setSelectedTable(2)}>7ª a 9ª Série</span>
            <table className={styles.table}>
              <thead className={styles.tHead}>
                <tr className={styles.tHeadRow}>
                  <th className={styles.tHeadCell1} rowSpan={4}>Escolas da Região</th>
                  <th className={styles.tHeadCell2}>IDEB</th>
                </tr>
                <tr className={styles.tHeadRow}>
                  <th className={styles.tHeadCell}>Nota Obtida</th>
                </tr>
              </thead>
              <tbody>
                {selectedTable === 1 ? top4a6.map(({ nome, nota }, i) => (
                  <tr className={styles.tRow} key={i}>
                    <th className={styles.tCell}>{nome}</th>
                    <th className={styles.tCell}>{nota}</th>
                  </tr>
                )) : top7a9.map(({ nome, nota }, i) => (
                  <tr className={styles.tRow} key={i}>
                    <th className={styles.tCell}>{nome}</th>
                    <th className={styles.tCell}>{nota}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Boletins;
