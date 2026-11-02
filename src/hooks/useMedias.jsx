import { useQuery } from "@tanstack/react-query";
import { getMedias } from "../services/getMedias";

const useMedias = (endpoint) => {
  const { data, isError, isLoading,refetch } = useQuery({
    queryFn: () => getMedias(endpoint),
    queryKey: [endpoint],
  });
  return { data, isError, isLoading,refetch };
};

export default useMedias;
