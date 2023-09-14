"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";

import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { authActions } from '@/redux/features/auth-slice';

import userKeycloak from '../../../hooks/userHookKeycloak';
import { useState, useEffect } from 'react';
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

  const [user, setUser] = useState<UserInfo>();
  const [userIsAuthenticated, setIsAuthenticated] = useState(false);
  console.log('USER INFO STATE ', userInfoState);
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
      const authenticated = userKeycloak.doInitialize
        .init({
          onLoad: 'login-required',
        })
        .then((authenticated) => {
          const userInfo = userKeycloak.getUserInfo();
          dispatch(authActions.setLogIn({ authenticated, userInfo }));
          setUser(userInfoState.userInfo.name);
          console.log('LOGIN USUARIO ', userInfoState);
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
