import { Post } from "contentlayer/generated";
import Link from "next/link";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <>
      <article className="shadow-md py-4 rounded-md">
        <h2 className="text-2xl">
          <Link href={post.url}>{post.title}</Link>
        </h2>
        <time>
          {new Date(post.date).toLocaleDateString("pt-br", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </article>
    </>
  );
};

export default PostItem;
