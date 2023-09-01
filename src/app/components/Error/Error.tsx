import styles from "./error.module.css";
import { BiSolidError } from "react-icons/bi";

type ErrorProps = {
    msg: string;
}

const Error = ({ msg }: ErrorProps) => {
    return (
        <div className={styles.error}>
            <BiSolidError className={styles.errorIcon} />
            <p className={styles.errorText}>{msg}</p>
        </div>
    )
}

export default Error;