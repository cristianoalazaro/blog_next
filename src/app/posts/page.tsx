import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";

import { getPostsPagination, totalPages } from '@/utils/postsPaginationUtils';

const Posts = () => {
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-4">
        <PostList posts={getPostsPagination().currentPosts} />
        <PostPagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Posts;
