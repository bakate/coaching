import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { homePage } = siteConfig;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <HeroSection
              title={homePage.title}
              description={homePage.description}
              imageSrc={"/caroline_profile.jpeg"}
              imageAlt="Caroline Vella - Coach Professionnelle"
              ctaText={homePage.CTA}
              ctaLink="/contact"
            />

            <div className="max-w-3xl mx-auto my-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 gradient-text">
                {homePage.mission.title}
              </h2>
              <div className="space-y-6">
                {homePage.mission.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {siteConfig.homePage.services.map((service, index) => (
                <Card
                  key={index}
                  className="card-hover grid grid-rows-[auto_1fr] h-full">
                  <CardHeader>
                    <CardTitle>
                      <div>
                        <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                          <service.icon className="size-6 text-blue-600" />
                        </div>
                        {service.title}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-rows-[1fr_auto]">
                    <CardDescription className="flex flex-col gap-4">
                      <span>{service.description}</span>
                    </CardDescription>
                    <Link
                      href={service.link}
                      className="text-blue-600 hover:text-blue-700 inline-flex items-center mt-4">
                      {service.CTA}
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <CTASection
              title={homePage.footerCTA.title}
              description={homePage.footerCTA.description}
              ctaText={homePage.footerCTA.CTA}
              ctaLink={homePage.footerCTA.link}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
