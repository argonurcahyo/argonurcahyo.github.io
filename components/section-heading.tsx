import type { LucideIcon } from "lucide-react";

import { StaggerContainer, StaggerItem } from "@/components/motion-primitives";
import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export function SectionHeading({ eyebrow, title, description, icon: Icon }: SectionHeadingProps) {
  return (
    <StaggerContainer className="max-w-2xl space-y-4" once amount={0.35}>
      <StaggerItem>
        <Badge variant="secondary" className="w-fit rounded-md px-3 py-1.5 text-[0.68rem]">
          {Icon ? <Icon /> : null}
          <span>{eyebrow}</span>
        </Badge>
      </StaggerItem>
      <div className="space-y-3">
        <StaggerItem>
          <h2 className="text-balance font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        </StaggerItem>
      </div>
    </StaggerContainer>
  );
}