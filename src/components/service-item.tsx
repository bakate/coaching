import { CheckCheck, type LucideIcon } from "lucide-react";

type ServiceItemProps = {
  text: string;
  icon?: LucideIcon;
};
export const ServiceItem = ({
  text,
  icon: Icon = CheckCheck,
}: ServiceItemProps) => (
  <li className="flex items-start space-x-3">
    <span className="text-blue-500 text-xl">
      <Icon className="size-4 mr-2" />
    </span>
    <span className="text-gray-600">{text}</span>
  </li>
);
