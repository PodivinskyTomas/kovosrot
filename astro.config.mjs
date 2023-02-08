import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import { CMS_COLLECTION_LOCATIONS } from "./src/constants.ts";

// https://astro.build/config
import vue from "@astrojs/vue";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

const articleCollection = {
    name: "article",
    label: "Aktuality",
    label_singular: "Aktualita",
    folder: CMS_COLLECTION_LOCATIONS.ARTICLES,
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{title}}",
    fields: [{
        label: "Titulek",
        name: "title",
        widget: "string"
    },
    {
        label: "Datum vytvoření",
        name: "creation_date",
        date_format: "DD.MM.YYYY",
        time_format: false,
        widget: "datetime"
    },
    {
        label: "Zpráva",
        name: "body",
        widget: "markdown",
        sanitize_preview: true
    },
    {
        label: "Layout",
        name: "layout",
        widget: "hidden",
        default: "../../layouts/Article.astro",
    }
    ]
};

function pageTextsItem(filename) {
    return {
        create: false,
        delete: false,
        file: CMS_COLLECTION_LOCATIONS.PAGE_TEXTS + "/" + filename,
    }
}
const openingHoursCollection = {
    ...pageTextsItem("provozni_doba.md"),
    name: "provozni_doba",
    label: "Provozní doba",
    slug: "Provozní doba",
    fields: [{
        label: "Text",
        name: "body",
        widget: "markdown",
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
        widget: "markdown",
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
        widget: "list",
    }]
};

const pageTexts = {
    name: "page_texts",
    label: "Texty na stránce",
    files: [
        openingHoursCollection,
        aboutUsCollection,
        whatWeBuy
    ]
}
// const openingHoursDayWarnings = {
//     name: "warnings",
//     label: "Varování - změna otevírací doby",
//     folder: "public/cms/warnings/opening_hours",
//     create: true,
//     slug: "{{year}}-{{month}}-{{day}}-{{title}}",
//     fields: [
//         { label: "Zobrazovat do", name: "show_until", widget: "date" },
//         { label: "Zpráva", name: "body", widget: "markdown" },
//         {
//             label: "dny",
//             name: "days",
//             widget: "list",
//             fields: [
//                 {
//                     label: "Začátek",
//                     name: "start",
//                     widget: "date",
//                 }
//             ]
//         }
//     ]
// }

// https://astro.build/config
export default defineConfig({
    site: "https://kovosrot-podivinsky.netlify.app/",
    integrations: [NetlifyCMS({
        previewStyles: [],
        adminPath: "/administrace",
        config: {
            locale: "cs",
            search: false,
            backend: {
                name: 'git-gateway',
                branch: 'master'
            },
            collections: [articleCollection, pageTexts]
        }
    }), vue(), compress(), sitemap()]
});