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
    description: "Aktuální události. Zobrazují se na stránce hned v první sekci. Pište sem třeba dovolené nebo nějaké velké změny v chodu firmy.",
    fields: [{
        label: "Titulek",
        name: "title",
        widget: "string",
    },
    {
        label: "Zpráva",
        name: "body",
        widget: "markdown",
        sanitize_preview: true,
    },
    {
        label: "Dovolená",
        name: "vacation",
        hint: "Jedná se o dovolenou?",
        widget: "boolean"
    },
    {
        label: "Zobrazovat do (vyplňovat pouze pokud se jedná o dovolenou)",
        name: "show_until",
        hint: "Do kdy by se mělo zobrazovat upozornění na dovolenou",
        default: "",
        date_format: "DD.MM.YYYY",
        time_format: false,
        widget: "datetime",
        required: false,
        picker_utc: true
    },
    {
        label: "Datum vytvoření",
        name: "creation_date",
        default: new Date(),
        widget: "hidden"
    },
    {
        label: "Layout",
        name: "layout",
        widget: "hidden",
        default: "../../layouts/Article.astro",
    }]
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
        sanitize_preview: true,
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
    description: "Nastavení textů v jednotlivých sekcích stránky",
    files: [
        openingHoursCollection,
        aboutUsCollection,
        whatWeBuy
    ]
}

// https://astro.build/config
export default defineConfig({
    site: "https://www.sbernalitovel.cz/",
    integrations: [NetlifyCMS({
        previewStyles: [],
        adminPath: "/administrace",
        disableIdentityWidgetInjection: true,
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