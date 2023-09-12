"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";
import userKeycloak from '../../../hooks/userHookKeycloak';
import { useState, useEffect } from 'react';
import { userAgent } from 'next/server';

//  email: keycloak.tokenParsed?.email,
//           // @ts-ignore
//           name: keycloak.tokenParsed?.name,
//           // @ts-ignore
//           preferred_username: keycloak.tokenParsed?.preferred_username,

const Login = () => {
  const [user, setUser] = useState('Login');
  const [userIsAuthenticated, setIsAuthenticated] = useState(false);

  const authenticateUser = async () => {
    // Verifique se o usuário está autenticado (por exemplo, com base em um token válido)
    /* Verifique a autenticação aqui */
    console.log('ESTOU NO authenticateUser');
    const authenticated = await userKeycloak.doInitialize.init({
      onLoad: 'login-required',
    });
    const userIsAuthenticated = authenticated;
    setIsAuthenticated(userIsAuthenticated);
  };

  // useEffect(() => {
  //   // Chame a função para verificar a autenticação do usuário quando o componente for montado
  //   authenticateUser();
  // }, [userIsAuthenticated]);

  const kc = async () => {
    try {
      console.log('BLOCO TRY');
      // if (autenticado) {
      //   const token = userKeycloak.getToken();
      //   console.log('TOKEN ', token);
      //   console.log('UserName ', userKeycloak.getUsername());
      //   const role = await userKeycloak.hasRole(['admin', 'teste']);
      //   console.log('HasHole ', role);
      //   //return null
      // }
      const authenticated = await userKeycloak.doInitialize.init({
        onLoad: 'login-required',
      });
      // if (authenticated) {
      //   console.log('USER NAME ', user);
      const userName = await userKeycloak.getUsername();
      setUser(userName);
      //   console.log('CHANGED NAME ', user);
      //   setAutenticado(authenticated);
      // }
      console.log('Usuário', user);
      console.log('authenticated', authenticated);
      //alert(authenticated ? 'authenticated' : 'not authenticated');
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
