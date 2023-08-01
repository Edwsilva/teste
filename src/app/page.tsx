'use client'
import styles from "./page.module.css";
import Button from "./components/Button/Button";
import { BsCardList, BsCalendarDate } from "react-icons/bs";
import { IoRestaurantOutline, IoDocumentTextOutline } from "react-icons/io5";
import Banner from "./components/Banner/Banner";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <Banner type="overlay" banner="banner">
        <h1 className={styles.bannerTitle}>Portal do Aluno Carioca</h1>
        <p className={styles.bannerText}>
          Fique por dentro de tudo mesmo fora da escola
        </p>
        <Button text="Confira seu boletim" fn={() => router.push('/boletins-e-frequencia')}/>
      </Banner>
      <div className={styles.container}>
        <div className={styles.sectionB}>
          <div className={styles.sectionB1}>
            <h2 className={styles.title}>O que nós fazemos?</h2>
            <p className={styles.text}>
              O Portal do Aluno Carioca reúne diversos serviços direcionados
              ao aluno da rede municipal. Cadastre a matrícula de seu filho
              na página "Matrículas" para utilizar nossos serviços.
            </p>
            <Button text="Ir até Matrículas" fn={() => router.push('/matriculas')}/>
          </div>
          <div className={styles.sectionB2}>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Boletim</h3>
                <div className={styles.cardIcon}>
                  <BsCardList className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Confira o boletim e frequência escolares.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Calendário</h3>
                <div className={styles.cardIcon}>
                  <BsCalendarDate className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Veja o calendário escolar do ano letivo.
                </p>
              </div>
            </div>

            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Cardápio</h3>
                <div className={styles.cardIcon}>
                  <IoRestaurantOutline className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Confira o cardápio da escola.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Declarações</h3>
                <div className={styles.cardIcon}>
                  <IoDocumentTextOutline className={styles.icon} />
                </div>
                <p className={styles.cardContent}>
                  Emita a declaração de escolaridade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
