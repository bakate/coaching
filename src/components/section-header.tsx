import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  gradient?: boolean;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  gradient = false,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("mb-12", align === "center" && "text-center", className)}
    >
      <h1 className={cn("text-4xl lg:text-5xl font-bold mb-6 leading-tight")}>
        {gradient ? (
          <>
            {title.split(" ").map((word, i) =>
              i === title.split(" ").length - 1 ? (
                <span key={i} className="gradient-text">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </>
        ) : (
          title
        )}
      </h1>
      {description && (
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
