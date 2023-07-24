"use client"
import { Dispatch, SetStateAction } from "react";
import styles from "./button.module.css";

type ButtonProps = {
    text: string;
    fn?: () => void | Dispatch<SetStateAction<boolean>>;
    p?: "p-10";
    radius?: boolean;
}

const Button = ({ text, fn, p, radius }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${p ? styles.p10 : ""} ${radius ? styles.radius : ""}`} onClick={fn}>{text}</button>
    )
}

export default Button;