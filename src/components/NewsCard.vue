<template>
    <a :href="'/article/' + file.file.substring(file.file.lastIndexOf('/') + 1, file.file.length - '.md'.length)"
        class="news-card">
        <div class="news-card__date-box">
            <h3>{{ day }}</h3>
            <h3>{{ month }}, {{ year }}</h3>
        </div>
        <div class="news-card__content">
            <h3>{{ file.frontmatter.title }}</h3>
            <p>{{ fileContent }}</p>
        </div>
    </a>
</template>
<script lang="ts">
export default {
    name: "NewsCard",
    computed: {
        fileContent(): string {
            const fileContent: string = this.file.rawContent.call(this);
            const maxTextLength = 48;
            if (fileContent.length > maxTextLength) {
                return fileContent.substring(0, maxTextLength) + " [...]";
            }
            return fileContent;
        }
    },
    props: {
        file: {
            type: Object,
            required: true
        }
    },
    created() {
        let date: string = this.file.frontmatter.date;
        date = date.substring(0, date.indexOf("T")).replaceAll("-", ".");
        const dateParts = date.split(".");
        this.day = dateParts[2];
        this.month = dateParts[1];
        this.year = dateParts[0];
    },
    data() {
        return {
            day: "",
            month: "",
            year: ""
        }
    }
}
</script>
<style scoped>
.news-card {
    background-color: var(--white);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    box-sizing: border-box;
    word-wrap: break-word;
    transition: 0.4s ease;
    text-decoration: none;
    color: black;
}

.news-card:hover {
    box-shadow: 0px 0px 10px 0px grey;
}

.news-card__date-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--p1);
    color: var(--white);
    padding: 0.5rem;
    border-radius: 12px;
    text-align: center;
}

.news-card__content {
    padding: 0.5rem 0 0.5rem 1.5rem;
    text-align: left;
    max-width: 200px;
}

.news-card__content h3 {
    margin-bottom: 0.5rem;
}
</style>