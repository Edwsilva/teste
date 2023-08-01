import Link from "next/link";
import Image from "next/image";
import logoPrefeitura from "../../../../public/images/logoPrefeitura.png";
import styles from "./footer.module.css";

// const footerLinks = [
//   [
//     { id: 1.1, name: "Boletins e Frequência", href: "/boletins-e-frequencia", },
//     { id: 1.2, name: "Calendário", href: "/calendario", },
//     { id: 1.3, name: "Cardápio", href: "/cardapio", },
//     { id: 1.4, name: "Declarações", href: "/declaracoes", },
//     { id: 1.5, name: "Matrículas", href: "/matriculas" }
//   ],
//   [
//     { id: 2.1, name: "info@meusite.com", href: "/#" },
//     { id: 2.2, name: "(11) 3456-7890", href: "/#" },
//   ],
//   [
//     { id: 3.1, name: "Política de Privacidade", href: "/#" },
//     { id: 3.2, name: "Termos e Condições", href: "/#" },
//     { id: 3.3, name: "Política de Cookies", href: "/#" },
//   ],
// ];

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
