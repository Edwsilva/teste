'use client';
import React, { useState, useEffect, useRef } from 'react';
import Keycloak from 'keycloak-js';

// const [isLogin, setLogin] = useState(false);
// const [token, setToken] = useState(null);

// VITE_KEYCLOAK_URL=http://127.0.0.1:4000/
// VITE_KEYCLOAK_REALM=myrealm
// VITE_KEYCLOAK_CLIENT=myclient
//REACT_APP_KEYCLOAK_CLIENT_ID=contracheque-api.apps.ocp.rio.gov.br
//REACT_APP_KEYCLOAK_CLIENT_SECRET=0756326e-e88c-4287-8ac7-817e040bb9e2
//REACT_APP_KEYCLOAK_URL=https://auth-idriohom.apps.rio.gov.br/auth/
//REACT_APP_KEYCLOAK_REALM=idrio_cidadao
//REACT_APP_KEYCLOAK_REDIRECT_URI=http://localhost:3000

let initOptions = {
  url: 'https://auth-idriohom.apps.rio.gov.br/auth/',
  realm: 'idrio_cidadao',
  clientId: 'contracheque-api.apps.ocp.rio.gov.br',
  credentials: {
    secret:'0756326e-e88c-4287-8ac7-817e040bb9e2',
  },
  'ssl-required': 'external',
  'confidential-port': 0,
  onLoad: 'login-required',

  // url: 'http://127.0.0.1:4000/',
  // realm: 'myrealm',
  // clientId: 'myclient',
  // onLoad: 'login-required',
  // KeycloakResponseType: 'code'
};

// const client = new Keycloak({
//   url: process.env.VITE_KEYCLOAK_URL,
//   realm: process.env.VITE_KEYCLOAK_REALM,
//   clientId: process.env.VITE_KEYCLOAK_CLIENT,
//   onLoad: 'login-required',
// });

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
// const doInitialize = _kc.init({
//   onLoad: initOptions.onLoad,
//   checkLoginIframe: false,
// });
console.log("_KC ", doInitialize)

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getTokenParsed = () => _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

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
