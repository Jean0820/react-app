import { useState } from "react";
import usePosts from "../../hooks/use-posts";
import { Post } from "../expenses/type";
import Button from "../Button";
const GetPosts = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data: posts, isLoading, error } = usePosts({ page, pageSize });
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <ul className="list-group">
        {posts.map((post: Post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className="mt-3 flex gap-3">
        <Button
          name="Prev"
          type="btn-primary"
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
        />
        <Button
          name="Next"
          type="btn-primary"
          disabled={page >= pageSize}
          onClick={() => setPage(page + 1)}
        />
      </div>
    </>
  );
};

export default GetPosts;
