'use client';
import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import styles from './login.module.css';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdOutlineLogout } from 'react-icons/md';

import { KeycloakInitOptions } from 'keycloak-js';
import userHookkeycloak from '../../../hooks/userHookKeycloak';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { authActions } from '@/redux/features/auth-slice';

import { UserInfo } from '@/app/utils/types';

//const initOptions: KeycloakInitOptions = {onLoad: "login-required"};

const initOptions: KeycloakInitOptions = {};

const name = 'Eduardo Cassano de Sá';

type LoginProps = {
  mobile?: boolean;
  menuOpen?: boolean;
  linksLength?: number;
  delay?: number;
  loginState: boolean;
  setLoginState: Dispatch<SetStateAction<boolean>>;
};

const Login = ({
  mobile,
  menuOpen,
  linksLength,
  delay,
  loginState,
  setLoginState,
}: LoginProps) => {
  const animStyle =
    linksLength && delay
      ? { animationDuration: `${linksLength * delay}s` }
      : {};

  const handleLogin = () => {
    userHookkeycloak.doLogin();
  };

  const handleLogout = () => {
    dispatch(authActions.setLogOut());
    setLoginState(false);
    // resetUserToken();
    userHookkeycloak.doLogout();
  };

  const dispatch = useDispatch<AppDispatch>();
  const { authenticated, userInfo } = useAppSelector((state) => state.authUser);

  const [user, setUser] = useState<UserInfo | ReactNode>();

  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

  if (userInfo.token === '') {
    userHookkeycloak.doInitialize.init(initOptions).success((auth) => {
      console.log('AUTH ', auth);
      try {
        if (auth) {
          // @ts-ignore
          const userEmail = userHookkeycloak.getTokenParsed()?.email;
          // @ts-ignore
          const userName = userHookkeycloak.getUsername();
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
              userInfo: { name: userName, email: userEmail, token: userToken },
            })
          );
        } else {
          console.log('USUARIO NÂO AUTETICADO');
        }
      } catch (error) {
        console.error('Erro ao iniciar a autenticação:', error);
      }
    });
  }

  return (
    <>
      {/* {loginState ? ( */}
      {authenticated ? (
        <div className={styles.logged}>
          <span className={styles.name}>
            {/* Olá, {name.slice(0, name.indexOf(' '))} */}
            Olá, {userInfo?.name}
          </span>
          <button
            className={styles.logout}
            // onClick={() => setLoginState(false)}
            onClick={handleLogout}
          >
            <MdOutlineLogout size={25} />
          </button>
        </div>
      ) : (
        <button
          style={animStyle}
          className={
            mobile
              ? `${styles.button} ${styles.buttonMobile} ${
                  menuOpen ? styles.menuOpenAnim : ''
                }`
              : styles.button
          }
          onClick={handleLogin}
        >
          <BiSolidUserCircle className={styles.icon} />
          Login
        </button>
      )}
    </>
  );
};

export default Login;
