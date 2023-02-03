import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import { CMS_COLLECTION_LOCATIONS } from "./src/constants.ts";

// https://astro.build/config
import vue from "@astrojs/vue";

const articleCollection = {
    name: "article",
    label: "Aktuality",
    folder: CMS_COLLECTION_LOCATIONS.ARTICLES,
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{title}}",
    fields: [
        { label: "Titulek", name: "title", widget: "string" },
        { label: "Datum vytvoření", name: "creation_date", widget: "date" }, // TODO make not modifiable
        { label: "Zpráva", name: "body", widget: "markdown", sanitize_preview: true }
    ]
}

const openingHoursCollection = {
    name: "provozni_doba",
    label: "Provozní doba",
    folder: CMS_COLLECTION_LOCATIONS.OPENING_HOURS,
    create: false,
    slug: "Provozní doba",
    fields: [
        {
            label: "Text",
            name: "body",
            widget: "markdown",
            sanitize_preview: true
        },
    ]
}

const aboutUsCollection = {
    name: "about_us",
    label: "O nás",
    folder: CMS_COLLECTION_LOCATIONS.ABOUT_US,
    create: false,
    slug: "O nás",
    fields: [
        {
            label: "Text",
            name: "body",
            widget: "markdown",
            sanitize_preview: true
        },
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
    integrations: [
        NetlifyCMS({
            previewStyles: [],
            adminPath: "/admin",
            config: {
                locale: "cs",
                backend: {
                    name: 'git-gateway',
                    branch: 'main',
                },
                collections: [
                    articleCollection,
                    openingHoursCollection,
                    aboutUsCollection
                ],
            },
        }),
        vue()
    ]
});