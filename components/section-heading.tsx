import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export function SectionHeading({ eyebrow, title, description, icon: Icon }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <Badge variant="secondary" className="w-fit rounded-md px-3 py-1.5 text-[0.68rem]">
        {Icon ? <Icon /> : null}
        <span>{eyebrow}</span>
      </Badge>
      <div className="space-y-3">
        <h2 className="text-balance font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </div>
  );
}