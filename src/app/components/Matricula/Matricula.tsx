import styles from "./matricula.module.css";
import { removeMatricula } from "@/redux/features/matriculas-slice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AppDispatch } from "@/redux/store";
import { Dispatch, SetStateAction } from "react";

type Props = {
  i: number;
  nome: string;
  matricula: string;
  dropdownVisible: boolean;
  toggle: (i: number, remove?: boolean) => void;
  dispatch: AppDispatch;
}

const Matricula = ({ i, nome, matricula, dropdownVisible, toggle, dispatch }: Props) => {
  return (
    <span className={styles.matricula}>
      <span className={styles.icon} onClick={() => toggle(i)}>
        <BsThreeDotsVertical size={20} />
      </span>
      <ul className={`${styles.dropdown} ${dropdownVisible ? styles.dropdownVisible : ''}`}>
        <li className={styles.dropdownItem}>
          <button className={styles.dropdownButton} onClick={() => {
            dispatch(removeMatricula({ nome, matricula }));
            toggle(i, true);
          }
          }>Remover</button>
        </li>
      </ul>
      <h4 className={styles.matriculaTitle}>{nome}</h4>
      <p className={styles.matriculaNumber}>{matricula}</p>
    </span>
  )
}

export default Matricula;