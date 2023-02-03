import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
import vue from "@astrojs/vue";

const articleCollection = {
    name: "article",
    label: "Aktuality",
    folder: "public/cms/articles",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{title}}",
    fields: [
        { label: "Titulek", name: "title", widget: "string" },
        { label: "Datum vytvoření", name: "creation_date", widget: "date" }, // TODO make not modifiable
        { label: "Zpráva", name: "body", widget: "markdown" }
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
            locale: "cs",
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'main',
                },
                collections: [
                    articleCollection,
                ],
            },
        }),
        vue()
    ]
});