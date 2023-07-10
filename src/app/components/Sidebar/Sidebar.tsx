'use client';
import styles from "./sidebar.module.css";
import matriculas from "../../data/mock.json";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";
import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <aside className={open === true ? `${styles.sidebar}` : `${styles.sidebar} ${styles.sidebarClose}`}>
                <div className={styles.sidebarContent}>
                    <h4>Matrículas Cadastradas:</h4>
                    <ul>
                        {matriculas.map(matricula => (
                            <li key={matricula.id}>{matricula.matricula}</li>
                        ))}
                    </ul>
                    <button className={styles.sidebarToggle} onClick={() => setOpen(!open)}>{open === true ? <BsCaretLeftFill size={30}/> : <BsCaretRightFill size={30}/>}</button>
                </div>
            </aside>

        </>

    )
}

export default Sidebar;