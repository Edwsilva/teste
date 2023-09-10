"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import userKeycloak from '../../../hooks/userHookKeycloak';
import { useState } from "react";


const Login = () => {
  console.log("LOGINN")
  const teste = true
  const [autenticado, setAutenticado] = useState(false)
  // const keycloak = (callBack: any) => {
  //   callBack({ checkLoginIframe: false });
  // };
  // ().init({
  //     onLoad: initOptions.onLoad, checkLoginIframe: false
  //   });

  const kc = async () => {
    try {
      console.log("BLOCO TRY")
      if(autenticado) {
        const token = userKeycloak.getToken()

        console.log("TOKEN ", token)
        console.log("UserName ", userKeycloak.getUsername())
        const role = await userKeycloak.hasRole(["admin", "teste"])
        console.log("HasHole ", role)
        //return null
      }
      const authenticated = await userKeycloak.doInitialize.init({onLoad: "login-required"})
      if(authenticated) {
        alert(userKeycloak.getToken())
      }
      console.log("authenticated", authenticated)
      alert(authenticated ? 'authenticated' : 'not authenticated');
      setAutenticado(authenticated)
    } catch (error) {
      alert('failed to initialize');
    }
  
  };
  return (
    <button className={styles.button} onClick={() => kc()}>
      <BiSolidUserCircle className={styles.icon} />
      Login
    </button>
  );
};

export default Login;
