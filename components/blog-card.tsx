"use client";

import { Post } from "@/sanity.types";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";

type Props = {
  post: Post;
};
export const BlogCard = ({ post }: Props) => {
  const router = useRouter();
  return (
    <Card
      key={post._id}
      shadow="sm"
      isPressable
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-7"
      onPress={() => router.push(`/blog/${post.slug}`)}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {post.title}
        </p>
        <h4 className="text-white/90 font-medium text-xl">{post.title}</h4>
      </CardHeader>

      <Image
        removeWrapper
        alt={post.mainImage?.alt}
        className="z-0 w-full h-full object-cover"
        src={post.coverImage}
      />

      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
        </div>
        <Button radius="full" size="sm">
          Get App
        </Button>
      </CardFooter>
    </Card>
  );
};
