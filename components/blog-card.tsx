"use client";

import { Post } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";

type Props = {
  post: Post;
};
export const BlogCard = ({ post }: Props) => {
  const router = useRouter();
  const image = post.coverImage?.asset?._ref ?? "";
  return (
    <Card
      key={post._id}
      shadow="sm"
      isPressable
      isFooterBlurred
      className="h-[300px] min-w-72 lg:min-w-80"
      onPress={() => router.push(`/blog/${post.slug}`)}
    >
      {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {post.title}
        </p>
        <h4 className="text-white/90 font-medium text-xl">{post.title}</h4>
      </CardHeader> */}

      <Image
        removeWrapper
        alt={post.coverImage?.alt}
        className="z-0 w-full h-full object-cover"
        src={image ? (urlForImage(post.coverImage)?.url() as string) : ""}
      />

      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {post.title}
        </p>
        <h4 className="text-white/90 font-medium text-xl">{post.title}</h4>
      </CardFooter>
    </Card>
  );
};
