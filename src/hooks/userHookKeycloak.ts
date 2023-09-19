'use client';
import React, { useState, useEffect, useRef } from 'react';
import Keycloak, { KeycloakInitOptions } from 'keycloak-js';
import { UserInfo } from '@/app/utils/types';
import { KeycloakTokenParsed } from 'keycloak-js';

import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { authActions } from '@/redux/features/auth-slice';
// const [isLogin, setLogin] = useState(false);
// const [token, setToken] = useState(null);

// const initOptions = {
//   url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
//   realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
//   clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
// };

export const _kc = Keycloak({
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

// export const _kc = Keycloak({
//   url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
//   realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
//   clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
//   credentials: {
//     secret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET,
//   },
//   'ssl-required': 'external',
//   'confidential-port': 0,
// });

// const _kc = new Keycloak(initOptions);
console.log('KCCC', _kc);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback: any) => {
  console.log('INIT ', onAuthenticatedCallback);
  // const isRun = useRef(false);
  // const [isLogin, setLogin] = useState(false);
  // const [token, setToken] = useState(null);
  //   useEffect(() => {
  //     console.log('YESYE');
  //     _kc
  //       .init({
  //         onLoad: initOptions.onLoad,
  //         checkLoginIframe: false,
  //         // onLoad: 'check-sso',
  //         // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  //         // pkceMethod: 'S256',
  //       })
  //       .then((authenticated) => {
  //         if (!authenticated) {
  //           console.log('user is not authenticated..!');
  //         }
  //         onAuthenticatedCallback();
  //       })
  //       .catch(console.error);
  //   }, []);
  // };
};

const initialize = () => {
  const dispatch = useDispatch<AppDispatch>();

  _kc.init(initOptions).success((authenticated) => {
    if (authenticated) {
      console.log('KEYCLOAK ', _kc.token);
      //  setUser('EDWILSON');
      //  console.log('USER ', _kc.tokenParsed?.email);
      //  console.log('Está autenticado ', authenticated);
      //  // console.log('User Info', userInfo);
      //  setUserIsAuthenticated(authenticated);
      //  console.log('Usuaaaário ', user);
      //  // const userInfo = userKeycloak.getUserInfo();
      //  console.log('userIsAuthenticated ', userIsAuthenticated);
      dispatch(authActions.setLogIn({ authenticated, userInfo }));
      // setUser(userInfoState.userInfo.name);
      // console.log('LOGIN USUARIO ', userInfoState.authenticated);
    } else {
      console.log('Usuário não autenticado');
    }
  });
};

const doInitialize = _kc;

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getTokenExpired = () => _kc.isTokenExpired();

const getTokenParsed = _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: any) =>
  _kc
    .updateToken(5)
    .success(successCallback)
    .error(() => doLogin());

// const updateToken = (successCallback) =>
//   _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUserInfo = (): UserInfo => {
  // @ts-ignore
  const { name, email } = _kc.tokenParsed;
  const token = _kc.token;
  return { name, email, token: token ? token : '' };
};

//const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));
const hasRole = (roles: any) =>
  roles.some((role: any) => _kc.hasRealmRole(role));

const userHookKeycloak = {
  initialize,
  initKeycloak,
  doInitialize,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getTokenExpired,
  getTokenParsed,
  updateToken,
  getUserInfo,
  hasRole,
};

export default userHookKeycloak;
