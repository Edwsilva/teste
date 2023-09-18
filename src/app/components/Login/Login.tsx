"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";

import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { authActions } from '@/redux/features/auth-slice';

import userKeycloak from '../../../hooks/userHookKeycloak';
import { useState, useEffect, ReactNode } from 'react';
import { userAgent } from 'next/server';
import { UserInfo } from '@/app/utils/types';

//  email: keycloak.tokenParsed?.email,
//           // @ts-ignore
//           name: keycloak.tokenParsed?.name,
//           // @ts-ignore
//           preferred_username: keycloak.tokenParsed?.preferred_username,

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInfoState = useAppSelector((state) => state.authUser);

  const [user, setUser] = useState<UserInfo | ReactNode>();
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  console.log('USER INFO STATE ', userInfoState);

  useEffect(() => {
    console.warn("USEEFFECT DO LOGIN")
    setUser(userInfoState.userInfo.name);

  }, [userInfoState])

  useEffect(() => {
    if (userInfoState.authenticated) {
      //navigate('/');
      console.log("ESTOU NO UseEffect do userIsAuthenticated")
    }
  }, [userIsAuthenticated]);
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

  const kc = () => {
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
      userKeycloak.doInitialize
        .init({
          onLoad: 'login-required',
          // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
          // pkceMethod: 'S256',
        })
        .success((authenticated) => {
          const userInfo = userKeycloak.getUserInfo();
          setUserIsAuthenticated(authenticated);
          console.log('userIsAuthenticated ', userIsAuthenticated);
          dispatch(authActions.setLogIn({ authenticated, userInfo }));
          setUser(userInfoState.userInfo.name);
          console.log('LOGIN USUARIO ', userInfoState.authenticated);
        });

      // const userInfo = await userKeycloak.getUserInfo();
      // dispatch(authActions.setLogIn({ authenticated, userInfo }));
      // console.log('LOGIN USUARIO ', userInfoState);
      console.log('USUARIO ', userInfoState.userInfo.email);
      // setUser(userInfoState.authenticated);
      //   console.log('CHANGED NAME ', user);
      //   setAutenticado(authenticated);
      // }
      //console.log('Usuário', userInfo);
      //console.log('authenticated', authenticated);
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
