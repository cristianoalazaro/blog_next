import PostList from "@/components/PostList";
import PostPagination from "@/components/PostPagination";
import { getPostsPagination, totalPages } from '@/utils/postsPaginationUtils';

interface Props {
    params: {
        number: string;
    }
}

const LayoutPages = ({ params }: Props) => {
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Posts</h1>
      <div className="grid gap-4">
        <PostList posts={getPostsPagination(parseInt(params.number)).currentPosts} />
        <PostPagination totalPages={totalPages} currentPage={parseInt(params.number)}/>
      </div>
    </div>
  );
};

export default LayoutPages;
