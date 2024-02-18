import type { MarkdownInstance } from "astro";
import {ZonedDateTime} from "@js-joda/core";

export async function actualities(
    actualities: MarkdownInstance<Record<string, any>>[],
    numberOfNewsToLoad: number = 3
) {
    actualities.sort(function (file1, file2) {
        return (
            ZonedDateTime.parse(file2.frontmatter.creation_date).toEpochSecond() -
            ZonedDateTime.parse(file1.frontmatter.creation_date).toEpochSecond()
        );
    });
    return actualities.slice(0, numberOfNewsToLoad);
}

export function sortArticlesByDate(d1: Date, d2: Date): number {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();

    if (date1 > date2) {
        return 2;
    } else if (date1 < date2) {
        return 1;
    }
    return 0;
}