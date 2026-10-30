import { imgURL } from "../services/api";

export const makeImgURL = (path, size= 300) => {
  const URL = `${imgURL}w${size}/${path}`;
  return URL;
};
