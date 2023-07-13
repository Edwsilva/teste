import Banner from "@/app/components/Banner/Banner";
import styles from "./calendario.module.css";
import Button from "@/app/components/Button/Button";

const ano = "2021";

const Calendario = () => {
    return (
        <div className={styles.main}>
            <Banner type="overlaySM" banner="bannerCalendario">
                <h1>Calendário</h1>
            </Banner>
            <div className={styles.container}>
                <h2 className={styles.title}>Calendário Escolar</h2>
                <p className={styles.textI}>Atenção: Para visualizar o cardápio escolar,
                    será necessário habilitar os POP-UPS na barra de endereços do seu
                    navegador</p>
                <p className={styles.textI}>Ano {ano}</p>
                <Button text="Calendário Escolar"/>
            </div>
        </div>
    )
}

export default Calendario;