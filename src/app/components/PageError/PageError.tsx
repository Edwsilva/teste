import styles from "./pagerror.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "../Button/Button";
import imgSrc from "@/../public/images/errorImg.png";

const PageError = ({ error, reset }: { error: Error, reset: () => void }) => {
  return (
    <Container>
      <div className={styles.error}>
        <div className={styles.errorContent}>
          <div className={styles.errorText}>
            <h1 className={styles.errorTitle}>Ops!</h1>
            <h2 className={styles.errorTitle2}>Algo deu errado,<br /> desculpe pelo transtorno.</h2>
            <p className={styles.errorSubtitle}>Mensagem do erro: "{error.message}"</p>
            <Button text="Tente Novamente" fn={() => reset()} />
          </div>
          <div className={styles.errorImg}>
            <Image className={styles.img} src={imgSrc} alt="Mera ilustração sobre o erro." />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PageError;