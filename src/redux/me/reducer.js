import {
  SET_LOGGED,
  SET_TOKEN,
  EDIT_USER_INFO,
  ME_LOADING,
  SET_ME_INFO,
  TOGGLE_AUTH_FORM,
} from "./types";
import Cookies from "js-cookie";

let initialState = {
  logged: false,
  token: Cookies.get("access-token") || "",
  meInfo: {},
  userInfo: {},
  editMode: false,
  loading: false,
  authFormVisible: false,
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED: {
      return {
        ...state,
        logged: action.logged,
      };
    }
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case SET_ME_INFO: {
      return {
        ...state,
        meInfo: action.meInfo,
      };
    }
    case ME_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case EDIT_USER_INFO: {
      return {
        ...state,
        editMode: !state.editMode,
      };
    }
    case TOGGLE_AUTH_FORM: {
      let value = !state.authFormVisible;
      if (action.value === false || action.value === true) {
        value = action.value;
      }
      return {
        ...state,
        authFormVisible: value,
      };
    }

    default:
      return state;
  }
};

export default meReducer;
