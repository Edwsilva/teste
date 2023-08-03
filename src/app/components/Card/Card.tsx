import { ReactNode } from "react";
import styles from "./card.module.css";

type CardProps = {
    children: ReactNode;
    title: string;
    subtitle: string;
    bg?: "primary" | "primaryLight" | "pink";
}

const Card = ({children, title, subtitle, bg}: CardProps) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={`${styles.cardIcon} ${bg ? styles[bg] : ""}`}>
                {children}
            </div>
            <p className={styles.cardContent}>
                {subtitle}
            </p>
        </div>
    )
}

export default Card;