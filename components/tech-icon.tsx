import { Cpu, Database, Map } from "lucide-react";
import type { ComponentType } from "react";
import {
  SiAndroid,
  SiFlutter,
  SiGo,
  SiJavascript,
  SiJupyter,
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiSqlite,
  SiTurso,
  SiChromewebstore,
  SiThemoviedatabase,
  SiQgis,
} from "react-icons/si";

type TechIconProps = {
  tech: string;
  className?: string;
};

type TechIconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const iconMap: Record<string, TechIconComponent> = {
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
  gis: Map,
  qgis: SiQgis,
  "map analysis": Map,
  "spatial data": Map,
  "thematic maps": Map,
  java: SiOpenjdk,
  android: SiAndroid,
  kotlin: SiKotlin,
  flutter: SiFlutter,
  golang: SiGo,
  dbms: Database,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  turso: SiTurso,
  'chrome extension': SiChromewebstore,
  'tmdb api': SiThemoviedatabase,
};

export function TechIcon({ tech, className }: TechIconProps) {
  const key = tech.trim().toLowerCase();
  const Icon = iconMap[key];

  if (!Icon) {
    return <Cpu className={className} aria-hidden={true} />;
  }

  return <Icon className={className} aria-hidden={true} />;
}
