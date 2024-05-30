import axios, { AxiosInstance } from "axios";

let token: string | null =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export let API: AxiosInstance;

export const axiosWithAuth = (): AxiosInstance => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return axios.create({
    baseURL: "https://recruitment-api.vercel.app/",
    headers: token ? { authorization: token } : {},
  });
};

export const renewAPI = (token: string | null): void => {
  if (token) {
    localStorage.setItem("token", token);
  }

  API = axiosWithAuth();
};

renewAPI(token);
