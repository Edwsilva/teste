"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/../public/images/logoNovo.png";
import Login from "../Login/Login";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import { IoRestaurantOutline, IoSchoolOutline, IoDocumentTextOutline } from "react-icons/io5";
import { RiProfileLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import Error from "../Error/Error";
import { PiWarningCircleFill } from "react-icons/pi";

const links = [
  {
    id: 1,
    name: "Boletins e Frequência",
    href: "/boletins-e-frequencia",
    icon: <IoSchoolOutline size={25} className={styles.mobileIcon} />
  },
  {
    id: 2,
    name: "Calendário",
    href: "/calendario",
    icon: <BsCalendar3 size={25} className={styles.mobileIcon} />
  },
  {
    id: 3,
    name: "Cardápio",
    href: "/cardapio",
    icon: <IoRestaurantOutline size={25} className={styles.mobileIcon} />
  },
  {
    id: 4,
    name: "Declarações",
    href: "/declaracoes",
    icon: <IoDocumentTextOutline size={25} className={styles.mobileIcon} />
  },
  {
    id: 5,
    name: "Matrículas",
    href: "/matriculas",
    icon: <RiProfileLine size={25} className={styles.mobileIcon} />
  }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [responsiveLinksOpen, setResponsiveLinksOpen] = useState(false);
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const pathname = usePathname();

  const menuItemDelay = .25;

  function closeLinks() {
    setResponsiveLinksOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', closeLinks);
    return () => {
      document.removeEventListener('click', closeLinks);
    }
  })

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen])

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
          <Login setLoginState={setIsLogged} loginState={isLogged} />
        </div>

        {/* Medium Screens Navbar */}
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
          <Login setLoginState={setIsLogged} loginState={isLogged} />
        </div>

        {/* Mobile Navbar Button */}
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
      {/*Mobile Navbar*/}
      <div
        className={`${styles.menu} ${menuOpen === true ? styles.menuOpen : ""}`}
      >
        <div className={styles.menuContainer}>
          <Link href="/" className={styles.logoMobile} onClick={() => setMenuOpen(false)}>
            <Image className={styles.img} src={logo} alt="Logo" />
          </Link>
          <div className={`${styles.profile} ${menuOpen ? styles.menuOpenAnim : ""}`} style={{ animationDuration: `${menuItemDelay}s` }}>
            {isLogged ?
              <>
                <CgProfile size={40} />
                <div className={styles.profileInfo}>
                  <h1>Nome</h1>
                  <p>emaildousuario@gmail.com</p>
                </div>
              </>
              :
              ""
            }

          </div>
          <div className={isLogged ? styles.mobileLinks : `${styles.mobileLinks} ${styles.mobileLinksNotLogged}`}>
            {links.map((link, index) => (
              <Link
                className={`${styles.mobileLink} ${menuOpen ? styles.menuOpenAnim : ""}`}
                href={link.href}
                key={link.id}
                onClick={() => setMenuOpen(false)}
                style={{ animationDuration: `${(index + 2) * menuItemDelay}s` }}
              >
                {link.icon}{link.name}
              </Link>
            ))}
          </div>
          <div className={styles.logout}>
            {isLogged ?
              <button
                className={`${styles.logoutButton} ${menuOpen ? styles.menuOpenAnim : ""}`}
                style={{ animationDuration: `${(links.length + 1) * menuItemDelay}s` }}
                onClick={() => setIsLogged(false)}>
                <MdOutlineLogout size={25} className={styles.mobileIcon} /> Sair
              </button>
              :
              <Login mobile setLoginState={setIsLogged} loginState={isLogged} />
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
