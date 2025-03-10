import { keepPreviousData, useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

type PostQuery = {
    page : number;
    pageSize : number;
}
const usePosts = (query: PostQuery) => {
  const fetchData = () => {
    return apiClient.get("/posts",{
        params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize
        }
    }).then((res) => res.data);
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", query],
    queryFn: fetchData,
    placeholderData: keepPreviousData,
  });
  return { data, isLoading, error };
};
export default usePosts;
