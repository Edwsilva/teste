import styles from "./error.module.css";
import { BiSolidError } from "react-icons/bi";
import {PiWarningCircleFill} from "react-icons/pi";

type ErrorProps = {
    type: "error" | "warning";
    msg: string;
    boletim?: boolean;
}

const Error = ({ type, msg, boletim }: ErrorProps) => {
    return (
        <div className={boletim ? styles.errorBoletim : styles.error}>
            {type === "error" ? <BiSolidError className={styles.errorIcon} /> : <PiWarningCircleFill className={styles.warnIcon} />}
            <p className={styles.errorText}>{msg}</p>
        </div>
    )
}

export default Error;