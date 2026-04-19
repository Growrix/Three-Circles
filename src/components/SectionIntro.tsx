import { cn } from "@/lib/cn";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto max-w-3xl", className)}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title section-title--compact">
        {accent ? (
          <>
            {title.replace(accent, "")}
            <span className="accent-text">{accent}</span>
          </>
        ) : (
          title
        )}
      </h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}