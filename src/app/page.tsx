import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Home() {
  return (
    <div className="fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Révélez Votre Potentiel
            <br />
            avec Caroline Vella
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {siteConfig.homePage.description}
          </p>
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
          <Card key={index} className="hover-lift">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
