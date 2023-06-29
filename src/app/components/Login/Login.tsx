"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";

const Login = () => {
  return (
    <button
      className={styles.button}
      onClick={() => console.log("Login Component")}
    >
      <BiSolidUserCircle className={styles.icon}/>
      Login
    </button>
  );
};

export default Login;
