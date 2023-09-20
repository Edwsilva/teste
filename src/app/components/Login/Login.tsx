"use client";
import styles from "./login.module.css";
import { BiSolidUserCircle } from "react-icons/bi";

import { KeycloakInitOptions } from 'keycloak-js';
import userHookkeycloak from '../../../hooks/userHookKeycloak';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { authActions } from '@/redux/features/auth-slice';

import { useState, useEffect, ReactNode, useRef } from 'react';
import { userAgent } from 'next/server';
import { UserInfo } from '@/app/utils/types';

//const initOptions: KeycloakInitOptions = {onLoad: "login-required"};

const initOptions: KeycloakInitOptions = {};

const Login = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const {authenticated, userInfo} = useAppSelector((state) => state.authUser);
  
  const [user, setUser] = useState<UserInfo | ReactNode>();
 
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  
  userHookkeycloak.doInitialize.init(initOptions).success((auth) => {
    
    if (auth) {
      try {
        // const userEmail = keycloak.tokenParsed?.email;
        // const userName = keycloak.tokenParsed?.name;
        // const userToken = keycloak.token;

        // @ts-ignore
        const userEmail = userHookkeycloak.getTokenParsed()?.email;
        // @ts-ignore
        const userName = userHookkeycloak.getTokenParsed()?.name;
        const userToken = userHookkeycloak.getToken();


        console.log('KEYCLOAK ', userEmail);

        console.log('KEYCLOAK ', userHookkeycloak.getToken());
        // setUser(keycloak.profile?.email);
        // console.log('USER ', keycloak.profile?.email);
        console.log('Está autenticado ', authenticated);
        // console.log('User Info', userInfo);
        setUserIsAuthenticated(authenticated);
        console.log('Usuaaaário ', user);
        // const userInfo = userKeycloak.getUserInfo();
        console.log('userIsAuthenticated ', userIsAuthenticated);
        dispatch(
          authActions.setLogIn({
            authenticated: auth,
            userInfo: { name: userName, email: userEmail, token: userToken  },
          })
        );
      
      } catch(erro) {
        console.log(erro)
      }
    } else {
      console.log("Erro na chamada do keycloak ")
    }
  })

  

  return (
    <button className={styles.button} onClick={() => userHookkeycloak.doLogin()}>
      <BiSolidUserCircle className={styles.icon} />
      {userInfo?.name}
    </button>
  );
};

export default Login;
