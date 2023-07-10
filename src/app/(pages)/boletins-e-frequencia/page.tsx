import Banner from "@/app/components/Banner/Banner";
import styles from "./boletins.module.css";

const Boletins = () => {
  return (
    <div className={styles.main}>
      <Banner type="overlaySM" banner="bannerDeclaracoes">
        <h1>Boletins e Frequência</h1>
      </Banner>
      <div className={styles.container}>
        <h2 className={styles.title}>Na Escola</h2>

      </div>
    </div>

  )
}

export default Boletins;
