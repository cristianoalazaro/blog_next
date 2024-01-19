import ButtonBack from "@/components/ButtonBack";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

//generate static pages
export const generateStaticParams = () => {
  return posts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};

/* eslint-disable react-hooks/rules-of-hooks */
export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  return {
    title: post?.title,
    description: post?.description,
  };
};

const PostLayout = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  let MDXComponent;

  if (!post) {
    return notFound();
  } else {
    MDXComponent = useMDXComponent(post.body.code);
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold uppercase">{post.title}</h1>
      <div className="mb-8 text-center">
        <time className="text-gray-700">
          {new Date(post.date).toLocaleDateString("pt-br", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <MDXComponent />

      <div className="mt-8 text-center">
          <ButtonBack>Voltar</ButtonBack>
      </div>
    </>
  );
};

export default PostLayout;
