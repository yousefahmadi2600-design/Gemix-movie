import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/getMovies";

const useMovies = (endpoint) => {
  const { data, isError, isLoading,refetch } = useQuery({
    queryFn: () => fetchMovies(endpoint),
    queryKey: [endpoint],
  });
  return { data, isError, isLoading,refetch };
};

export default useMovies;
