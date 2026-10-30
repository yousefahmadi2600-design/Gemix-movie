import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/getMovies";

const useMovies = (endpoint) => {
  const { data, isError, isLoading } = useQuery({
    queryFn: () => fetchMovies(endpoint),
    queryKey: ["movies"],
  });
  return { data, isError, isLoading };
};

export default useMovies;
