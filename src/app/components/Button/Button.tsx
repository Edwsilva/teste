"use client"
import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./button.module.css";

type ButtonProps = {
    text: ReactNode;
    fn?: () => void | Dispatch<SetStateAction<boolean>> | Promise<boolean> | Promise<void>;
    p?: "p-10";
}

const Button = ({ text, fn, p }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${p ? styles.p10 : ""}`} onClick={fn}>{text}</button>
    )
}

export default Button;