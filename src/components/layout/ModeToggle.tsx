import { LuMoonStar as Moon, LuSun as Sun } from "react-icons/lu";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const root = document.documentElement;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="bg-transparent hover:bg-background/15">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {
          const t = "light"
          localStorage.setItem("theme", t)
          root.classList.remove("dark")
        }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          const t = "dark"
          localStorage.setItem("theme", t)
          root.classList.add("dark")
        }}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          const t = "system"
          localStorage.setItem("theme", t)

          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.classList.add("dark")
          } else {
            root.classList.remove("dark")
          }
        }}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
