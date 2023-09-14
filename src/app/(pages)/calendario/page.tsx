import Banner from "@/app/components/Banner/Banner";
import styles from "./calendario.module.css";
import Button from "@/app/components/Button/Button";
import Container from "@/app/components/Container/Container";
import Link from "next/link";
import { fetchUrl } from "@/app/api/cardapio";

const date = new Date();
const ano = date.getFullYear();

const Calendario = () => {

    return (
        <div className={styles.main}>
            <Banner type="overlaySM" banner="bannerCalendario">
                <h1>Calendário</h1>
            </Banner>
            <Container>
                <div className={styles.calendario}>
                    <h2 className={styles.title}>Calendário Escolar</h2>
                    <p className={styles.textI}>Atenção: Para visualizar o cardápio escolar,
                        será necessário habilitar os POP-UPS na barra de endereços do seu
                        navegador</p>
                    <p className={styles.textI}>Ano {ano}</p>
                    <Link href="https://educacao.prefeitura.rio/calendario/" target="_blank">
                        <Button text="Calendário Escolar" />
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Calendario;