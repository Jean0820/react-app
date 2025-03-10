import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

type PostQuery = {
  pageSize: number;
};
const usePosts = (query: PostQuery) => {
  const fetchData = ({ pageParam = 1 }) => {
    return apiClient
      .get("/posts", {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  };
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", query],
      queryFn: fetchData,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < query.pageSize) return undefined;
        return allPages.length + 1;
      },
    });
  return { data, isLoading, error, fetchNextPage, isFetchingNextPage };
};
export default usePosts;
