import styles from "./sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h4>Matrículas Cadastradas:</h4>
            <ul>
                <li>123456789</li>
                <li>123456789</li>
                <li>123456789</li>
                <li>123456789</li>    
            </ul>    
        </aside>
    )
}

export default Sidebar;