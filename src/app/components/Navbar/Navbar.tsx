"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../public/images/logoNovo.png";
import Login from "../Login/Login";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const links = [
  {
    id: 1,
    name: "Boletins e Frequência",
    href: "/boletins-e-frequencia",
  },
  {
    id: 2,
    name: "Calendário",
    href: "/calendario",
  },
  {
    id: 3,
    name: "Cardápio",
    href: "/cardapio",
  },
  {
    id: 4,
    name: "Declarações",
    href: "/declaracoes",
  },
  {
    id: 5,
    name: "Matrículas",
    href: "/matriculas",
  }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [responsiveLinksOpen, setResponsiveLinksOpen] = useState(false);
  const pathname = usePathname();

  function closeLinks(){
    setResponsiveLinksOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', closeLinks);
    return () => {
      document.removeEventListener('click', closeLinks);
    }
  })

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoLink}>
          <Link href="/" className={styles.logo}>
            <Image className={styles.img} src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.links}>
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link className={isActive ? styles.linkActive : styles.link} href={link.href} key={link.id}>
                {link.name}
              </Link>
            )
          })
          }
          <Login />
        </div>
        <div className={styles.responsiveLinks}>
          <div className={styles.responsiveLinksContainer}>
            <button className={responsiveLinksOpen === true ? `${styles.linksButton} ${styles.linksButtonActive}` : styles.linksButton} onClick={() => setResponsiveLinksOpen(!responsiveLinksOpen)}>
              <p>Links</p><IoMdArrowDropdown />
            </button>
            <div className={responsiveLinksOpen ? styles.rLinksOpen : styles.rLinks}>
              {links.map((link, i) => (
                <Link className={styles.rLink} href={link.href} key={`${link} - ${i}`}>{link.name}</Link>
              ))}
            </div>
          </div>
          <Login />
        </div>

        <div className={styles.mobileNav}>
          <button
            className={`${styles.iconButton} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={styles.menuIcon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`${styles.menu} ${menuOpen === true ? styles.menuOpen : ""}`}
      >
        <div className={styles.menuContainer}>
          <Link href="/" className={styles.logoMobile} onClick={() => setMenuOpen(false)}>
            <Image className={styles.img} src={logo} alt="Logo" />
          </Link>
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <Link
                className={`${styles.mobileLink} ${menuOpen === true ? styles.menuOpenFirstTime : ""
                  }`}
                href={link.href}
                key={link.id}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
