import usePosts from "../../hooks/use-posts";
import Button from "../Button";
import React from "react";
import { Post } from "../expenses/type";
const GetPosts = () => {
  const pageSize = 10;
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((post: Post) => (
              <li className="list-group-item" key={post.id}>
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div className="mt-3 flex gap-3">
        <Button
          name={isFetchingNextPage ? "Loading..." : "Load More"}
          type="btn-primary"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        />
      </div>
    </>
  );
};

export default GetPosts;
