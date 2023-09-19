"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";

import Keycloak, { KeycloakInitOptions } from 'keycloak-js';
import userHookkeycloak from '../../../hooks/userHookKeycloak';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { authActions } from '@/redux/features/auth-slice';

import userKeycloak from '../../../hooks/userHookKeycloak';
import { useState, useEffect, ReactNode, useRef } from 'react';
import { userAgent } from 'next/server';
import { UserInfo } from '@/app/utils/types';
import { userInfo } from 'os';

//  email: keycloak.tokenParsed?.email,
//           // @ts-ignore
//           name: keycloak.tokenParsed?.name,
//           // @ts-ignore
//           preferred_username: keycloak.tokenParsed?.preferred_username,

// const initOptions = {
//   url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
//   realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
//   clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
//   //onLoad: 'login-required',
//   credentials: {
//     secret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET,
//   },
//   'ssl-required': 'external',
//   'confidential-port': 0,
// };

export const keycloak = Keycloak({
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
  credentials: {
    secret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET,
  },
  'ssl-required': 'external',
  'confidential-port': 0,
});

const initOptions: KeycloakInitOptions = {};

const Login = () => {
  const isRun = useRef(false);
  const dispatch = useDispatch<AppDispatch>();
  const userInfoState = useAppSelector((state) => state.authUser);
  userInfoState.userInfo?.name;
  const [user, setUser] = useState<UserInfo | ReactNode>();
  //const [user, setUser] = useState('');
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  console.log('USER INFO STATE ', userInfoState);

  const [keycloakLogged, setKeycloakLogged] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeycloakLogged(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   console.warn('USEEFFECT DO LOGIN');
  //   //setUser(userInfoState.userInfo.name);
  // }, [user]);

  // useEffect(() => {
  //   if (userInfoState.authenticated) {
  //     //navigate('/');
  //     console.log('ESTOU NO UseEffect do userIsAuthenticated');
  //   }
  // }, [userIsAuthenticated]);

  keycloak.init(initOptions).success((authenticated) => {
    if (authenticated) {
      // const userInfo = async () => {
      //   keycloak.profile?.email;
      //   keycloak.profile?.username;
      //   keycloak.token;
      // };

      const userEmail = keycloak.tokenParsed?.email;
      const userName = keycloak.tokenParsed?.name;
      const userToken = keycloak.token;


      console.log('KEYCLOAK ', userEmail);

      console.log('KEYCLOAK ', keycloak.token);
      setUser(keycloak.profile?.email);
      console.log('USER ', keycloak.profile?.email);
      console.log('Está autenticado ', authenticated);
      // console.log('User Info', userInfo);
      setUserIsAuthenticated(authenticated);
      console.log('Usuaaaário ', user);
      // const userInfo = userKeycloak.getUserInfo();
      console.log('userIsAuthenticated ', userIsAuthenticated);
      dispatch(
        authActions.setLogIn({
          authenticated,
          userInfo: { name: userName, email: userEmail, token: userToken  },
        })
      );
      // setUser(userInfoState.userInfo.name);
      // console.log('LOGIN USUARIO ', userInfoState.authenticated);
    } else {
      console.log('Usuário não autenticado');
    }
  });

  // const authenticateUser = async () => {
  //   // Verifique se o usuário está autenticado (por exemplo, com base em um token válido)
  //   /* Verifique a autenticação aqui */
  //   console.log('ESTOU NO authenticateUser');
  //   const authenticated = await userKeycloak.doInitialize.init({
  //     onLoad: 'login-required',
  //   });
  //   const userIsAuthenticated = authenticated;
  //   setIsAuthenticated(userIsAuthenticated);
  // };

  // useEffect(() => {
  //   // Chame a função para verificar a autenticação do usuário quando o componente for montado
  //   authenticateUser();
  // }, [userIsAuthenticated]);

  // const kc = () => {
  //   try {
  //     console.log('BLOCO TRY');
  //     // if (autenticado) {
  //     //   const token = userKeycloak.getToken();
  //     //   console.log('TOKEN ', token);
  //     //   console.log('UserName ', userKeycloak.getUsername());
  //     //   const role = await userKeycloak.hasRole(['admin', 'teste']);
  //     //   console.log('HasHole ', role);
  //     //   //return null
  //     // }
  //     //userKeycloak.doInitialize
  //     keycloak.init({}).success((authenticated) => {
  //       const userInfo = userKeycloak.getUserInfo();
  //       setUserIsAuthenticated(authenticated);
  //       console.log('userIsAuthenticated ', userIsAuthenticated);
  //       dispatch(authActions.setLogIn({ authenticated, userInfo }));
  //       setUser(userInfoState.userInfo.name);
  //       console.log('LOGIN USUARIO ', userInfoState.authenticated);
  //     });
  //     //Keycloak.

  //     // init({
  //     //     onLoad: 'login-required',
  //     //     // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  //     //     // pkceMethod: 'S256',
  //     //   })
  //     //   .success((authenticated) => {
  //     //     const userInfo = userKeycloak.getUserInfo();
  //     //     setUserIsAuthenticated(authenticated);
  //     //     console.log('userIsAuthenticated ', userIsAuthenticated);
  //     //     dispatch(authActions.setLogIn({ authenticated, userInfo }));
  //     //     setUser(userInfoState.userInfo.name);
  //     //     console.log('LOGIN USUARIO ', userInfoState.authenticated);
  //     //   });

  //     // const userInfo = await userKeycloak.getUserInfo();
  //     // dispatch(authActions.setLogIn({ authenticated, userInfo }));
  //     // console.log('LOGIN USUARIO ', userInfoState);
  //     console.log('USUARIO ', userInfoState.userInfo.email);
  //     // setUser(userInfoState.authenticated);
  //     //   console.log('CHANGED NAME ', user);
  //     //   setAutenticado(authenticated);
  //     // }
  //     //console.log('Usuário', userInfo);
  //     //console.log('authenticated', authenticated);
  //     //alert(authenticated ? 'authenticated' : 'not authenticated');
  //   } catch (error) {
  //     alert('failed to initialize');
  //   }
  // };

  return (
    <button className={styles.button} onClick={() => keycloak.login()}>
      <BiSolidUserCircle className={styles.icon} />
      {userInfoState.userInfo?.name}
    </button>
  );
};

export default Login;
