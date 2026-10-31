import { imgURL } from "../services/api";

export const makeImgURL = (path, size= "w400") => {
  const URL = `${imgURL}${size}/${path}`;
  return URL;
};
