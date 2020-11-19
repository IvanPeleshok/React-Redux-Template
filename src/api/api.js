import Axios from "axios";

export let cors = "https://cors-anywhere.herokuapp.com/";
export let apiURL = "";

const instance = Axios.create({
  baseURL: `${apiURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setTokenForAPI = (token) => {
  instance.defaults.headers.Authorization = "Bearer " + token;
};

export const userAPI = {
  login(username, password) {
    return instance
      .post(`${apiURL}api/v1/jwt/reg/create`, {
        username,
        password,
      })
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  },

  register(username, email, password1, password2) {
    return instance
      .post(`${apiURL}api/v1/auth/registration/`, {
        username,
        email,
        password1,
        password2,
      })
      .then((response) => response)
      .catch((err) => console.log(err));
  },

  getUserInfo(id) {
    return instance
      .get(`${apiURL}api/v1/profiles/${id}`)
      .then((response) => response)
      .catch((err) => console.log(err));
  },
};
