import Link from "next/link";
import Image from "next/image";
import logoPrefeitura from "@/../public/images/logoPrefeitura.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Image className={styles.img} width={100} src={logoPrefeitura} alt="Logo" />
          </Link>
          <p className={styles.text}>Prefeitura da Cidade do Rio de Janeiro Sede: Rua Afonso Cavalcanti, 455 - Cidade Nova - 20211-110</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
