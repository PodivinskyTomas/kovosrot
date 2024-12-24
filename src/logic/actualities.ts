import type { MarkdownInstance } from "astro";

export async function actualities(
    actualities: MarkdownInstance<Record<string, any>>[],
    numberOfNewsToLoad: number = 3
) {
    actualities.sort(function (file1, file2) {
        return (
            new Date(file2.frontmatter.creation_date) -
            new Date(file1.frontmatter.creation_date)
        );
    });
    return actualities.slice(0, numberOfNewsToLoad);
}
