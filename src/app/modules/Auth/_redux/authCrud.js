import axios from "axios";

export const LOGIN_URL = "http://localhost:5000/api/users/login";
export const REGISTER_URL = "http://localhost:5000/api/users/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, name, username, password) {
  return axios.post(REGISTER_URL, { email, name, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
