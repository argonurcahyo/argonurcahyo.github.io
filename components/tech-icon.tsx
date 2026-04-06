import { Cpu } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

type TechIconProps = {
  tech: string;
  className?: string;
};

const iconMap: Record<string, IconType> = {
  laravel: SiLaravel,
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  next: SiNextdotjs,
  python: SiPython,
  typescript: SiTypescript,
  php: SiPhp,
  javascript: SiJavascript,
  "tailwind css": SiTailwindcss,
  tailwind: SiTailwindcss,
  "vue 3": SiVuedotjs,
  vue: SiVuedotjs,
  "jupyter notebook": SiJupyter,
  jupyter: SiJupyter,
};

export function TechIcon({ tech, className }: TechIconProps) {
  const key = tech.trim().toLowerCase();
  const Icon = iconMap[key];

  if (!Icon) {
    return <Cpu className={className} aria-hidden="true" />;
  }

  return <Icon className={className} aria-hidden="true" />;
}
