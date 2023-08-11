import Container from "../Container/Container";
import styles from "./loading.module.css";

type PlaceholderProps = {
  type: "home" | "ordinary";
}

const Placeholder = ({ type }: PlaceholderProps) => {
  return (
    <div className={styles.loading}>
      <div className={`${styles.banner} ${styles[`banner-${type}`]}`}></div>
      <Container>
        {type === "home" ?
          <div className={styles.sectionB}>
            <div className={styles.sectionB1}>
              <div className={styles.title2}></div>
              <div className={styles.text2}>
                <span className={styles.textCell}></span>
                <span className={styles.textCell}></span>
                <span className={styles.textCell2}></span>
              </div>
              <div className={styles.button}></div>
            </div>
            <div className={styles.sectionB2}>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <div className={styles.title2}></div>
                  <div className={styles.cardIcon}></div>
                  <div className={styles.subtitle}></div>
                </div>
                <div className={styles.card}>
                  <div className={styles.title2}></div>
                  <div className={styles.cardIcon}></div>
                  <div className={styles.subtitle}></div>
                </div>
              </div>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <div className={styles.title2}></div>
                  <div className={styles.cardIcon}></div>
                  <div className={styles.subtitle}></div>
                </div>
                <div className={styles.card}>
                  <div className={styles.title2}></div>
                  <div className={styles.cardIcon}></div>
                  <div className={styles.subtitle}></div>
                </div>
              </div>
            </div>
          </div>
          :
          <div className={styles.pageContent}>
            <div className={styles.title}></div>
            <div className={styles.text}>
              <span className={styles.textCell}></span>
              <span className={styles.textCell}></span>
              <span className={styles.textCell2}></span>
            </div>
            <div className={styles.title}></div>
            <div className={styles.text}>
              <span className={styles.textCell}></span>
              <span className={styles.textCell}></span>
              <span className={styles.textCell2}></span>
            </div>
          </div>
        }
      </Container >
    </div >
  )
}

export default Placeholder;