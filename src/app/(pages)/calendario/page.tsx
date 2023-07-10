import Banner from "@/app/components/Banner/Banner";
import styles from "./calendario.module.css";

const Calendario = () => {
  return (
    <div className={styles.main}>
        <Banner type="overlaySM" banner="bannerDeclaracoes">
            <h1>Calendário</h1>
        </Banner>
        <div className={styles.container}>
            <h2 className={styles.title}>Calendário Escolar</h2>
        </div>
    </div>
)
}

export default Calendario;