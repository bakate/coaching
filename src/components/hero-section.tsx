import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "./section-header";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <SectionHeader title={title} description={description} gradient />
        <Link href={ctaLink}>
          <Button size="lg" className="mt-4">
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-2xl shadow-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}
