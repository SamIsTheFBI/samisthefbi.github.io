import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://samisthefbi.github.io',
  integrations: [tailwind({
    applyBaseStyles: true
  }), react()],
  image: {
    domains: [
      "cdn.donmai.us",
    ],
  },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'rose-pine',
      wrap: true,
    },
  },
  server: {
    host: true,
  }
});
