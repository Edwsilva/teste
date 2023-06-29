"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logoNovo.png";
import Login from "../Login/Login";
import { useState } from "react";

const links = [
  {
    id: 1,
    name: "Sobre",
    href: "/sobre",
  },
  {
    id: 2,
    name: "Agende uma aula",
    href: "/agende-uma-aula",
  },
  {
    id: 3,
    name: "Pacotes",
    href: "/pacotes",
  },
  {
    id: 4,
    name: "Materiais",
    href: "/materiais",
  },
  {
    id: 5,
    name: "Contato",
    href: "/contato",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoLink}>
          <Link href="/" className={styles.logo}>
            <Image className={styles.img} src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <Link className={styles.link} href={link.href} key={link.id}>
              {link.name}
            </Link>
          ))}
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
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <Link
                className={`${styles.mobileLink} ${
                  menuOpen === true ? styles.menuOpenFirstTime : ""
                }`}
                href={link.href}
                key={link.id}
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
