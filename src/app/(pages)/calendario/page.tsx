import Banner from "@/app/components/Banner/Banner";
import styles from "./calendario.module.css";
import Button from "@/app/components/Button/Button";
import Container from "@/app/components/Container/Container";
import Link from "next/link";
import puppeteer from "puppeteer";

const ano = "2023";

const Calendario = async () => {
    const data = await getUrl();

    console.log("HREF", data);
    return (
        <div className={styles.main}>
            <Banner type="overlaySM" banner="bannerCalendario">
                <h1>Calendário</h1>
            </Banner>
            <Container>
                {/* <Teste /> */}
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

const getUrl = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://educacao.prefeitura.rio/cardapio/');

    const element = await page.waitForSelector(`.ListaMaisBuscados`);

    const href = await page.evaluate(() => {
        const firstLink = document.querySelector('.ListaMaisBuscados li:first-child a');
        return firstLink ? firstLink.getAttribute('href') : null;
    });

    await browser.close();

    return href;
}

export default Calendario;