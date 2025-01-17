import { Heading } from "@/components/heading";
import { ServiceItem } from "@/components/service-item";
import { siteConfig } from "@/config/site";

export default function ParticulierPage() {
  return (
    <div className="fade-in">
      <Heading
        title={siteConfig.privateClientsPage.title}
        description={siteConfig.privateClientsPage.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {siteConfig.privateClientsPage.services.title}
          </h2>
          <ul className="space-y-4">
            {siteConfig.privateClientsPage.services.servicesItems.map(
              (service, index) => (
                <ServiceItem key={index} text={service} />
              )
            )}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {siteConfig.privateClientsPage.approach.title}
          </h2>
          {siteConfig.privateClientsPage.approach.texts.map((text, index) => (
            <p key={index} className="text-gray-600 mb-6">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
