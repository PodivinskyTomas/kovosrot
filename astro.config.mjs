import { defineConfig } from 'astro/config';
import { CMS_COLLECTION_LOCATIONS } from "./src/constants.ts";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

function pageTextsItem(filename) {
  return {
    create: false,
    delete: false,
    file: CMS_COLLECTION_LOCATIONS.PAGE_TEXTS + "/" + filename
  };
}
const openingHoursCollection = {
  ...pageTextsItem("provozni_doba.md"),
  name: "provozni_doba",
  label: "Provozní doba",
  slug: "Provozní doba",
  fields: [{
    label: "Text",
    name: "body",
    widget: "text",
    sanitize_preview: true
  }]
};
const aboutUsCollection = {
  ...pageTextsItem("about_us.md"),
  name: "about_us",
  label: "O nás",
  slug: "O nás",
  fields: [{
    label: "Text",
    name: "body",
    widget: "text",
    sanitize_preview: true
  }]
};
const whatWeBuy = {
  ...pageTextsItem("what_we_buy.md"),
  name: "what_we_buy",
  label: "Co vykupujeme?",
  slug: "Co vykupujeme?",
  fields: [{
    label: "Seznam vykupovaného zboží",
    name: "list",
    widget: "list"
  }]
};
const faq = {
  ...pageTextsItem("faq.md"),
  name: "faq",
  label: "Často kladené otázky",
  slug: "Často kladené otázky",
  fields: [{
    label: "Často kladená otázka",
    name: "faq",
    widget: "list",
    fields: [{
      label: "Otázka",
      name: "faq_question",
      widget: "text"
    }, {
      label: "Odpověď",
      name: "faq_answer",
      widget: "text"
    }]
  }]
};
const pageTexts = {
  name: "page_texts",
  label: "Texty na stránce",
  description: "Nastavení textů v jednotlivých sekcích stránky",
  files: [aboutUsCollection, openingHoursCollection, whatWeBuy, faq]
};

// https://astro.build/config
export default defineConfig({
  site: "https://www.sbernalitovel.cz/",
  integrations: [sitemap({
    filter: page => page !== 'https://www.sbernalitovel.cz/administrace/' && page !== 'https://www.sbernalitovel.cz/administrace'
  })]
});