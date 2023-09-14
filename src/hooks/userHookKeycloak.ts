'use client';
import React, { useState, useEffect, useRef } from 'react';
import Keycloak from 'keycloak-js';
import { UserInfo } from '@/app/utils/types';
import { KeycloakTokenParsed } from 'keycloak-js';

// const [isLogin, setLogin] = useState(false);
// const [token, setToken] = useState(null);

const initOptions = {
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
};

const _kc = new Keycloak(initOptions);
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

const doInitialize = _kc;

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getTokenExpired = () => _kc.onTokenExpired();

const getTokenParsed = (): KeycloakTokenParsed => _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

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
