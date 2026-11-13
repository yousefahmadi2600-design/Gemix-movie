import { baseRequest } from "./api";

export const getPerson = async (id) => {
  const result = await baseRequest.get(`person/${id}`);
  return result;
};
