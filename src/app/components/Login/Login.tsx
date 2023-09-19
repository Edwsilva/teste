"use client";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";

const name = "Eduardo Cassano de Sá"

type LoginProps = {
  mobile?: boolean;
  loginState: boolean;
  setLoginState: Dispatch<SetStateAction<boolean>>;
}

//Implementar prop driling Navbar <- Login

const Login = ({ mobile, loginState, setLoginState }: LoginProps) => {
  // const [isLogged, setIsLogged] = useState<boolean>(false);
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
            className={mobile ? `${styles.button} ${styles.buttonMobile}` : styles.button}
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
