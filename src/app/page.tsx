import styles from "./page.module.css";
import Button from "./components/Button/Button";
import { BsCardList, BsCalendarDate } from "react-icons/bs";
import { IoRestaurantOutline, IoDocumentTextOutline } from "react-icons/io5";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Link from "next/link";
//import initKeycloak from '../hooks/userHookKeycloak';

export default function Home() {

  return (
    <main className={styles.main}>
      <Banner type="overlaySM" banner="banner">
        <h1 className={styles.bannerTitle}>Portal do Aluno Carioca</h1>
        <p className={styles.bannerText}>
          Fique por dentro de tudo mesmo fora da escola
        </p>
        <Link href="/boletins-e-frequencia">
          <Button text="Confira seu boletim" />
        </Link>
      </Banner>
      <div className={styles.container}>
        <div className={styles.sectionB}>
          <div className={styles.sectionB1}>
            <h2 className={styles.title}>O que nós fazemos?</h2>
            <p className={styles.text}>
              O Portal do Aluno Carioca reúne diversos serviços direcionados ao
              aluno da rede municipal. Cadastre a matrícula de seu filho na
              página "Matrículas" para utilizar nossos serviços.
            </p>

            <Link href="/matriculas">
              <Button text="Ir até Matrículas" />
            </Link>
          </div>
          <div className={styles.sectionB2}>
            <div className={styles.cardContainer}>
              <Card
                title="Boletim"
                subtitle="Confira o boletim e frequência escolares."
              >
                <BsCardList className={styles.icon} />
              </Card>
              <Card
                title="Calendário"
                subtitle="Veja o calendário escolar do ano letivo."
                bg="primary"
              >
                <BsCalendarDate className={styles.icon} />
              </Card>
            </div>
            <div className={styles.cardContainer}>
              <Card
                title="Cardápio"
                subtitle="Confira o cardápio da escola."
                bg="primaryLight"
              >
                <IoRestaurantOutline className={styles.icon} />
              </Card>
              <Card
                title="Declarações"
                subtitle="Emita a declaração de escolaridade."
                bg="pink"
              >
                <IoDocumentTextOutline className={styles.icon} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
