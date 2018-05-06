import axios from "axios";

export const login = payload => {
  const { email, password } = payload;

  return axios.post("/api/user/login", {
    email,
    password
  });
};

export const register = payload => {
  const { fullName, email, password, phone } = payload;

  return axios.post("/api/user", {
    fullName,
    email,
    password,
    phone
  });
};
