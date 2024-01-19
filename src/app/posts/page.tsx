import { allPosts, Post } from "contentlayer/generated";
import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { getPagination } from '@/utils/pagination';


const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const { totalPages } = getPagination(posts);

const Posts = () => {
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-4">
        <PostList posts={posts} />
        <PostPagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Posts;
