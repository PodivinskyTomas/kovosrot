import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sbernalitovel.cz/",
  integrations: [sitemap({
    filter: page => page !== 'https://www.sbernalitovel.cz/administrace/' && page !== 'https://www.sbernalitovel.cz/administrace'
  })]
});