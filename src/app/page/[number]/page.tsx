import { allPosts, Post } from "contentlayer/generated";

import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { getPagination } from "@/utils/pagination";
import { notFound } from "next/navigation";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));


interface Props {
  params: {
    number: string;
  };
}


const LayoutPages = ({ params }: Props) => {
  if (!/^\d+$/.test(params.number)) {
    notFound();
  }
  
  const { currentPage, currentPosts, totalPages } = getPagination(posts, 2, (params.number));

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-4">
        <PostList posts={currentPosts} />
        {totalPages > 1 && 
          <PostPagination 
            totalPages={ totalPages} 
            currentPage={parseInt(params.number)}  /> }
      </div>
    </div>
  );
};

export default LayoutPages;
