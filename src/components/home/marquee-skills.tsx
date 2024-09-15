import Marquee from "@/components/magicui/marquee";

const skills = [
  { link: "https://skillicons.dev/icons?i=androidstudio" },
  { link: "https://skillicons.dev/icons?i=arch" },
  { link: "https://skillicons.dev/icons?i=astro" },
  { link: "https://skillicons.dev/icons?i=aws" },
  { link: "https://skillicons.dev/icons?i=bash" },
  { link: "https://skillicons.dev/icons?i=bun" },
  { link: "https://skillicons.dev/icons?i=react" },
  { link: "https://skillicons.dev/icons?i=nextjs" },
  { link: "https://skillicons.dev/icons?i=nodejs" },
  { link: "https://skillicons.dev/icons?i=html" },
  { link: "https://skillicons.dev/icons?i=js" },
  { link: "https://skillicons.dev/icons?i=ts" },
  { link: "https://skillicons.dev/icons?i=css" },
  { link: "https://skillicons.dev/icons?i=tailwind" },
  { link: "https://skillicons.dev/icons?i=bootstrap" },
  { link: "https://skillicons.dev/icons?i=c" },
  { link: "https://skillicons.dev/icons?i=cpp" },
  { link: "https://skillicons.dev/icons?i=codepen" },
  { link: "https://skillicons.dev/icons?i=dart" },
  { link: "https://skillicons.dev/icons?i=debian" },
  { link: "https://skillicons.dev/icons?i=docker" },
  { link: "https://skillicons.dev/icons?i=express" },
  { link: "https://skillicons.dev/icons?i=figma" },
  { link: "https://skillicons.dev/icons?i=firebase" },
  { link: "https://skillicons.dev/icons?i=flutter" },
  { link: "https://skillicons.dev/icons?i=git" },
  { link: "https://skillicons.dev/icons?i=github" },
  { link: "https://skillicons.dev/icons?i=go" },
  { link: "https://skillicons.dev/icons?i=linux" },
  { link: "https://skillicons.dev/icons?i=mongodb" },
  { link: "https://skillicons.dev/icons?i=neovim" },
  { link: "https://skillicons.dev/icons?i=postgres" },
  { link: "https://skillicons.dev/icons?i=prisma" },
  { link: "https://skillicons.dev/icons?i=py" },
  { link: "https://skillicons.dev/icons?i=redux" },
  { link: "https://skillicons.dev/icons?i=supabase" },
  { link: "https://skillicons.dev/icons?i=vite" }
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

export function MarqueeSkills() {
  return (
    <div className="relative h-40 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background space-y-3 max-w-xs sm:max-w-2xl">
      <Marquee className="[--duration:30s] max-w-xs sm:max-w-2xl">
        {firstRow.map(icon => (
          <img key={icon.link} src={icon.link} decoding="async" alt="skill" />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s] max-w-xs sm:max-w-2xl">
        {secondRow.map(icon => (
          <img key={icon.link} src={icon.link} decoding="async" alt="skill" />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}
