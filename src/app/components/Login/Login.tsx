"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import userKeycloak from '../../../hooks/userHookKeycloak';
import { useState } from "react";
import { userAgent } from 'next/server';

const Login = () => {
  console.log('LOGINN');

  const [user, setUser] = useState('Login');
  const [autenticado, setAutenticado] = useState(false);
  const kc = async () => {
    try {
      console.log('BLOCO TRY');
      if (autenticado) {
        const token = userKeycloak.getToken();
        console.log('TOKEN ', token);
        console.log('UserName ', userKeycloak.getUsername());
        const role = await userKeycloak.hasRole(['admin', 'teste']);
        console.log('HasHole ', role);
        //return null
      }
      const authenticated = await userKeycloak.doInitialize.init({
        onLoad: 'login-required',
      });
      if (authenticated) {
        console.log('USER NAME ', user);
        setUser(userKeycloak.getUsername());
        console.log('CHANGED NAME ', user);
        setAutenticado(authenticated);
      }
      console.log('authenticated', authenticated);
      alert(authenticated ? 'authenticated' : 'not authenticated');
    } catch (error) {
      alert('failed to initialize');
    }
  };
  return (
    <button className={styles.button} onClick={() => kc()}>
      <BiSolidUserCircle className={styles.icon} />
      {user}
    </button>
  );
};

export default Login;
