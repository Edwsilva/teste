import styles from "./matricula.module.css";
import { matriculasActions } from "@/redux/features/matriculas-slice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AppDispatch } from "@/redux/store";
import { deleteMatricula, getMinhasMatriculas } from "@/app/api/matriculas";
import { launchToast } from "@/app/utils/utils";

type Props = {
  id: number;
  i: number;
  nome: string;
  matricula: number;
  dropdownVisible: boolean;
  toggle: (i: number, remove?: boolean) => void;
  dispatch: AppDispatch;
}

const Matricula = ({ id, i, nome, matricula, dropdownVisible, toggle, dispatch }: Props) => {
  return (
    <span className={styles.matricula}>
      <span className={styles.icon} onClick={() => toggle(i)}>
        <BsThreeDotsVertical size={20} />
      </span>
      <ul className={`${styles.dropdown} ${dropdownVisible ? styles.dropdownVisible : ''}`}>
        <li className={styles.dropdownItem}>
          <button className={styles.dropdownButton} onClick={async () => {
            const matriculaDeleted = await deleteMatricula(id);
            if (matriculaDeleted.success) {
              const newMatriculas = await getMinhasMatriculas();
              dispatch(matriculasActions.setMinhasMatriculas(newMatriculas));
              toggle(i, true);
              launchToast({ msg: matriculaDeleted.msg, type: "success" });
            } else {
              launchToast({ msg: matriculaDeleted.msg, type: "error" });
            }
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