import Avatar from "@/components/avatar";
import CoverImage from "@/components/cover-image";
import CustomPortableText from "@/components/custom-portable-text";
import { PublishedAt } from "@/components/published-at";
import { FetchSingleQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { fetchSingleQuery } from "@/sanity/lib/queries";
import { ArrowLeft } from "lucide-react";
import { PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

const BlogDetailPage = async ({ params: { slug } }: Props) => {
  const post = await sanityFetch<FetchSingleQueryResult>({
    query: fetchSingleQuery,
    params: {
      slug,
    },
  });
  if (!post) {
    throw notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <Link href={"/blog"}>
        <ArrowLeft className="text-xl text-slate-500 mb-2 hover:cursor-pointer" />
      </Link>
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {post.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {post.author && (
            <Avatar name={post.author.name} picture={post.author.image} />
          )}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage image={post.coverImage} priority />
        </div>
        <>
          <div className="mb-6 block md:hidden">
            {post.author && (
              <Avatar name={post.author.name} picture={post.author.image} />
            )}
          </div>
          <div className="mb-6 text-lg text-end">
            {post.date ? <PublishedAt dateString={post.date} /> : null}
          </div>
        </>
        {post.content?.length && (
          <CustomPortableText
            className="w-full"
            value={post.content as PortableTextBlock[]}
          />
        )}
      </article>
    </div>
  );
};

export default BlogDetailPage;
