import { BlogCard } from "@/components/blog-card";
import { title } from "@/components/primitives";
import { Post } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { fetchPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 0;

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>({
    query: fetchPostsQuery,
  });

  return (
    <div className="space-y-4">
      <h1 className={title()}>Les articles les plus récents</h1>

      <div className="gap-5 grid md:grid-cols-3">
        {(posts ?? []).map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
