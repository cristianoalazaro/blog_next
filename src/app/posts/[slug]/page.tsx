import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

//generate static pages
export const generateStaticParams = () => {
  return allPosts.map(post => ({
    slug: post._raw.flattenedPath
  }))
}

/* eslint-disable react-hooks/rules-of-hooks */
export const generateMetadata = ({params}: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  return {
    title: post?.title,
    description: post?.description,
    
  }
}

const PostLayout = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  
  let MDXComponent;

  if (!post) {
    return notFound();
  } else {
    MDXComponent = useMDXComponent(post.body.code)
  }

  return (
    <div>
      <div>
        <h1 className="text-center py-4 text-3xl">{post.title}</h1>
      </div>
      <time>
        {new Date(post.date).toLocaleDateString("pt-br", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <MDXComponent />
    </div>
  );
};

export default PostLayout;
