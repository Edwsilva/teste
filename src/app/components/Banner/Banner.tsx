import styles from "./banner.module.css";
import Button from "../Button/Button";

const Banner = () => {
  return (
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
    </div>

  );
};

export default Banner;