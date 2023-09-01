"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import userKeycloak from '../../../hooks/userHookKeycloak';

const Login = () => {
  console.log("LOGINN")
  // const keycloak = (callBack: any) => {
  //   callBack({ checkLoginIframe: false });
  // };
  // ().init({
  //     onLoad: initOptions.onLoad, checkLoginIframe: false
  //   });

  const kc = () => {
    console.log('TESTE NO LOGIN')
     userKeycloak.doInitialize.init({}).then((error) => console.log(error) );
  };
  return (
    <button className={styles.button} onClick={() => kc()}>
      <BiSolidUserCircle className={styles.icon} />
      Login
    </button>
  );
};

export default Login;
