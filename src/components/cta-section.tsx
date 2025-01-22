import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export function CTASection({
  title,
  description,
  ctaText,
  ctaLink,
}: CTASectionProps) {
  return (
    <div className="mt-24 bg-blue-50 rounded-3xl p-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <Link href={ctaLink}>
          <Button size="lg">
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
