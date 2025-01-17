import type { LucideIcon } from "lucide-react";

type InfoItemProps = {
  label: string;
  icon: LucideIcon;
};
export const InfoItem = ({ label, icon: Icon }: InfoItemProps) => {
  return (
    <li className="flex items-center space-x-3">
      <Icon className=" text-blue-500" />

      <span className="text-gray-600">{label}</span>
    </li>
  );
};
