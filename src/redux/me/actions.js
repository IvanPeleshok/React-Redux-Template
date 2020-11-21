import {
  SET_LOGGED,
  SET_TOKEN,
  SET_USER_INFO,
  EDIT_USER_INFO,
  USER_LOADING,
  SET_ME_INFO,
  TOGGLE_AUTH_FORM,
} from "./types";

import { userAPI, setTokenForAPI } from "../../api/api";
import Cookies from "js-cookie";

export const setLogged = (logged) => {
  return {
    type: SET_LOGGED,
    logged,
  };
};
export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    userInfo,
  };
};

export const setMeInfo = (meInfo) => {
  return {
    type: SET_ME_INFO,
    meInfo,
  };
};

export const editUserInfo = (mode) => {
  return {
    type: EDIT_USER_INFO,
    mode,
  };
};

export const meLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const toggleAuthForm = (value) => {
  return {
    type: TOGGLE_AUTH_FORM,
    value,
  };
};

// THUNKS

export const login = (login, password, keepSession) => async (dispatch) => {
  let response = await userAPI.login(login, password);

  if (response.status === 200) {
    const token = response.data.access;
    if (keepSession) {
      Cookies.set("access-token", token, { expires: 1 / 24 / 2 });
    } else {
      Cookies.set("access-token", token, { expires: 1 / 24 / 2 });
    }
    setTokenForAPI(token);

    dispatch(authUser(token));
  } else {
    // console.log("me/action login");
  }
};

export const register = (username, email, password, passConfirmation) => async (
  dispatch
) => {
  let response = await userAPI.register(
    username,
    email,
    password,
    passConfirmation
  );

  if (response.status === 201) {
    const token = response.data.access;

    Cookies.set("access-token", token, { expires: 1 / 24 / 2 });
    setTokenForAPI(token);
    dispatch(authUser(token));
  }
};

export const authUser = (token) => (dispatch) => {
  const token = Cookies.get("access-token");
  if (token) {
    setTokenForAPI(token);
    dispatch(setLogged(true));
    dispatch(getMeInfo());
  }
};

export const getMeInfo = () => async (dispatch) => {
  dispatch(meLoading());
  let response = await userAPI.getUserInfo("me");

  if (response && response.status === 200) {
    dispatch(setMeInfo(response.data));
  } else {
    dispatch(logout());
  }
};

export const logout = () => async (dispatch) => {
  dispatch(setLogged(false));
  dispatch(setUserInfo({}));
  setTokenForAPI("");
  Cookies.remove("access-token");
};
