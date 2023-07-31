import styles from "./toptable.module.css";

type Escola = {
  nome: string;
  nota: number;
};

type TopIndice = {
  nome: string;
  top: Escola[];
};

type TopIndices = TopIndice[];

type TopTableProps = {
  data: Escola[];
  selectField: string;
  anoField: string;
  escolaField: string;
  selectedTable: number;
}

// const getTopIndices = async () => {
//   const res = await fetch("http://localhost:3002/topIndice", { next: { revalidate: 172800 } });
//   const data = await res.json();

//   return data;
// }

const TopTable = ({ data, selectField, anoField, escolaField, selectedTable }: TopTableProps) => {
  console.log(data);
  return (
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
        {selectField === "" ? data.map(({ nome, nota }: Escola, i: number) => (
          <tr className={styles.tRow} key={i}>
            <th className={styles.tCell}>{nome}</th>
            <th className={styles.tCell}>{nota}</th>
          </tr>
        )) :
          escolaField === "" ? data.map(({ nome, nota }: Escola, i: number) => (
            <tr className={styles.tRow} key={i}>
              <th className={styles.tCell}>{nome}</th>
              <th className={styles.tCell}>{nota}</th>
            </tr>
          ))
            : ""
          // infoPorEscola[selectedTable - 1].info.map(({ ano, nome, nota }, i) => (
          //   <tr className={styles.tRow} key={i}>
          //     <th className={styles.tCell}>{ano}</th>
          //     <th className={styles.tCell}>{nome}</th>
          //     <th className={styles.tCell}>{nota}</th>
          //   </tr>
          // ))
        }
      </tbody>
    </table>
  )
}

export default TopTable;