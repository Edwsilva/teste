import { Escola } from "@/app/utils/types";
import styles from "./toptable.module.css";

type TopTableProps = {
  data: Escola[];
  selectField: string;
  anoField: string;
  escolaField: string;
  selectedTable: number;
}

const TopTable = ({ data, selectField, anoField, escolaField, selectedTable }: TopTableProps) => {
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
        {data.map(({ ano, nome, nota }: Escola, i: number) => (
          <tr className={styles.tRow} key={i}>
            {ano ? <th className={styles.tCell}>{ano}</th> : ""}
            {ano ? <th className={styles.tCell}>{escolaField}</th> : <th className={styles.tCell}>{nome}</th>}
            <th className={styles.tCell}>{nota}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TopTable;