import Marquee from "@/components/magicui/marquee";
import Arch from "@/assets/skills/arch.svg"
import Astro from "@/assets/skills/astro.svg"
import Aws from "@/assets/skills/aws.svg"
import Bash from "@/assets/skills/bash.svg"
import Bootstrap from "@/assets/skills/bootstrap.svg"
import Bun from "@/assets/skills/bun.svg"
import Clang from "@/assets/skills/c.svg"
import Codepen from "@/assets/skills/codepen.svg"
import Cpp from "@/assets/skills/cpp.svg"
import Debian from "@/assets/skills/debian.svg"
import Docker from "@/assets/skills/docker.svg"
import Express from "@/assets/skills/express.svg"
import Figma from "@/assets/skills/figma.svg"
import Git from "@/assets/skills/git.svg"
import Github from "@/assets/skills/github.svg"
import Html from "@/assets/skills/html.svg"
import Js from "@/assets/skills/js.svg"
import Linux from "@/assets/skills/linux.svg"
import Neovim from "@/assets/skills/neovim.svg"
import Nextjs from "@/assets/skills/nextjs.svg"
import Nodejs from "@/assets/skills/nodejs.svg"
import Postgres from "@/assets/skills/postgres.svg"
import Prisma from "@/assets/skills/prisma.svg"
import React from "@/assets/skills/react.svg"
import Supabase from "@/assets/skills/supabase.svg"
import Tailwind from "@/assets/skills/tailwind.svg"
import Ts from "@/assets/skills/ts.svg"
import Vite from "@/assets/skills/vite.svg"

const skills = [
  Arch,
  Astro,
  Bash,
  Aws,
  Bash,
  Bootstrap,
  Bun,
  Clang,
  Codepen,
  Cpp,
  Debian,
  Docker,
  Express,
  Figma,
  Git,
  Github,
  Html,
  Js,
  Linux,
  Neovim,
  Nextjs,
  Nodejs,
  Postgres,
  Prisma,
  React,
  Supabase,
  Tailwind,
  Ts,
  Vite
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

export function MarqueeSkills() {
  return (
    <div className="relative h-40 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background space-y-3 max-w-xs sm:max-w-2xl">
      <Marquee className="[--duration:30s] max-w-xs sm:max-w-2xl">
        {firstRow.map((icon, idx) => (
          <img key={idx} src={icon.src} decoding="async" alt="skill" />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s] max-w-xs sm:max-w-2xl">
        {secondRow.map((icon, idx) => (
          <img key={idx} src={icon.src} decoding="async" alt="skill" />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}
