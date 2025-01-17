import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Révélez Votre <span className="gradient-text">Potentiel</span>
            <br />
            avec Caroline Vella
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {siteConfig.homePage.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            {siteConfig.homePage.CTA}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
          <Image
            src="/caroline_profile.jpeg"
            alt="Caroline Vella - Coach Professionnelle"
            fill
            className="object-cover rounded-2xl shadow-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {siteConfig.homePage.services.map((service, index) => (
          <Card key={index} className="card-hover">
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
            <CardContent>
              <CardDescription className="flex  flex-col gap-4">
                {service.description}
                <Link
                  href={service.link}
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                  {service.CTA}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-24 bg-blue-50 rounded-3xl p-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {siteConfig.homePage.footerCTA.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {siteConfig.homePage.footerCTA.description}
          </p>
          <Link
            href={siteConfig.homePage.footerCTA.link}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            {siteConfig.homePage.footerCTA.CTA}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
