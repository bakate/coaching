import { ContactForm } from "@/components/contact-form";
import { Heading } from "@/components/heading";
import { InfoItem } from "@/components/info-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Clock, Mail } from "lucide-react";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(10, "Veuillez entrer un numéro de téléphone valide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  return (
    <div className="fade-in">
      <Heading
        title={siteConfig.contactPage.title}
        description={siteConfig.contactPage.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-8">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-500" />
                {siteConfig.contactPage.infoLabel}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {siteConfig.contactPage.infoItems.map((item, index) => (
                  <InfoItem key={index} label={item.label} icon={item.icon} />
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-500" />
                {siteConfig.contactPage.businessHours.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span className="text-gray-600">
                    Lundi - Vendredi: 9h00 - 19h00
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <span className="text-gray-600">Samedi: Sur rendez-vous</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
