import { baseRequest } from "./api";

export const getPersonMedias = async (id) => {
  const result = await baseRequest.get(`person/${id}/combined_credits`);
  return result;
};
