import { imgURL } from "../services/api";

export const makeImgURL = (path, size= 780) => {
  const URL = `${imgURL}${size}/${path}`;
  return URL;
};
