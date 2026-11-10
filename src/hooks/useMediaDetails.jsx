import { useQuery } from "@tanstack/react-query";
import { getMediaDetails } from "../services/getMediaDetails";

const useMediaDetails = (mediaType, id, { enabled = true }) => {
  const { data, isLoading, refetch, isError } = useQuery({
    queryFn: () => getMediaDetails(mediaType, id),
    queryKey: [id],
    enabled,
  });
  return { data, isLoading, refetch, isError };
};

export default useMediaDetails;
