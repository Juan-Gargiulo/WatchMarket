import * as user from "./constants";

export const userLogin = payload => {
  return { type: user.USER_LOGIN, payload };
};

export const userLoginOk = payload => {
  return { type: user.USER_LOGIN_OK, payload };
};

export const userLoginError = payload => {
  return { type: user.USER_LOGIN_ERROR, payload };
};

/* export const userRegister = payload => {
  type: user.USER_REGISTER, payload;
}; */

export function userRegister(payload) {
  return {
    type: user.USER_REGISTER,
    payload
  };
}

export function userRegisterOK(payload) {
  return {
    type: user.USER_REGISTER_OK,
    payload
  };
}

export const userRegisterError = payload => {
  type: user.USER_REGISTER_ERROR, payload;
};

export const setUser = payload => {
  type: user.USER_SET_USER, payload;
};
