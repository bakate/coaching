import { Heading } from "@/src/components/heading";
import { ServiceItem } from "@/src/components/service-item";
import { siteConfig } from "@/src/config/site";

export default function EntreprisePage() {
  return (
    <div className="fade-in">
      <Heading
        title={siteConfig.corporateClientsPage.title}
        description={siteConfig.corporateClientsPage.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {siteConfig.corporateClientsPage.services.title}
          </h2>
          <ul className="space-y-4">
            {siteConfig.corporateClientsPage.services.servicesItems.map(
              (service, index) => (
                <ServiceItem key={index} text={service} />
              )
            )}
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm hover-lift border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {siteConfig.corporateClientsPage.modalities.title}
          </h2>
          <ul className="space-y-4">
            {siteConfig.corporateClientsPage.modalities.modalitiesItems.map(
              (modality, index) => (
                <ServiceItem key={index} text={modality} />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
