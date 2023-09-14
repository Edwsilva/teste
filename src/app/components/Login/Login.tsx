"use client";
import { useState } from "react";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import {MdOutlineLogout} from "react-icons/md";

const name = "Eduardo Cassano de Sá"

const Login = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <>
      {
        isLogged ?
          <div className={styles.logged}>
            <span className={styles.name}>Olá, {name.slice(0, name.indexOf(" "))}</span>
            <button className={styles.logout}><MdOutlineLogout size={25} onClick={() => setIsLogged(false)}/></button>
          </div>
          :
          <button
            className={styles.button}
            onClick={() => setIsLogged(true)}
          >
            <BiSolidUserCircle className={styles.icon} />
            Login
          </button>
      }
    </>
  );
};

export default Login;
