import { cn } from "@/lib/utils";

type HeadingProps = {
  title: string;
  description?: string;
  className?: string;
};
export const Heading = ({ title, description, className }: HeadingProps) => {
  return (
    <div className="space-y-5">
      <h1
        className={cn(
          "text-5xl font-semibold text-gray-900 mb-6 leading-tight",
          className
        )}>
        {title}
      </h1>
      {description ? (
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
};
