import { Post } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { fetchSingleQuery } from "@/sanity/lib/queries";

type Props = {
  params: {
    slug: string;
  };
};

const BlogDetailPage = async ({ params: { slug } }: Props) => {
  const post = await sanityFetch<Post>({
    query: fetchSingleQuery,
    params: {
      slug,
    },
  });

  console.log({ post });

  return (
    <div>
      Hello this is the detail page {slug}
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default BlogDetailPage;
