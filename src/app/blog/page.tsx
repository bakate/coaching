import { BlogCard } from "@/components/blog-card";
import { title } from "@/components/primitives";
import { Post } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { fetchPostsQuery } from "@/sanity/lib/queries";

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>({
    query: fetchPostsQuery,
  });

  return (
    <div className="space-y-4">
      <h1 className={title()}>Page Blog</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero magnam
        itaque, iure assumenda ducimus ut totam quisquam! Reprehenderit
        laboriosam, consequuntur autem fugiat cumque esse necessitatibus dicta
        adipisci, atque eveniet hic! Soluta quam quae quaerat ipsum animi vitae
        beatae, iure dolores reiciendis sint ut modi ducimus perspiciatis
        tempora id eveniet quis minus libero! Sint hic quisquam ducimus ut
        aliquid saepe rem.
      </p>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {(posts ?? []).map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
