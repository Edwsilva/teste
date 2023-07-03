"use client"
import styles from "./button.module.css";

type ButtonProps = {
    text: string;
    fn?: () => void;
}

const Button = ({text, fn}: ButtonProps) => {
    return (
        <button className={styles.button} onClick={fn}>{text}</button>
    )
}

export default Button;