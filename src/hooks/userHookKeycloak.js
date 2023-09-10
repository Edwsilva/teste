'use client';
import React, { useState, useEffect, useRef } from 'react';
import Keycloak from 'keycloak-js';

// const [isLogin, setLogin] = useState(false);
// const [token, setToken] = useState(null);


let initOptions = {
  url: process.env.VITE_KEYCLOAK_URL,
  realm: process.env.VITE_KEYCLOAK_REALM,
  clientId: process.env.VITE_KEYCLOAK_CLIENT,
 
};

const _kc = new Keycloak(initOptions);
 console.log('KCCC', _kc);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  console.log(onAuthenticatedCallback);
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

const getTokenParsed = () => _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

//const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));
const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));


const userHookKeycloak = {
  initKeycloak,
  doInitialize,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getTokenParsed,
  updateToken,
  getUsername,
  hasRole,
};

export default userHookKeycloak;
