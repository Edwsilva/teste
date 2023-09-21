"use client";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";

const name = "Eduardo Cassano de Sá"

type LoginProps = {
  mobile?: boolean;
  menuOpen?: boolean;
  linksLength?: number;
  delay?: number;
  loginState: boolean;
  setLoginState: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ mobile, menuOpen ,linksLength, delay, loginState, setLoginState }: LoginProps) => {

  const animStyle = linksLength && delay ? {animationDuration: `${linksLength * delay}s`} : {};

  return (
    <>
      {
        loginState ?
          <div className={styles.logged}>
            <span className={styles.name}>Olá, {name.slice(0, name.indexOf(" "))}</span>
            <button className={styles.logout}><MdOutlineLogout size={25} onClick={() => setLoginState(false)} /></button>
          </div>
          :
          <button
            style={animStyle}
            className={mobile ? `${styles.button} ${styles.buttonMobile} ${menuOpen ? styles.menuOpenAnim : ""}` : styles.button}
            onClick={() => setLoginState(true)}
          >
            <BiSolidUserCircle className={styles.icon} />
            Login
          </button>
      }
    </>
  );
};

export default Login;
