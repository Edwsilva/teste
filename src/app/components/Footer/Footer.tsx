import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logoNovo.png";
import styles from "./footer.module.css";

const footerLinks = [
  [
    { id: 1.1, name: "Boletins e Frequência", href: "/boletins-e-frequencia", },
    { id: 1.2, name: "Calendário", href: "/calendario", },
    { id: 1.3, name: "Cardápio", href: "/cardapio", },
    { id: 1.4, name: "Declarações", href: "/declaracoes",},
  ],
  [
    { id: 2.1, name: "info@meusite.com", href: "/#" },
    { id: 2.2, name: "(11) 3456-7890", href: "/#" },
  ],
  [
    { id: 3.1, name: "Política de Privacidade", href: "/#" },
    { id: 3.2, name: "Termos e Condições", href: "/#" },
    { id: 3.3, name: "Política de Cookies", href: "/#" },
  ],
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoLink}>
          <Link href="/" className={styles.logo}>
            <Image className={styles.img} width={200} src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.footerItems}>
          {footerLinks.map((item, i) => (
            <ul className={styles.footerItem} key={i}>
              {item.map((subitem) => (
                <Link
                  className={styles.subitem}
                  href={subitem.href}
                  key={subitem.id}
                >
                  {subitem.name}
                </Link>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
