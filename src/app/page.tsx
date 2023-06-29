import styles from "./page.module.css";
import Button from "./components/Button/Button";
import { HiBookOpen } from "react-icons/hi";
import CarouselExample from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.overlay}>
            <div className={styles.bannerWritten}>
              <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>Boletim Escolar Carioca</h1>
                <p className={styles.text}>
                  Fique por dentro de tudo mesmo fora da escola
                </p>
                <Button text="Agende uma aula" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionB}>
          <div className={styles.sectionB1}>
            <h2 className={styles.title}>O que nós ensinamos?</h2>
            <p className={styles.text}>
              Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil,
              basta clicar em "Editar texto" ou clicar duas vezes sobre mim para
              editar o conteúdo, a fonte e mais.
            </p>
            <Button text="Sobre nós" />
          </div>
          <div className={styles.sectionB2}>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Português</h3>
                <div className={styles.cardIcon}>
                  <HiBookOpen className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Sou um parágrafo. Clique aqui para adicionar e editar seu
                  texto. Compartilhe sua história.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Português</h3>
                <div className={styles.cardIcon}>
                  <HiBookOpen className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Sou um parágrafo. Clique aqui para adicionar e editar seu
                  texto. Compartilhe sua história.
                </p>
              </div>
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Português</h3>
                <div className={styles.cardIcon}>
                  <HiBookOpen className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Sou um parágrafo. Clique aqui para adicionar e editar seu
                  texto. Compartilhe sua história.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Português</h3>
                <div className={styles.cardIcon}>
                  <HiBookOpen className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Sou um parágrafo. Clique aqui para adicionar e editar seu
                  texto. Compartilhe sua história.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container}>
          <div className={styles.sectionC}>
            <div className={styles.sectionC1}>
              <h2 className={styles.title}>Depoimentos</h2>
              <p className={styles.text}>
                Sou um parágrafo. Clique aqui para adicionar e editar o texto.
              </p>
            </div>
            <div className={styles.sectionC2}>
              <CarouselExample />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
