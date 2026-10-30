import axios from "axios";

export const apiKey = "d92ea1d522fc4217d2e73d20fa9f63e2";
export const baseURL = "https://api.themoviedb.org/3/";
export const imgURL = "https://image.tmdb.org/t/p/"
export const baseRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 5000,
});
