import { baseRequest } from "./api";

export const getSearchResults = async (type, searchValue) => {
  const result = await baseRequest.get(`search/${type}`, {
    params: {
      query: searchValue,
    },
  });
  return result;
};
