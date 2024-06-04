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
    <div className="space-y-4 w-full">
      <h1 className={title()}>Page Blog</h1>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {(posts ?? []).map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
