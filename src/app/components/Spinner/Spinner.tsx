import styles from "./spinner.module.css";

type SpinnerProps = {
    boletim?: boolean;
}

const Spinner = ({boletim}: SpinnerProps) => {
    return (
        <div className={boletim ? styles.spinnerContainerBoletim : styles.spinnerContainer}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Spinner;