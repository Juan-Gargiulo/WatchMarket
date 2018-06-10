import * as user from "./constants";

const initialState = {
  user: null,
  isLoged: false,
  isAdmin: false,
  registerError: {},
  loginError: "",
  spinner: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case user.USER_LOGIN:
      return {
        ...state,
        spinner: true
      };

    case user.USER_LOGIN_OK:
      return {
        ...state,
        user: action.payload,
        loginError: "",
        spinner: false,
        isLoged: true,
        isAdmin: action.payload.admin
      };

    case user.USER_LOGIN_ERROR:
      return {
        ...state,
        user: null,
        loginError: action.payload,
        spinner: false,
        isLoged: false,
        isAdmin: false
      };

    case user.USER_REGISTER:
      return {
        ...state,
        spinner: true
      };

    case user.USER_REGISTER_OK:
      return {
        ...state,
        user: action.payload,
        isAdmin: action.payload.admin,
        isLoged: true,
        registerError: {},
        spinner: false
      };

    case user.USER_REGISTER_ERROR:
      return {
        ...state,
        user: {},
        isLoged: false,
        isAdmin: false,
        registerError: action.payload,
        spinner: false
      };

    case user.USER_SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoged: true,
        spinner: false
      };

    default:
      return state;
  }
};

export default userReducer;
