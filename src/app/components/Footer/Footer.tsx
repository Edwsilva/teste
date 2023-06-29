import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logoNovo.png";
import styles from "./footer.module.css";

const footerLinks = [
  [
    { id: 1.1, name: "Sobre", href: "/sobre" },
    { id: 1.2, name: "Agende uma aula", href: "/agende-uma-aula" },
    { id: 1.3, name: "Pacotes", href: "/pacotes" },
    { id: 1.4, name: "Materiais", href: "materiais" },
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
        <Link href="/" className={styles.logo}>
          <Image width={200} src={logo} alt="Logo" />
        </Link>
        <div className={styles.footerItems}>
          {footerLinks.map((item, i) => (
            <ul className={styles.footerItem} key={i}>
              {item.map((subitem) => (
                <Link className={styles.subitem} href={subitem.href} key={subitem.id}>
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
